import json
import os
import re
import subprocess
from pathlib import Path
import psycopg2
from psycopg2.extras import Json

DB_HOST = os.environ.get("PGHOST", "localhost")
DB_PORT = int(os.environ.get("PGPORT", "5432"))
DB_USER = os.environ.get("PGUSER", "postgres")
DB_PASS = os.environ.get("PGPASSWORD", "postgres")
DB_NAME = os.environ.get("PGDATABASE", "cpa-ambima")

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
SCHEMA_PATH = Path(__file__).resolve().parent / "schema.sql"


def load_js_object(file_path: Path):
    """Extracts and parses the JS object/array assigned after '=' in a .js data file."""
    text = file_path.read_text(encoding="utf-8")
    eq_idx = text.find("=")
    if eq_idx == -1:
        raise ValueError(f"Assignment '=' not found in {file_path}")
    rhs = text[eq_idx + 1 :].strip().rstrip(";").strip()

    # 1. Try direct JSON parsing first
    try:
        return json.loads(rhs)
    except json.JSONDecodeError:
        pass

    # 2. Try cleaning JS single-line comments and quoting unquoted object keys
    try:
        cleaned = re.sub(r"(?m)^\s*//.*$", "", rhs)
        cleaned = re.sub(
            r"(?m)^(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:",
            r'\1"\2":',
            cleaned,
        )
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass

    # 3. Fallback to Node.js evaluation if available
    node_script = (
        f"const fs = require('fs'); const window = {{}}; "
        f"eval(fs.readFileSync({json.dumps(str(file_path))}, 'utf8')); "
        f"const val = Object.values(window)[0]; "
        f"process.stdout.write(JSON.stringify(val));"
    )
    res = subprocess.run(
        ["node", "-e", node_script],
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    return json.loads(res.stdout)


def ensure_database():
    """Connects to 'postgres' database and creates 'cpa-ambima' if it does not exist."""
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASS,
        dbname="postgres",
    )
    conn.autocommit = True
    try:
        with conn.cursor() as cur:
            cur.execute("SELECT 1 FROM pg_database WHERE datname = %s", (DB_NAME,))
            exists = cur.fetchone()
            if not exists:
                cur.execute(f'CREATE DATABASE "{DB_NAME}" ENCODING \'UTF8\'')
                print(f"[OK] Database '{DB_NAME}' created with UTF8 encoding.")
            else:
                print(f"[OK] Database '{DB_NAME}' already exists.")
    finally:
        conn.close()


def apply_schema(conn):
    """Executes database/schema.sql on the target database."""
    sql = SCHEMA_PATH.read_text(encoding="utf-8")
    with conn.cursor() as cur:
        cur.execute(sql)
    conn.commit()
    print("[OK] Schema applied from database/schema.sql.")


