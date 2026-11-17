import os
import re
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory
import psycopg2
from psycopg2.pool import ThreadedConnectionPool
from psycopg2.extras import RealDictCursor, Json

ROOT_DIR = Path(__file__).resolve().parent.parent

app = Flask(__name__, static_folder=str(ROOT_DIR), static_url_path="")

DB_CONFIG = {
    "host": os.environ.get("PGHOST", os.environ.get("DB_HOST", "localhost")),
    "port": int(os.environ.get("PGPORT", os.environ.get("DB_PORT", 5432))),
    "dbname": os.environ.get("PGDATABASE", os.environ.get("DB_NAME", "cpa-ambima")),
    "user": os.environ.get("PGUSER", os.environ.get("DB_USER", "postgres")),
    "password": os.environ.get("PGPASSWORD", os.environ.get("DB_PASSWORD", "postgres")),
}

ANBIMA_WEIGHTS = {
    1: 0.20,
    2: 0.40,
    3: 0.30,
    4: 0.10,
}

STUDY_MATERIALS_MANIFEST = [
    {
        "id": "modulo1",
        "module_id": 1,
        "slug": "modulo1_sfn_economia",
        "rel_path": "modulos/modulo1_sfn_economia.md",
        "default_title": "Módulo 1: Estrutura e Dinâmica do Sistema Financeiro Nacional (SFN)",
        "peso": "20%",
        "questoes_prova": 10,
    },
    {
        "id": "modulo2",
        "module_id": 2,
        "slug": "modulo2_produtos",
        "rel_path": "modulos/modulo2_produtos.md",
        "default_title": "Módulo 2: Produtos do Mercado Financeiro (CPA ANBIMA)",
        "peso": "40%",
        "questoes_prova": 20,
    },
    {
        "id": "modulo3",
        "module_id": 3,
        "slug": "modulo3_relacionamento_etica",
        "rel_path": "modulos/modulo3_relacionamento_etica.md",
        "default_title": "Módulo 3: Relacionamento com o Cliente, Finanças Pessoais e Ética",
        "peso": "30%",
        "questoes_prova": 15,
    },
    {
        "id": "modulo4",
        "module_id": 4,
        "slug": "modulo4_inovacao",
        "rel_path": "modulos/modulo4_inovacao.md",
        "default_title": "Módulo 4: Inovação e Desenvolvimento de Mercado (ESG, DeFi, Open Finance e IA)",
        "peso": "10%",
        "questoes_prova": 5,
    },
    {
        "id": "plano_sprint_terca",
        "module_id": 0,
        "slug": "PLANO_SPRINT_TERCA",
        "rel_path": "PLANO_SPRINT_TERCA.md",
        "default_title": "Plano Sprint de Aprovação Intensiva — CPA ANBIMA",
        "peso": "100%",
        "questoes_prova": 50,
    },
]

_db_pool = None


def get_db_pool() -> ThreadedConnectionPool:
    """Initializes or returns the singleton PostgreSQL ThreadedConnectionPool."""
    global _db_pool
    if _db_pool is None or _db_pool.closed:
        _db_pool = ThreadedConnectionPool(
            minconn=int(os.environ.get("PGPOOL_MIN", 1)),
            maxconn=int(os.environ.get("PGPOOL_MAX", 20)),
            **DB_CONFIG,
        )
    return _db_pool


class PooledConnection:
    """
    Lightweight proxy around a psycopg2 connection checked out from ThreadedConnectionPool.
    Calling .close() safely rolls back any uncommitted state and returns the connection to the pool.
    """

    def __init__(self, pool: ThreadedConnectionPool, raw_conn):
        self._pool = pool
        self._conn = raw_conn
        self._returned = False

    def cursor(self, *args, **kwargs):
        return self._conn.cursor(*args, **kwargs)

    def commit(self):
        return self._conn.commit()

    def rollback(self):
        return self._conn.rollback()

    def close(self):
        if not self._returned:
            self._returned = True
            try:
                if not self._conn.closed and self._conn.info.transaction_status not in (
                    psycopg2.extensions.TRANSACTION_STATUS_IDLE,
                ):
                    self._conn.rollback()
            except Exception:
                pass
            try:
                self._pool.putconn(self._conn, close=bool(self._conn.closed))
            except Exception:
                try:
                    self._conn.close()
                except Exception:
                    pass

    def __enter__(self):
        return self._conn.__enter__()

    def __exit__(self, exc_type, exc_val, exc_tb):
        return self._conn.__exit__(exc_type, exc_val, exc_tb)

    def __getattr__(self, name):
        return getattr(self._conn, name)


def get_db_connection():
    """Acquires a connection from the PostgreSQL ThreadedConnectionPool."""
    pool = get_db_pool()
    raw_conn = pool.getconn()
    if raw_conn.closed:
        pool.putconn(raw_conn, close=True)
        raw_conn = psycopg2.connect(**DB_CONFIG)
        return raw_conn
    return PooledConnection(pool, raw_conn)


def release_db_connection(conn):
    """Returns a connection back to the pool."""
    if conn is not None:
        conn.close()


def fetch_counts(cur):
    cur.execute(
        """
        SELECT
            (SELECT COUNT(*) FROM modules) AS modules,
            (SELECT COUNT(*) FROM topics) AS topics,
            (SELECT COUNT(*) FROM questions) AS questions,
            (SELECT COUNT(*) FROM questions WHERE oficial = TRUE) AS official_questions,
            (SELECT COUNT(*) FROM questions WHERE oficial = FALSE) AS ineditas_questions,
            (SELECT COUNT(*) FROM decision_maps) AS decision_maps,
            (SELECT COUNT(*) FROM flashcards) AS flashcards,
            (SELECT COUNT(*) FROM sprint_blocks) AS sprint_blocks,
            (SELECT COUNT(*) FROM cola_cards) AS cola_cards
        """
    )
    row = cur.fetchone()
    return {
        "modules": int(row["modules"]),
        "topics": int(row["topics"]),
        "questions": int(row["questions"]),
        "official_questions": int(row["official_questions"]),
        "ineditas_questions": int(row["ineditas_questions"]),
        "decision_maps": int(row["decision_maps"]),
        "flashcards": int(row["flashcards"]),
        "sprint_blocks": int(row["sprint_blocks"]),
        "cola_cards": int(row["cola_cards"]),
    }


