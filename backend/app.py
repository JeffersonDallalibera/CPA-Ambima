import os
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory
import psycopg2
from psycopg2.extras import RealDictCursor, Json

ROOT_DIR = Path(__file__).resolve().parent.parent

app = Flask(__name__, static_folder=str(ROOT_DIR), static_url_path="")


def get_db_connection():
    return psycopg2.connect(
        host=os.environ.get("PGHOST", os.environ.get("DB_HOST", "localhost")),
        port=int(os.environ.get("PGPORT", os.environ.get("DB_PORT", 5432))),
        dbname=os.environ.get("PGDATABASE", os.environ.get("DB_NAME", "cpa-ambima")),
        user=os.environ.get("PGUSER", os.environ.get("DB_USER", "postgres")),
        password=os.environ.get("PGPASSWORD", os.environ.get("DB_PASSWORD", "postgres")),
    )


def fetch_counts(cur):
    cur.execute(
        """
        SELECT
            (SELECT COUNT(*) FROM modules) AS modules,
            (SELECT COUNT(*) FROM topics) AS topics,
            (SELECT COUNT(*) FROM questions) AS questions,
            (SELECT COUNT(*) FROM questions WHERE oficial = TRUE) AS official_questions,
            (SELECT COUNT(*) FROM decision_maps) AS decision_maps,
            (SELECT COUNT(*) FROM flashcards) AS flashcards,
            (SELECT COUNT(*) FROM sprint_blocks) AS sprint_blocks
        """
    )
    row = cur.fetchone()
    return {
        "modules": int(row["modules"]),
        "topics": int(row["topics"]),
        "questions": int(row["questions"]),
        "official_questions": int(row["official_questions"]),
        "decision_maps": int(row["decision_maps"]),
        "flashcards": int(row["flashcards"]),
        "sprint_blocks": int(row["sprint_blocks"]),
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
                "database": os.environ.get("PGDATABASE", os.environ.get("DB_NAME", "cpa-ambima")),
                "engine": "PostgreSQL 16 + Python Flask",
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


@app.route("/", methods=["GET"])
def serve_index():
    return send_from_directory(ROOT_DIR, "index.html")


@app.route("/<path:filename>", methods=["GET"])
def serve_static_files(filename):
    return send_from_directory(ROOT_DIR, filename)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