def seed_data(conn):
    """Reads all validated JS files in data/ and populates PostgreSQL tables."""
    mod_files = [
        DATA_DIR / "modulo1_data.js",
        DATA_DIR / "modulo2_data.js",
        DATA_DIR / "modulo3_data.js",
        DATA_DIR / "modulo4_data.js",
    ]
    modules_data = [load_js_object(p) for p in mod_files]
    mapas_data = load_js_object(DATA_DIR / "mapas_decisao_oficiais.js")
    sprint_data = load_js_object(DATA_DIR / "plano_sprint.js")

    with conn.cursor() as cur:
        fc_global_id = 0

        for mod in modules_data:
            mod_id = int(mod["id"])
            cur.execute(
                """
                INSERT INTO modules (id, titulo, peso, questoes_prova, resumo_executivo)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT (id) DO UPDATE SET
                    titulo = EXCLUDED.titulo,
                    peso = EXCLUDED.peso,
                    questoes_prova = EXCLUDED.questoes_prova,
                    resumo_executivo = EXCLUDED.resumo_executivo;
                """,
                (
                    mod_id,
                    mod["titulo"],
                    mod["peso"],
                    int(mod["questoesProva"]),
                    mod["resumoExecutivo"],
                ),
            )

            # Topics
            for t in mod.get("topicos", []):
                topic_key = f"{mod_id}_{t['codigo']}"
                cur.execute(
                    """
                    INSERT INTO topics (
                        key, module_id, codigo, titulo, prioridade,
                        explicacao, gatilhos_prova, pegadinhas, mastered
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, FALSE)
                    ON CONFLICT (key) DO UPDATE SET
                        module_id = EXCLUDED.module_id,
                        codigo = EXCLUDED.codigo,
                        titulo = EXCLUDED.titulo,
                        prioridade = EXCLUDED.prioridade,
                        explicacao = EXCLUDED.explicacao,
                        gatilhos_prova = EXCLUDED.gatilhos_prova,
                        pegadinhas = EXCLUDED.pegadinhas;
                    """,
                    (
                        topic_key,
                        mod_id,
                        t["codigo"],
                        t["titulo"],
                        t.get("prioridade"),
                        t["explicacao"],
                        Json(t.get("gatilhosProva", [])),
                        Json(t.get("pegadinhas", [])),
                    ),
                )

            # Questions
            for q in mod.get("questoes", []):
                codigo_item = q.get("codigoItem")
                if not codigo_item and q.get("numeroOficial") is not None:
                    codigo_item = str(q.get("numeroOficial"))
                cur.execute(
                    """
                    INSERT INTO questions (
                        id, module_id, oficial, codigo_item, codigo_pd,
                        topico_pd, nivel_cognitivo, dificuldade, contexto,
                        enunciado, alternativas, gabarito_comentado, favorita
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, FALSE)
                    ON CONFLICT (id) DO UPDATE SET
                        module_id = EXCLUDED.module_id,
                        oficial = EXCLUDED.oficial,
                        codigo_item = EXCLUDED.codigo_item,
                        codigo_pd = EXCLUDED.codigo_pd,
                        topico_pd = EXCLUDED.topico_pd,
                        nivel_cognitivo = EXCLUDED.nivel_cognitivo,
                        dificuldade = EXCLUDED.dificuldade,
                        contexto = EXCLUDED.contexto,
                        enunciado = EXCLUDED.enunciado,
                        alternativas = EXCLUDED.alternativas,
                        gabarito_comentado = EXCLUDED.gabarito_comentado;
                    """,
                    (
                        str(q["id"]),
                        mod_id,
                        bool(q.get("oficial", False)),
                        codigo_item,
                        q.get("codigoPD"),
                        q.get("topicoPD"),
                        q.get("nivelCognitivo"),
                        q.get("dificuldade"),
                        q.get("contexto", ""),
                        q.get("enunciado", ""),
                        Json(q.get("alternativas", [])),
                        q.get("gabaritoComentado", ""),
                    ),
                )

            # Flashcards
            for idx, fc in enumerate(mod.get("flashcards", []), start=1):
                fc_global_id += 1
                cur.execute(
                    """
                    INSERT INTO flashcards (id, module_id, ordem, frente, verso, mastered)
                    VALUES (%s, %s, %s, %s, %s, FALSE)
                    ON CONFLICT (id) DO UPDATE SET
                        module_id = EXCLUDED.module_id,
                        ordem = EXCLUDED.ordem,
                        frente = EXCLUDED.frente,
                        verso = EXCLUDED.verso;
                    """,
                    (
                        fc_global_id,
                        mod_id,
                        idx,
                        fc["frente"],
                        fc["verso"],
                    ),
                )

        # Reset flashcards serial sequence
        cur.execute(
            "SELECT setval(pg_get_serial_sequence('flashcards', 'id'), COALESCE((SELECT MAX(id) FROM flashcards), 1));"
        )

        # Decision Maps
        for idx, m in enumerate(mapas_data, start=1):
            map_id = str(m.get("id") or m.get("codigoItem") or f"MAP_{idx}")
            codigo_item = str(m.get("codigoItem") or map_id)
            raw_mod = m.get("modulo")
            if isinstance(raw_mod, int):
                modulo_str = f"Módulo {raw_mod}"
            else:
                modulo_str = str(raw_mod or "")
            cliente = m.get("cliente")
            topico_pd = m.get("topicoPD") or ""
            titulo = m.get("titulo") or (
                f"Caso {cliente} — {topico_pd.rstrip('.')}" if cliente else topico_pd
            )
            cur.execute(
                """
                INSERT INTO decision_maps (
                    id, codigo_item, modulo, titulo, topico_pd,
                    dificuldade, limite, etapas, questoes_objetivas,
                    completed, best_score
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, FALSE, 0)
                ON CONFLICT (id) DO UPDATE SET
                    codigo_item = EXCLUDED.codigo_item,
                    modulo = EXCLUDED.modulo,
                    titulo = EXCLUDED.titulo,
                    topico_pd = EXCLUDED.topico_pd,
                    dificuldade = EXCLUDED.dificuldade,
                    limite = EXCLUDED.limite,
                    etapas = EXCLUDED.etapas,
                    questoes_objetivas = EXCLUDED.questoes_objetivas;
                """,
                (
                    map_id,
                    codigo_item,
                    modulo_str,
                    titulo,
                    topico_pd,
                    m.get("dificuldade", "Média"),
                    int(m.get("limite", 5)),
                    Json(m.get("etapas", {})),
                    Json(m.get("questoesObjetivas", [])),
                ),
            )

        # Sprint Blocks
        for idx, b in enumerate(sprint_data.get("blocosEstudo", []), start=1):
            meta_q = b.get("metaQuestoes")
            if isinstance(meta_q, int):
                meta_q_str = f"{meta_q} questões"
            else:
                meta_q_str = str(meta_q or "")
            cur.execute(
                """
                INSERT INTO sprint_blocks (
                    id, ordem, dia, horario, titulo,
                    modulo_foco, peso_foco, tarefas, meta_questoes, concluido
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, FALSE)
                ON CONFLICT (id) DO UPDATE SET
                    ordem = EXCLUDED.ordem,
                    dia = EXCLUDED.dia,
                    horario = EXCLUDED.horario,
                    titulo = EXCLUDED.titulo,
                    modulo_foco = EXCLUDED.modulo_foco,
                    peso_foco = EXCLUDED.peso_foco,
                    tarefas = EXCLUDED.tarefas,
                    meta_questoes = EXCLUDED.meta_questoes;
                """,
                (
                    str(b["id"]),
                    idx,
                    b.get("dia"),
                    b.get("horario"),
                    b.get("titulo"),
                    b.get("moduloFoco") or b.get("modulo_foco"),
                    b.get("pesoFoco") or b.get("peso_foco"),
                    Json(b.get("tarefas", [])),
                    meta_q_str,
                ),
            )

        # Cola Cards
        for idx, c in enumerate(sprint_data.get("colaDeProva", []), start=1):
            titulo = c.get("titulo") or c.get("tema") or f"Cola #{idx}"
            modulo = c.get("modulo") or c.get("categoria") or "Geral"
            if c.get("conteudo"):
                conteudo = c["conteudo"]
            else:
                resumo = c.get("resumo", "")
                pegadinha = c.get("pegadinhaFatal", "")
                conteudo = (
                    f"{resumo} | ⚠️ Pegadinha: {pegadinha}" if pegadinha else resumo
                )
            cur.execute(
                """
                INSERT INTO cola_cards (id, ordem, titulo, modulo, conteudo)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT (id) DO UPDATE SET
                    ordem = EXCLUDED.ordem,
                    titulo = EXCLUDED.titulo,
                    modulo = EXCLUDED.modulo,
                    conteudo = EXCLUDED.conteudo;
                """,
                (
                    idx,
                    idx,
                    titulo,
                    modulo,
                    conteudo,
                ),
            )

        # Reset cola_cards serial sequence
        cur.execute(
            "SELECT setval(pg_get_serial_sequence('cola_cards', 'id'), COALESCE((SELECT MAX(id) FROM cola_cards), 1));"
        )

    conn.commit()