def format_simulation(row):
    created_at = row["created_at"]
    created_iso = created_at.isoformat() if hasattr(created_at, "isoformat") else str(created_at)
    return {
        "id": row["id"],
        "mode": row["mode"],
        "totalQuestions": row["total_questions"],
        "total_questions": row["total_questions"],
        "correctAnswers": row["correct_answers"],
        "correct_answers": row["correct_answers"],
        "scorePct": row["score_pct"],
        "score_pct": row["score_pct"],
        "passed": bool(row["passed"]),
        "durationSeconds": row["duration_seconds"],
        "duration_seconds": row["duration_seconds"],
        "details": row["details"] if row["details"] is not None else [],
        "created_at": created_iso,
        "createdAt": created_iso,
    }


def parse_markdown_sections(md_text: str):
    """Splits a Markdown document into structured H2 sections for interactive reading."""
    lines = md_text.splitlines()
    sections = []
    current_title = "Visão Geral"
    current_lines = []

    for line in lines:
        m = re.match(r"^##\s+(.+)$", line.strip())
        if m:
            if current_lines:
                content_block = "\n".join(current_lines).strip()
                if content_block:
                    sections.append(
                        {
                            "index": len(sections) + 1,
                            "title": current_title,
                            "titulo": current_title,
                            "content": content_block,
                            "conteudo": content_block,
                        }
                    )
            current_title = m.group(1).strip()
            current_lines = [line]
        else:
            current_lines.append(line)

    if current_lines:
        content_block = "\n".join(current_lines).strip()
        if content_block:
            sections.append(
                {
                    "index": len(sections) + 1,
                    "title": current_title,
                    "titulo": current_title,
                    "content": content_block,
                    "conteudo": content_block,
                }
            )

    return sections


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response


@app.route("/api/health", methods=["GET"])
def api_health():
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT 1 AS ok;")
            cur.fetchone()
            counts = fetch_counts(cur)
        return jsonify(
            {
                "status": "ok",
                "database": DB_CONFIG["dbname"],
                "engine": "PostgreSQL 16 + Python Flask (ThreadedConnectionPool)",
                "pool": {
                    "type": "ThreadedConnectionPool",
                    "host": DB_CONFIG["host"],
                    "port": DB_CONFIG["port"],
                },
                "counts": counts,
            }
        )
    finally:
        conn.close()


@app.route("/api/bootstrap", methods=["GET"])
def api_bootstrap():
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT key FROM topics WHERE mastered = TRUE;")
            mastered_topics = {r["key"]: True for r in cur.fetchall()}

            cur.execute("SELECT question_id, correta, chosen_text FROM user_answers;")
            answered_questions = {
                r["question_id"]: {
                    "correct": bool(r["correta"]),
                    "chosenText": r["chosen_text"] or "",
                }
                for r in cur.fetchall()
            }

            cur.execute("SELECT id FROM questions WHERE favorita = TRUE;")
            favorite_questions = {r["id"]: True for r in cur.fetchall()}

            cur.execute("SELECT id, best_score FROM decision_maps WHERE completed = TRUE;")
            completed_cases = {
                r["id"]: {"completed": True, "bestScore": int(r["best_score"] or 0)}
                for r in cur.fetchall()
            }

            cur.execute("SELECT id FROM sprint_blocks WHERE concluido = TRUE;")
            sprint_done = {r["id"]: True for r in cur.fetchall()}

            cur.execute(
                """
                SELECT id, mode, total_questions, correct_answers, score_pct,
                       passed, duration_seconds, details, created_at
                FROM exam_simulations
                ORDER BY created_at DESC, id DESC
                LIMIT 20;
                """
            )
            simulations = [format_simulation(r) for r in cur.fetchall()]

            counts = fetch_counts(cur)

        return jsonify(
            {
                "masteredTopics": mastered_topics,
                "answeredQuestions": answered_questions,
                "favoriteQuestions": favorite_questions,
                "completedCases": completed_cases,
                "sprintDone": sprint_done,
                "simulations": simulations,
                "counts": counts,
            }
        )
    finally:
        conn.close()


