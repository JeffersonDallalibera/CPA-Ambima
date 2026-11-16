import json
import sys

try:
    import psycopg2
    def get_conn():
        return psycopg2.connect(
            host="localhost",
            port=5432,
            dbname="cpa-ambima",
            user="postgres",
            password="postgres"
        )
except ImportError:
    import psycopg
    def get_conn():
        return psycopg.connect(
            host="localhost",
            port=5432,
            dbname="cpa-ambima",
            user="postgres",
            password="postgres"
        )


def parse_jsonb(val):
    if isinstance(val, str):
        return json.loads(val)
    return val


def run_tests():
    errors = []

    # 1. Verify database connection
    try:
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("SELECT 1;")
        res = cur.fetchone()
        assert res and res[0] == 1, "Failed basic SELECT 1 check"
        print("[PASS] 1. Conexão com o banco 'cpa-ambima' estabelecida com sucesso.")
    except Exception as e:
        print(f"[FAIL] 1. Erro ao conectar ao banco 'cpa-ambima': {e}")
        sys.exit(1)

    # 2. Verify exact table counts
    expected_counts = {
        "modules": 4,
        "topics": 38,
        "questions": 148,
        "decision_maps": 10,
        "flashcards": 78,
        "sprint_blocks": 16,
        "cola_cards": 10,
    }

    for table, expected in expected_counts.items():
        try:
            cur.execute(f"SELECT COUNT(*) FROM {table};")
            actual = cur.fetchone()[0]
            if actual == expected:
                print(f"[PASS] 2. Tabela '{table}': {actual} registros (esperado: {expected}).")
            else:
                msg = f"Tabela '{table}' possui {actual} registros, esperado {expected}."
                print(f"[FAIL] 2. {msg}")
                errors.append(msg)
        except Exception as e:
            msg = f"Erro ao consultar tabela '{table}': {e}"
            print(f"[FAIL] 2. {msg}")
            errors.append(msg)
            conn.rollback()

    # Check questions oficial = true (121) and oficial = false (27)
    try:
        cur.execute("SELECT COUNT(*) FROM questions WHERE oficial = true;")
        oficial_true = cur.fetchone()[0]
        cur.execute("SELECT COUNT(*) FROM questions WHERE oficial = false;")
        oficial_false = cur.fetchone()[0]

        if oficial_true == 121 and oficial_false == 27:
            print(f"[PASS] 2b. Questões oficiais: {oficial_true} (true) e {oficial_false} (false).")
        else:
            msg = f"Contagem de questões por 'oficial' incorreta: oficial=true ({oficial_true}, esperado 121), oficial=false ({oficial_false}, esperado 27)."
            print(f"[FAIL] 2b. {msg}")
            errors.append(msg)
    except Exception as e:
        msg = f"Erro ao verificar coluna 'oficial' em 'questions': {e}"
        print(f"[FAIL] 2b. {msg}")
        errors.append(msg)
        conn.rollback()

    # 3. Verify all 148 questions have 'alternativas' JSONB with 4 items and 1 'correta == True'
    try:
        cur.execute("SELECT id, alternativas FROM questions;")
        rows = cur.fetchall()
        if len(rows) != 148:
            msg = f"Foram retornadas {len(rows)} questões na validação de alternativas, esperado 148."
            print(f"[FAIL] 3. {msg}")
            errors.append(msg)

        invalid_questions = []
        for q_id, alt_raw in rows:
            alts = parse_jsonb(alt_raw)
            if not isinstance(alts, list) or len(alts) != 4:
                invalid_questions.append(f"Questão {q_id}: esperado 4 alternativas, encontrado {len(alts) if isinstance(alts, list) else type(alts)}")
                continue
            corretas = [a for a in alts if isinstance(a, dict) and a.get("correta") is True]
            if len(corretas) != 1:
                invalid_questions.append(f"Questão {q_id}: esperado exatamente 1 alternativa correta==True, encontrado {len(corretas)}")

        if not invalid_questions:
            print(f"[PASS] 3. Todas as {len(rows)} questões possuem 'alternativas' JSONB com 4 itens e 1 correta == True.")
        else:
            msg = f"Falha na validação de alternativas das questões: {'; '.join(invalid_questions[:10])}"
            print(f"[FAIL] 3. {msg}")
            errors.append(msg)
    except Exception as e:
        msg = f"Erro ao validar 'alternativas' em 'questions': {e}"
        print(f"[FAIL] 3. {msg}")
        errors.append(msg)
        conn.rollback()

    # 4. Verify all 10 decision_maps have valid 'etapas' JSONB and 2 'questoes_objetivas'
    try:
        cur.execute("SELECT id, etapas, questoes_objetivas FROM decision_maps;")
        dm_rows = cur.fetchall()
        if len(dm_rows) != 10:
            msg = f"Foram retornados {len(dm_rows)} decision_maps, esperado 10."
            print(f"[FAIL] 4. {msg}")
            errors.append(msg)

        invalid_dms = []
        for dm_id, etapas_raw, qo_raw in dm_rows:
            etapas = parse_jsonb(etapas_raw)
            qo = parse_jsonb(qo_raw)

            if not etapas or not isinstance(etapas, (list, dict)) or len(etapas) == 0:
                invalid_dms.append(f"Decision map {dm_id}: 'etapas' JSONB inválido ou vazio ({type(etapas)})")
            if not isinstance(qo, list) or len(qo) != 2:
                invalid_dms.append(f"Decision map {dm_id}: esperado 2 'questoes_objetivas', encontrado {len(qo) if isinstance(qo, list) else type(qo)}")

        if not invalid_dms:
            print(f"[PASS] 4. Todos os {len(dm_rows)} decision_maps possuem 'etapas' JSONB válidas e 2 'questoes_objetivas'.")
        else:
            msg = f"Falha na validação de 'decision_maps': {'; '.join(invalid_dms)}"
            print(f"[FAIL] 4. {msg}")
            errors.append(msg)
    except Exception as e:
        msg = f"Erro ao validar 'decision_maps': {e}"
        print(f"[FAIL] 4. {msg}")
        errors.append(msg)
        conn.rollback()

    # 5. Verify PostgreSQL performance indexes exist
    try:
        cur.execute("SELECT indexname FROM pg_indexes WHERE schemaname = 'public';")
        idx_names = {r[0] for r in cur.fetchall()}
        required_indexes = {
            "idx_topics_module_id",
            "idx_questions_module_id",
            "idx_questions_oficial",
            "idx_flashcards_module_id",
            "idx_sprint_blocks_ordem",
            "idx_cola_cards_ordem",
        }
        missing_idx = required_indexes - idx_names
        if not missing_idx:
            print(f"[PASS] 5. Índices PostgreSQL verificados ({len(idx_names)} índices ativos no schema public).")
        else:
            msg = f"Índices PostgreSQL ausentes: {sorted(missing_idx)}"
            print(f"[FAIL] 5. {msg}")
            errors.append(msg)
    except Exception as e:
        msg = f"Erro ao verificar índices no PostgreSQL: {e}"
        print(f"[FAIL] 5. {msg}")
        errors.append(msg)
        conn.rollback()

    cur.close()
    conn.close()

    if errors:
        print("\n=== RESULTADO FINAL: FALHOU ===")
        for err in errors:
            print(f" - {err}")
        sys.exit(1)
    else:
        print("\n=== RESULTADO FINAL: 100% DOS TESTES PASSARAM ===")
        sys.exit(0)


if __name__ == "__main__":
    run_tests()