def verify_counts(conn):
    """Queries and prints verification counts for all populated tables."""
    with conn.cursor() as cur:
        cur.execute("SELECT COUNT(*) FROM modules;")
        modules_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM topics;")
        topics_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM questions;")
        questions_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM questions WHERE oficial = TRUE;")
        oficiais_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM questions WHERE oficial = FALSE;")
        ineditas_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM decision_maps;")
        maps_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM flashcards;")
        fc_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM sprint_blocks;")
        sprint_cnt = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM cola_cards;")
        cola_cnt = cur.fetchone()[0]

    print("============================================================")
    print(f"PostgreSQL Database '{DB_NAME}' Seed Summary:")
    print(f"  - modules       : {modules_cnt} (expected: 4)")
    print(f"  - topics        : {topics_cnt} (expected: 38)")
    print(
        f"  - questions     : {questions_cnt} ({oficiais_cnt} oficiais + {ineditas_cnt} inéditas)"
    )
    print(f"  - decision_maps : {maps_cnt} (expected: 10)")
    print(f"  - flashcards    : {fc_cnt} (expected: 78)")
    print(f"  - sprint_blocks : {sprint_cnt} (expected: 16)")
    print(f"  - cola_cards    : {cola_cnt} (expected: 10)")
    print("============================================================")


def main():
    ensure_database()
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASS,
        dbname=DB_NAME,
    )
    try:
        apply_schema(conn)
        seed_data(conn)
        verify_counts(conn)
    finally:
        conn.close()


if __name__ == "__main__":
    main()