@app.route("/api/modules", methods=["GET"])
def api_modules():
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                "SELECT id, titulo, peso, questoes_prova, resumo_executivo FROM modules ORDER BY id ASC;"
            )
            modules_rows = cur.fetchall()

            cur.execute(
                """
                SELECT key, module_id, codigo, titulo, prioridade,
                       explicacao, gatilhos_prova, pegadinhas, mastered
                FROM topics
                ORDER BY module_id ASC, codigo ASC;
                """
            )
            topics_rows = cur.fetchall()

            cur.execute(
                """
                SELECT id, module_id, ordem, frente, verso, mastered
                FROM flashcards
                ORDER BY module_id ASC, ordem ASC;
                """
            )
            flashcards_rows = cur.fetchall()

            cur.execute(
                """
                SELECT id, module_id, oficial, codigo_item, codigo_pd,
                       topico_pd, nivel_cognitivo, dificuldade, contexto,
                       enunciado, alternativas, gabarito_comentado, favorita
                FROM questions
                ORDER BY module_id ASC, id ASC;
                """
            )
            questions_rows = cur.fetchall()

        modules_by_id = {}
        result = []
        for m in modules_rows:
            mod_obj = {
                "id": m["id"],
                "titulo": m["titulo"],
                "peso": m["peso"],
                "questoesProva": m["questoes_prova"],
                "questoes_prova": m["questoes_prova"],
                "resumoExecutivo": m["resumo_executivo"],
                "resumo_executivo": m["resumo_executivo"],
                "topicos": [],
                "flashcards": [],
                "questoes": [],
            }
            modules_by_id[m["id"]] = mod_obj
            result.append(mod_obj)

        for t in topics_rows:
            mod_obj = modules_by_id.get(t["module_id"])
            if mod_obj is not None:
                mod_obj["topicos"].append(
                    {
                        "key": t["key"],
                        "module_id": t["module_id"],
                        "codigo": t["codigo"],
                        "titulo": t["titulo"],
                        "prioridade": t["prioridade"],
                        "explicacao": t["explicacao"],
                        "gatilhosProva": t["gatilhos_prova"],
                        "gatilhos_prova": t["gatilhos_prova"],
                        "pegadinhas": t["pegadinhas"],
                        "mastered": bool(t["mastered"]),
                    }
                )

        for fc in flashcards_rows:
            mod_obj = modules_by_id.get(fc["module_id"])
            if mod_obj is not None:
                mod_obj["flashcards"].append(
                    {
                        "id": fc["id"],
                        "module_id": fc["module_id"],
                        "ordem": fc["ordem"],
                        "frente": fc["frente"],
                        "verso": fc["verso"],
                        "mastered": bool(fc["mastered"]),
                    }
                )

        for q in questions_rows:
            mod_obj = modules_by_id.get(q["module_id"])
            if mod_obj is not None:
                mod_obj["questoes"].append(
                    {
                        "id": q["id"],
                        "module_id": q["module_id"],
                        "moduloId": q["module_id"],
                        "oficial": bool(q["oficial"]),
                        "codigoItem": q["codigo_item"],
                        "codigo_item": q["codigo_item"],
                        "codigoPD": q["codigo_pd"],
                        "codigo_pd": q["codigo_pd"],
                        "topicoPD": q["topico_pd"],
                        "topico_pd": q["topico_pd"],
                        "nivelCognitivo": q["nivel_cognitivo"],
                        "nivel_cognitivo": q["nivel_cognitivo"],
                        "dificuldade": q["dificuldade"],
                        "contexto": q["contexto"],
                        "enunciado": q["enunciado"],
                        "alternativas": q["alternativas"],
                        "gabaritoComentado": q["gabarito_comentado"],
                        "gabarito_comentado": q["gabarito_comentado"],
                        "favorita": bool(q["favorita"]),
                    }
                )

        return jsonify(result)
    finally:
        conn.close()


@app.route("/api/maps", methods=["GET"])
def api_maps():
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                SELECT id, codigo_item, modulo, titulo, topico_pd,
                       dificuldade, limite, etapas, questoes_objetivas,
                       completed, best_score
                FROM decision_maps
                ORDER BY id ASC;
                """
            )
            rows = cur.fetchall()

        result = [
            {
                "id": r["id"],
                "codigoItem": r["codigo_item"],
                "codigo_item": r["codigo_item"],
                "modulo": r["modulo"],
                "titulo": r["titulo"],
                "topicoPD": r["topico_pd"],
                "topico_pd": r["topico_pd"],
                "dificuldade": r["dificuldade"],
                "limite": r["limite"],
                "etapas": r["etapas"],
                "questoesObjetivas": r["questoes_objetivas"],
                "questoes_objetivas": r["questoes_objetivas"],
                "completed": bool(r["completed"]),
                "bestScore": int(r["best_score"] or 0),
                "best_score": int(r["best_score"] or 0),
            }
            for r in rows
        ]
        return jsonify(result)
    finally:
        conn.close()


@app.route("/api/analytics", methods=["GET"])
def api_analytics():
    """
    Calculates executive diagnostic metrics directly in PostgreSQL (cpa-ambima):
    - Per-module breakdown: weight (20%/40%/30%/10%), total questions, answered, hits,
      accuracy %, mastered topics, module readiness score.
    - Global ANBIMA Readiness Score weighted by 20% / 40% / 30% / 10%.
    - Priority topics for review ordered by ANBIMA module weight and topic priority.
    """
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                WITH q_stats AS (
                    SELECT
                        q.module_id,
                        COUNT(*) AS total_questions,
                        COUNT(*) FILTER (WHERE q.oficial = TRUE) AS official_questions,
                        COUNT(ua.question_id) AS answered_questions,
                        COUNT(ua.question_id) FILTER (WHERE ua.correta = TRUE) AS correct_answers,
                        COUNT(*) FILTER (WHERE q.favorita = TRUE) AS favorite_questions
                    FROM questions q
                    LEFT JOIN user_answers ua ON ua.question_id = q.id
                    GROUP BY q.module_id
                ),
                t_stats AS (
                    SELECT
                        t.module_id,
                        COUNT(*) AS total_topics,
                        COUNT(*) FILTER (WHERE t.mastered = TRUE) AS mastered_topics
                    FROM topics t
                    GROUP BY t.module_id
                ),
                fc_stats AS (
                    SELECT
                        f.module_id,
                        COUNT(*) AS total_flashcards,
                        COUNT(*) FILTER (WHERE f.mastered = TRUE) AS mastered_flashcards
                    FROM flashcards f
                    GROUP BY f.module_id
                )
                SELECT
                    m.id,
                    m.titulo,
                    m.peso,
                    m.questoes_prova,
                    CASE m.id
                        WHEN 1 THEN 20
                        WHEN 2 THEN 40
                        WHEN 3 THEN 30
                        WHEN 4 THEN 10
                        ELSE 25
                    END AS weight_pct,
                    CASE m.id
                        WHEN 1 THEN 0.20
                        WHEN 2 THEN 0.40
                        WHEN 3 THEN 0.30
                        WHEN 4 THEN 0.10
                        ELSE 0.25
                    END AS weight_decimal,
                    COALESCE(qs.total_questions, 0) AS total_questions,
                    COALESCE(qs.official_questions, 0) AS official_questions,
                    COALESCE(qs.answered_questions, 0) AS answered_questions,
                    COALESCE(qs.correct_answers, 0) AS correct_answers,
                    COALESCE(qs.favorite_questions, 0) AS favorite_questions,
                    CASE
                        WHEN COALESCE(qs.answered_questions, 0) > 0
                        THEN ROUND((qs.correct_answers::NUMERIC / qs.answered_questions::NUMERIC) * 100, 1)
                        ELSE 0.0
                    END AS accuracy_pct,
                    CASE
                        WHEN COALESCE(qs.total_questions, 0) > 0
                        THEN ROUND((qs.answered_questions::NUMERIC / qs.total_questions::NUMERIC) * 100, 1)
                        ELSE 0.0
                    END AS coverage_pct,
                    COALESCE(ts.total_topics, 0) AS total_topics,
                    COALESCE(ts.mastered_topics, 0) AS mastered_topics,
                    CASE
                        WHEN COALESCE(ts.total_topics, 0) > 0
                        THEN ROUND((ts.mastered_topics::NUMERIC / ts.total_topics::NUMERIC) * 100, 1)
                        ELSE 0.0
                    END AS topics_mastery_pct,
                    COALESCE(fs.total_flashcards, 0) AS total_flashcards,
                    COALESCE(fs.mastered_flashcards, 0) AS mastered_flashcards
                FROM modules m
                LEFT JOIN q_stats qs ON qs.module_id = m.id
                LEFT JOIN t_stats ts ON ts.module_id = m.id
                LEFT JOIN fc_stats fs ON fs.module_id = m.id
                ORDER BY m.id ASC;
                """
            )
            mod_rows = cur.fetchall()

            # Priority topics for review (unmastered first, weighted by ANBIMA module weight 40%->30%->20%->10%)
            cur.execute(
                """
                SELECT
                    t.key,
                    t.module_id,
                    m.titulo AS modulo_titulo,
                    m.peso AS peso_modulo,
                    t.codigo,
                    t.titulo,
                    t.prioridade,
                    t.mastered,
                    t.gatilhos_prova,
                    t.pegadinhas
                FROM topics t
                JOIN modules m ON m.id = t.module_id
                ORDER BY
                    t.mastered ASC,
                    CASE
                        WHEN LOWER(COALESCE(t.prioridade, '')) LIKE 'alta%' OR LOWER(COALESCE(t.prioridade, '')) LIKE 'm%xima%' THEN 1
                        WHEN LOWER(COALESCE(t.prioridade, '')) LIKE 'm%dia%' THEN 2
                        ELSE 3
                    END ASC,
                    CASE t.module_id
                        WHEN 2 THEN 1
                        WHEN 3 THEN 2
                        WHEN 1 THEN 3
                        WHEN 4 THEN 4
                        ELSE 5
                    END ASC,
                    t.codigo ASC
                LIMIT 15;
                """
            )
            priority_rows = cur.fetchall()

            cur.execute(
                """
                SELECT
                    (SELECT COUNT(*) FROM decision_maps) AS total_maps,
                    (SELECT COUNT(*) FROM decision_maps WHERE completed = TRUE) AS completed_maps,
                    (SELECT COUNT(*) FROM sprint_blocks) AS total_sprint_blocks,
                    (SELECT COUNT(*) FROM sprint_blocks WHERE concluido = TRUE) AS completed_sprint_blocks,
                    (SELECT COUNT(*) FROM exam_simulations) AS total_simulations,
                    COALESCE((SELECT ROUND(AVG(score_pct)::NUMERIC, 1) FROM exam_simulations), 0.0) AS avg_simulation_score
                """
            )
            extra_stats = cur.fetchone()

        modules_diagnostics = []
        weighted_readiness_sum = 0.0
        weighted_accuracy_sum = 0.0

        total_q_all = 0
        official_q_all = 0
        answered_q_all = 0
        correct_q_all = 0
        total_t_all = 0
        mastered_t_all = 0

        for r in mod_rows:
            mod_id = int(r["id"])
            w_pct = int(r["weight_pct"])
            w_dec = float(r["weight_decimal"])
            tot_q = int(r["total_questions"])
            off_q = int(r["official_questions"])
            ans_q = int(r["answered_questions"])
            cor_q = int(r["correct_answers"])
            acc_pct = float(r["accuracy_pct"])
            cov_pct = float(r["coverage_pct"])
            tot_t = int(r["total_topics"])
            mas_t = int(r["mastered_topics"])
            t_mas_pct = float(r["topics_mastery_pct"])

            # Module readiness blends accuracy (70% weight when questions answered) + topic mastery (15%) + coverage (15%)
            if ans_q > 0:
                mod_readiness = round((acc_pct * 0.70) + (t_mas_pct * 0.15) + (cov_pct * 0.15), 1)
            else:
                mod_readiness = round(t_mas_pct * 0.30, 1)

            weighted_contrib = round(mod_readiness * w_dec, 2)
            weighted_readiness_sum += mod_readiness * w_dec
            weighted_accuracy_sum += acc_pct * w_dec

            total_q_all += tot_q
            official_q_all += off_q
            answered_q_all += ans_q
            correct_q_all += cor_q
            total_t_all += tot_t
            mastered_t_all += mas_t

            if acc_pct >= 75.0 and ans_q >= 5:
                mod_status = "DOMINADO"
            elif acc_pct >= 60.0 or mas_t > 0 or ans_q > 0:
                mod_status = "EM_EVOLUCAO"
            else:
                mod_status = "PRIORITARIO"

            modules_diagnostics.append(
                {
                    "id": mod_id,
                    "moduleId": mod_id,
                    "module_id": mod_id,
                    "titulo": r["titulo"],
                    "title": r["titulo"],
                    "peso": r["peso"],
                    "weightPct": w_pct,
                    "weight_pct": w_pct,
                    "weightDecimal": w_dec,
                    "weight_decimal": w_dec,
                    "questoesProva": int(r["questoes_prova"]),
                    "questoes_prova": int(r["questoes_prova"]),
                    "totalQuestions": tot_q,
                    "total_questions": tot_q,
                    "officialQuestions": off_q,
                    "official_questions": off_q,
                    "answeredQuestions": ans_q,
                    "answered_questions": ans_q,
                    "respondidas": ans_q,
                    "correctAnswers": cor_q,
                    "correct_answers": cor_q,
                    "acertos": cor_q,
                    "accuracyPct": acc_pct,
                    "accuracy_pct": acc_pct,
                    "taxaAcerto": acc_pct,
                    "taxa_acerto": acc_pct,
                    "coveragePct": cov_pct,
                    "coverage_pct": cov_pct,
                    "totalTopics": tot_t,
                    "total_topics": tot_t,
                    "masteredTopics": mas_t,
                    "mastered_topics": mas_t,
                    "topicosDominados": mas_t,
                    "topicos_dominados": mas_t,
                    "topicsMasteryPct": t_mas_pct,
                    "topics_mastery_pct": t_mas_pct,
                    "readinessScore": mod_readiness,
                    "readiness_score": mod_readiness,
                    "weightedContribution": weighted_contrib,
                    "weighted_contribution": weighted_contrib,
                    "status": mod_status,
                }
            )

        overall_acc_pct = (
            round((correct_q_all / answered_q_all) * 100.0, 1) if answered_q_all > 0 else 0.0
        )
        overall_topics_pct = (
            round((mastered_t_all / total_t_all) * 100.0, 1) if total_t_all > 0 else 0.0
        )
        readiness_score = round(weighted_readiness_sum, 1)
        weighted_accuracy_pct = round(weighted_accuracy_sum, 1)

        priority_topics = [
            {
                "key": pr["key"],
                "moduleId": int(pr["module_id"]),
                "module_id": int(pr["module_id"]),
                "moduloTitulo": pr["modulo_titulo"],
                "modulo_titulo": pr["modulo_titulo"],
                "pesoModulo": pr["peso_modulo"],
                "peso_modulo": pr["peso_modulo"],
                "codigo": pr["codigo"],
                "titulo": pr["titulo"],
                "prioridade": pr["prioridade"] or "Alta",
                "mastered": bool(pr["mastered"]),
                "gatilhosProva": pr["gatilhos_prova"] or [],
                "gatilhos_prova": pr["gatilhos_prova"] or [],
                "pegadinhas": pr["pegadinhas"] or [],
            }
            for pr in priority_rows
        ]

        summary = {
            "totalQuestions": total_q_all,
            "total_questions": total_q_all,
            "officialQuestions": official_q_all,
            "official_questions": official_q_all,
            "answeredQuestions": answered_q_all,
            "answered_questions": answered_q_all,
            "correctAnswers": correct_q_all,
            "correct_answers": correct_q_all,
            "accuracyPct": overall_acc_pct,
            "accuracy_pct": overall_acc_pct,
            "weightedAccuracyPct": weighted_accuracy_pct,
            "weighted_accuracy_pct": weighted_accuracy_pct,
            "readinessScore": readiness_score,
            "readiness_score": readiness_score,
            "totalTopics": total_t_all,
            "total_topics": total_t_all,
            "masteredTopics": mastered_t_all,
            "mastered_topics": mastered_t_all,
            "topicsMasteryPct": overall_topics_pct,
            "topics_mastery_pct": overall_topics_pct,
            "totalMaps": int(extra_stats["total_maps"]),
            "total_maps": int(extra_stats["total_maps"]),
            "completedMaps": int(extra_stats["completed_maps"]),
            "completed_maps": int(extra_stats["completed_maps"]),
            "totalSprintBlocks": int(extra_stats["total_sprint_blocks"]),
            "total_sprint_blocks": int(extra_stats["total_sprint_blocks"]),
            "completedSprintBlocks": int(extra_stats["completed_sprint_blocks"]),
            "completed_sprint_blocks": int(extra_stats["completed_sprint_blocks"]),
            "totalSimulations": int(extra_stats["total_simulations"]),
            "total_simulations": int(extra_stats["total_simulations"]),
            "avgSimulationScore": float(extra_stats["avg_simulation_score"]),
            "avg_simulation_score": float(extra_stats["avg_simulation_score"]),
        }

        return jsonify(
            {
                "status": "ok",
                "database": DB_CONFIG["dbname"],
                "readinessScore": readiness_score,
                "readiness_score": readiness_score,
                "weightedAccuracyPct": weighted_accuracy_pct,
                "weighted_accuracy_pct": weighted_accuracy_pct,
                "overallAccuracyPct": overall_acc_pct,
                "overall_accuracy_pct": overall_acc_pct,
                "targetScorePct": 70.0,
                "target_score_pct": 70.0,
                "readyForExam": readiness_score >= 70.0,
                "ready_for_exam": readiness_score >= 70.0,
                "weights": {"1": 20, "2": 40, "3": 30, "4": 10},
                "summary": summary,
                "totals": summary,
                "modules": modules_diagnostics,
                "byModule": modules_diagnostics,
                "moduleDiagnostics": modules_diagnostics,
                "priorityTopics": priority_topics,
                "priority_topics": priority_topics,
                "topicosPrioritarios": priority_topics,
            }
        )
    finally:
        conn.close()


@app.route("/api/study-materials", methods=["GET"])
def api_study_materials():
    """
    Returns the complete Markdown study guides (modulos/modulo1..4 + PLANO_SPRINT_TERCA.md)
    structured in JSON for direct reading in the corporate financial interface.
    """
    materials = []
    by_id = {}

    for item in STUDY_MATERIALS_MANIFEST:
        file_path = ROOT_DIR / item["rel_path"]
        content = ""
        if file_path.exists():
            content = file_path.read_text(encoding="utf-8")

        heading_match = re.search(r"^#\s+(.+)$", content, flags=re.MULTILINE)
        title = heading_match.group(1).strip() if heading_match else item["default_title"]
        sections = parse_markdown_sections(content) if content else []
        words = len(content.split())
        lines = len(content.splitlines())
        reading_time_min = max(1, round(words / 200))

        doc = {
            "id": item["id"],
            "moduleId": item["module_id"],
            "module_id": item["module_id"],
            "slug": item["slug"],
            "filename": item["rel_path"],
            "path": item["rel_path"],
            "title": title,
            "titulo": title,
            "peso": item["peso"],
            "questoesProva": item["questoes_prova"],
            "questoes_prova": item["questoes_prova"],
            "content": content,
            "markdown": content,
            "conteudo": content,
            "sections": sections,
            "secoes": sections,
            "wordCount": words,
            "word_count": words,
            "lineCount": lines,
            "line_count": lines,
            "readingTimeMinutes": reading_time_min,
            "reading_time_minutes": reading_time_min,
        }
        materials.append(doc)
        by_id[item["id"]] = doc
        by_id[item["slug"]] = doc
        by_id[item["rel_path"]] = doc
        by_id[Path(item["rel_path"]).name] = doc
        if item["module_id"]:
            by_id[str(item["module_id"])] = doc
        else:
            by_id["sprint"] = doc

    return jsonify(
        {
            "status": "ok",
            "total": len(materials),
            "materials": materials,
            "apostilas": materials,
            "items": materials,
            "byId": by_id,
            "by_id": by_id,
        }
    )


@app.route("/api/topics/toggle", methods=["POST"])
def api_topics_toggle():
    data = request.get_json(silent=True) or {}
    key = data.get("key")
    if not key:
        return jsonify({"ok": False, "error": "Missing 'key'"}), 400

    explicit_val = data.get("mastered") if isinstance(data.get("mastered"), bool) else None
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                UPDATE topics
                SET mastered = COALESCE(%s, NOT mastered)
                WHERE key = %s
                RETURNING key, mastered;
                """,
                (explicit_val, str(key)),
            )
            row = cur.fetchone()
        conn.commit()
        if not row:
            return jsonify({"ok": False, "error": "Topic not found"}), 404
        return jsonify({"ok": True, "key": row["key"], "mastered": bool(row["mastered"])})
    finally:
        conn.close()


@app.route("/api/questions/answer", methods=["POST"])
def api_questions_answer():
    data = request.get_json(silent=True) or {}
    question_id = data.get("questionId") or data.get("question_id")
    if not question_id or "correct" not in data:
        return jsonify({"ok": False, "error": "Missing 'questionId' or 'correct'"}), 400

    correta = bool(data.get("correct"))
    chosen_text = data.get("chosenText", data.get("chosen_text", ""))

    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO user_answers (question_id, correta, chosen_text)
                VALUES (%s, %s, %s)
                ON CONFLICT (question_id) DO UPDATE SET
                    correta = EXCLUDED.correta,
                    chosen_text = EXCLUDED.chosen_text,
                    answered_at = CURRENT_TIMESTAMP;
                """,
                (str(question_id), correta, str(chosen_text) if chosen_text is not None else ""),
            )
        conn.commit()
        return jsonify({"ok": True})
    finally:
        conn.close()


@app.route("/api/questions/favorite", methods=["POST"])
def api_questions_favorite():
    data = request.get_json(silent=True) or {}
    question_id = data.get("questionId") or data.get("question_id")
    if not question_id:
        return jsonify({"ok": False, "error": "Missing 'questionId'"}), 400

    explicit_val = data.get("favorita") if isinstance(data.get("favorita"), bool) else None
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                UPDATE questions
                SET favorita = COALESCE(%s, NOT favorita)
                WHERE id = %s
                RETURNING favorita;
                """,
                (explicit_val, str(question_id)),
            )
            row = cur.fetchone()
        conn.commit()
        if not row:
            return jsonify({"ok": False, "error": "Question not found"}), 404
        return jsonify({"ok": True, "favorita": bool(row["favorita"])})
    finally:
        conn.close()


@app.route("/api/maps/complete", methods=["POST"])
def api_maps_complete():
    data = request.get_json(silent=True) or {}
    map_id = data.get("mapId") or data.get("map_id")
    if not map_id:
        return jsonify({"ok": False, "error": "Missing 'mapId'"}), 400

    score = int(data.get("score", 0))
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                UPDATE decision_maps
                SET completed = TRUE,
                    best_score = GREATEST(best_score, %s)
                WHERE id = %s OR codigo_item = %s
                RETURNING id, completed, best_score;
                """,
                (score, str(map_id), str(map_id)),
            )
            row = cur.fetchone()
        conn.commit()
        if not row:
            return jsonify({"ok": False, "error": "Decision map not found"}), 404
        return jsonify({"ok": True, "mapId": row["id"], "bestScore": int(row["best_score"])})
    finally:
        conn.close()


@app.route("/api/sprint/toggle", methods=["POST"])
def api_sprint_toggle():
    data = request.get_json(silent=True) or {}
    block_id = data.get("blockId") or data.get("block_id")
    if not block_id:
        return jsonify({"ok": False, "error": "Missing 'blockId'"}), 400

    explicit_val = data.get("concluido") if isinstance(data.get("concluido"), bool) else None
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                UPDATE sprint_blocks
                SET concluido = COALESCE(%s, NOT concluido)
                WHERE id = %s
                RETURNING id, concluido;
                """,
                (explicit_val, str(block_id)),
            )
            row = cur.fetchone()
        conn.commit()
        if not row:
            return jsonify({"ok": False, "error": "Sprint block not found"}), 404
        return jsonify({"ok": True, "blockId": row["id"], "concluido": bool(row["concluido"])})
    finally:
        conn.close()


@app.route("/api/simulations", methods=["POST"])
def api_simulations_create():
    data = request.get_json(silent=True) or {}
    mode = str(data.get("mode", "50Q"))
    total_questions = int(data.get("totalQuestions", data.get("total_questions", 50)))
    correct_answers = int(data.get("correctAnswers", data.get("correct_answers", 0)))
    score_pct = int(data.get("scorePct", data.get("score_pct", 0)))
    passed = bool(data.get("passed", score_pct >= 70))
    duration_seconds = int(data.get("durationSeconds", data.get("duration_seconds", 0)))
    details = data.get("details", [])

    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                INSERT INTO exam_simulations (
                    mode, total_questions, correct_answers, score_pct,
                    passed, duration_seconds, details
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                RETURNING id, mode, total_questions, correct_answers, score_pct,
                          passed, duration_seconds, details, created_at;
                """,
                (
                    mode,
                    total_questions,
                    correct_answers,
                    score_pct,
                    passed,
                    duration_seconds,
                    Json(details),
                ),
            )
            row = cur.fetchone()
        conn.commit()
        res = format_simulation(row)
        res["ok"] = True
        return jsonify(res), 201
    finally:
        conn.close()


def ensure_auth_tables(conn):
    with conn.cursor() as cur:
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email_hash TEXT UNIQUE NOT NULL,
                email_masked TEXT NOT NULL,
                display_alias TEXT NOT NULL,
                password_hash TEXT NOT NULL,
                google_sub TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            ALTER TABLE users ADD COLUMN IF NOT EXISTS google_sub TEXT;
            CREATE TABLE IF NOT EXISTS password_resets (
                id SERIAL PRIMARY KEY,
                email_hash TEXT NOT NULL,
                code_hash TEXT NOT NULL,
                expires_at TIMESTAMP NOT NULL,
                used BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS user_difficulties (
                id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                module_id INT,
                topic_pd TEXT,
                question_id TEXT NOT NULL,
                error_reason TEXT DEFAULT 'conceito',
                error_count INT DEFAULT 1,
                last_error_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user_id, question_id)
            );
            """
        )
    conn.commit()


@app.route("/api/auth/google", methods=["POST"])
def auth_google():
    import urllib.request
    import json as pyjson
    from backend.auth import hash_email, mask_email, hash_password, create_jwt

    data = request.get_json(silent=True) or {}
    id_token = (data.get("idToken") or "").strip()
    if not id_token:
        return jsonify({"error": "idToken do Google é obrigatório."}), 400

    try:
        url = f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}"
        with urllib.request.urlopen(url, timeout=8) as resp:
            info = pyjson.loads(resp.read().decode("utf-8"))
    except Exception:
        return jsonify({"error": "Token do Google inválido ou expirado."}), 401

    email = (info.get("email") or "").strip()
    if not email:
        return jsonify({"error": "Conta Google sem e-mail verificado."}), 400

    expected_aud = os.environ.get("GOOGLE_CLIENT_ID", "")
    if expected_aud and info.get("aud") != expected_aud:
        return jsonify({"error": "Client ID do Google não corresponde."}), 401

    e_hash = hash_email(email)
    e_masked = mask_email(email)
    alias = (info.get("name") or "Candidato Google")[:40]
    google_sub = info.get("sub")

    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        with conn.cursor() as cur:
            cur.execute("SELECT id, display_alias, email_masked FROM users WHERE email_hash = %s", (e_hash,))
            row = cur.fetchone()
            if row:
                cur.execute("UPDATE users SET google_sub = %s WHERE id = %s", (google_sub, row[0]))
                user_id, user_alias, user_masked = row[0], row[1], row[2]
            else:
                cur.execute(
                    """
                    INSERT INTO users (email_hash, email_masked, display_alias, password_hash, google_sub)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id, display_alias, email_masked
                    """,
                    (e_hash, e_masked, alias, hash_password(os.urandom(16).hex()), google_sub),
                )
                r = cur.fetchone()
                user_id, user_alias, user_masked = r[0], r[1], r[2]
        conn.commit()
        token = create_jwt(user_id, user_alias, user_masked)
        return jsonify({"ok": True, "token": token, "user": {"id": user_id, "alias": user_alias, "emailMasked": user_masked}})
    finally:
        conn.close()


@app.route("/api/auth/forgot-password", methods=["POST"])
def auth_forgot_password():
    import hashlib
    import secrets
    from backend.auth import hash_email
    from backend.mailer import send_email

    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip()
    if "@" not in email:
        return jsonify({"error": "Informe um e-mail válido."}), 400

    e_hash = hash_email(email)
    code = str(secrets.randbelow(900000) + 100000)
    code_hash = hashlib.sha256(code.encode("utf-8")).hexdigest()

    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        with conn.cursor() as cur:
            cur.execute("SELECT id FROM users WHERE email_hash = %s", (e_hash,))
            exists = cur.fetchone()
            if exists:
                cur.execute(
                    """
                    INSERT INTO password_resets (email_hash, code_hash, expires_at)
                    VALUES (%s, %s, CURRENT_TIMESTAMP + INTERVAL '15 minutes')
                    """,
                    (e_hash, code_hash),
                )
        conn.commit()
        sent = False
        if exists:
            sent = send_email(
                email,
                "Código de Recuperação de Senha • CPA Pro Mastery",
                f"<p>Seu código de verificação é: <strong style='font-size:20px'>{code}</strong></p><p>Válido por 15 minutos.</p>",
            )
        resp = {"ok": True, "emailSent": sent, "message": "Se o e-mail existir, enviamos um código de 6 dígitos."}
        if not sent and exists:
            resp["devCode"] = code
        return jsonify(resp)
    finally:
        conn.close()


@app.route("/api/auth/reset-password", methods=["POST"])
def auth_reset_password():
    import hashlib
    from backend.auth import hash_email, hash_password

    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip()
    code = (data.get("code") or "").strip()
    new_password = data.get("newPassword") or ""

    if "@" not in email or len(code) != 6 or len(new_password) < 6:
        return jsonify({"error": "E-mail, código de 6 dígitos e nova senha (>=6) são obrigatórios."}), 400

    e_hash = hash_email(email)
    code_hash = hashlib.sha256(code.encode("utf-8")).hexdigest()

    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT id FROM password_resets
                WHERE email_hash = %s AND code_hash = %s AND used = FALSE AND expires_at > CURRENT_TIMESTAMP
                ORDER BY created_at DESC LIMIT 1
                """,
                (e_hash, code_hash),
            )
            reset_row = cur.fetchone()
            if not reset_row:
                return jsonify({"error": "Código inválido ou expirado."}), 400
            cur.execute("UPDATE password_resets SET used = TRUE WHERE id = %s", (reset_row[0],))
            cur.execute("UPDATE users SET password_hash = %s WHERE email_hash = %s", (hash_password(new_password), e_hash))
        conn.commit()
        return jsonify({"ok": True, "message": "Senha redefinida com sucesso!"})
    finally:
        conn.close()


@app.route("/api/auth/register", methods=["POST"])
def auth_register():
    from backend.auth import hash_email, mask_email, hash_password, create_jwt

    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip()
    password = data.get("password") or ""
    alias = (data.get("alias") or "").strip() or "Candidato CPA"

    if "@" not in email or len(password) < 6:
        return jsonify({"error": "Informe um e-mail válido e senha com no mínimo 6 caracteres."}), 400

    e_hash = hash_email(email)
    e_masked = mask_email(email)
    pw_hash = hash_password(password)

    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        with conn.cursor() as cur:
            cur.execute("SELECT id FROM users WHERE email_hash = %s", (e_hash,))
            if cur.fetchone():
                return jsonify({"error": "Este e-mail já possui cadastro."}), 409
            cur.execute(
                """
                INSERT INTO users (email_hash, email_masked, display_alias, password_hash)
                VALUES (%s, %s, %s, %s)
                RETURNING id, display_alias, email_masked
                """,
                (e_hash, e_masked, alias[:40], pw_hash),
            )
            row = cur.fetchone()
        conn.commit()
        token = create_jwt(row[0], row[1], row[2])
        return jsonify(
            {
                "ok": True,
                "token": token,
                "user": {"id": row[0], "alias": row[1], "emailMasked": row[2]},
            }
        ), 201
    finally:
        conn.close()


@app.route("/api/auth/login", methods=["POST"])
def auth_login():
    from backend.auth import hash_email, verify_password, create_jwt

    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip()
    password = data.get("password") or ""

    if not email or not password:
        return jsonify({"error": "E-mail e senha são obrigatórios."}), 400

    e_hash = hash_email(email)
    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        with conn.cursor() as cur:
            cur.execute(
                "SELECT id, display_alias, email_masked, password_hash FROM users WHERE email_hash = %s",
                (e_hash,),
            )
            row = cur.fetchone()
        if not row or not verify_password(password, row[3]):
            return jsonify({"error": "Credenciais inválidas."}), 401
        token = create_jwt(row[0], row[1], row[2])
        return jsonify(
            {
                "ok": True,
                "token": token,
                "user": {"id": row[0], "alias": row[1], "emailMasked": row[2]},
            }
        )
    finally:
        conn.close()


@app.route("/api/auth/me", methods=["GET"])
def auth_me():
    from backend.auth import get_current_user_from_header

    user = get_current_user_from_header()
    if not user:
        return jsonify({"error": "Não autenticado."}), 401
    return jsonify(
        {
            "ok": True,
            "user": {
                "id": int(user["sub"]),
                "alias": user.get("alias"),
                "emailMasked": user.get("emailMasked"),
            },
        }
    )


@app.route("/api/difficulties", methods=["GET", "POST"])
def handle_difficulties():
    from backend.auth import get_current_user_from_header

    user = get_current_user_from_header()
    if not user:
        return jsonify({"error": "Autenticação JWT obrigatória."}), 401
    user_id = int(user["sub"])

    conn = get_db_connection()
    try:
        ensure_auth_tables(conn)
        if request.method == "POST":
            data = request.get_json(silent=True) or {}
            q_id = data.get("questionId")
            mod_id = data.get("moduleId")
            topic_pd = data.get("topicPd") or ""
            reason = data.get("errorReason") or "conceito"
            if not q_id:
                return jsonify({"error": "questionId obrigatório."}), 400
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO user_difficulties (user_id, module_id, topic_pd, question_id, error_reason, error_count, last_error_at)
                    VALUES (%s, %s, %s, %s, %s, 1, CURRENT_TIMESTAMP)
                    ON CONFLICT (user_id, question_id) DO UPDATE SET
                        error_reason = EXCLUDED.error_reason,
                        error_count = user_difficulties.error_count + 1,
                        last_error_at = CURRENT_TIMESTAMP
                    """,
                    (user_id, mod_id, topic_pd, q_id, reason),
                )
            conn.commit()
            return jsonify({"ok": True})

        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT module_id, topic_pd, question_id, error_reason, error_count, last_error_at
                FROM user_difficulties
                WHERE user_id = %s
                ORDER BY error_count DESC, last_error_at DESC
                """,
                (user_id,),
            )
            rows = cur.fetchall()

        by_module = {}
        by_reason = {}
        items = []
        for r in rows:
            m_key = str(r[0] or "?")
            by_module[m_key] = by_module.get(m_key, 0) + r[4]
            by_reason[r[3]] = by_reason.get(r[3], 0) + r[4]
            items.append(
                {
                    "moduleId": r[0],
                    "topicPd": r[1],
                    "questionId": r[2],
                    "errorReason": r[3],
                    "errorCount": r[4],
                    "lastErrorAt": r[5].isoformat() if r[5] else None,
                }
            )
        return jsonify({"ok": True, "byModule": by_module, "byReason": by_reason, "items": items})
    finally:
        conn.close()


@app.route("/src/<path:filename>", methods=["GET"])
def serve_src_files(filename):
    return send_from_directory(ROOT_DIR / "src", filename)


@app.route("/data/<path:filename>", methods=["GET"])
def serve_data_files(filename):
    return send_from_directory(ROOT_DIR / "data", filename)


@app.route("/modulos/<path:filename>", methods=["GET"])
def serve_modulos_files(filename):
    return send_from_directory(ROOT_DIR / "modulos", filename)


@app.route("/assets/<path:filename>", methods=["GET"])
def serve_react_assets(filename):
    return send_from_directory(ROOT_DIR / "frontend" / "dist" / "assets", filename)


@app.route("/", methods=["GET"])
def serve_index():
    dist_index = ROOT_DIR / "frontend" / "dist" / "index.html"
    if dist_index.exists():
        return send_from_directory(ROOT_DIR / "frontend" / "dist", "index.html")
    return send_from_directory(ROOT_DIR, "index.html")


@app.route("/<path:filename>", methods=["GET"])
def serve_static_files(filename):
    return send_from_directory(ROOT_DIR, filename)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
