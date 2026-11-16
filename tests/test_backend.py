import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

from psycopg2.extras import RealDictCursor
from backend.app import app, get_db_connection


def run_tests():
    client = app.test_client()

    print("=== [1/5] Testing GET /api/health ===")
    res = client.get("/api/health")
    assert res.status_code == 200, f"Expected 200 on /api/health, got {res.status_code}"
    health = res.get_json()
    assert health.get("status") == "ok", f"Unexpected health status: {health}"
    assert health.get("database") == "cpa-ambima", f"Expected database 'cpa-ambima', got {health.get('database')}"
    counts = health.get("counts", {})
    assert counts.get("questions") == 148, f"Expected 148 questions, got {counts.get('questions')}"
    assert counts.get("official_questions") == 121, f"Expected 121 official_questions, got {counts.get('official_questions')}"
    assert counts.get("modules", 0) >= 3, f"Expected >= 3 modules, got {counts.get('modules')}"
    assert counts.get("topics", 0) > 0, f"Expected > 0 topics, got {counts.get('topics')}"
    assert counts.get("decision_maps", 0) > 0, f"Expected > 0 decision_maps, got {counts.get('decision_maps')}"
    assert counts.get("flashcards", 0) > 0, f"Expected > 0 flashcards, got {counts.get('flashcards')}"
    assert counts.get("sprint_blocks", 0) > 0, f"Expected > 0 sprint_blocks, got {counts.get('sprint_blocks')}"
    print(f"PASS: /api/health -> {counts}")

    print("=== [2/5] Testing GET /api/modules & GET /api/maps ===")
    res_mod = client.get("/api/modules")
    assert res_mod.status_code == 200, f"Expected 200 on /api/modules, got {res_mod.status_code}"
    modules = res_mod.get_json()
    assert isinstance(modules, list) and len(modules) == counts["modules"], "Modules count mismatch"

    total_q = 0
    official_q = 0
    total_topics = 0
    total_fc = 0
    first_topic_key = None
    first_question_id = None

    for mod in modules:
        assert "id" in mod and "titulo" in mod and "peso" in mod, f"Missing fields in module: {mod.keys()}"
        assert isinstance(mod.get("topicos"), list), "Module topicos must be a list"
        assert isinstance(mod.get("flashcards"), list), "Module flashcards must be a list"
        assert isinstance(mod.get("questoes"), list), "Module questoes must be a list"
        total_topics += len(mod["topicos"])
        total_fc += len(mod["flashcards"])
        total_q += len(mod["questoes"])
        for t in mod["topicos"]:
            if first_topic_key is None:
                first_topic_key = t["key"]
            assert "key" in t and "titulo" in t and "explicacao" in t
        for q in mod["questoes"]:
            if first_question_id is None:
                first_question_id = q["id"]
            if q.get("oficial"):
                official_q += 1
            assert "id" in q and "enunciado" in q and isinstance(q.get("alternativas"), list)

    assert total_q == 148, f"Expected 148 questions across modules, got {total_q}"
    assert official_q == 121, f"Expected 121 official questions across modules, got {official_q}"
    assert total_topics == counts["topics"], f"Expected {counts['topics']} topics, got {total_topics}"
    assert total_fc == counts["flashcards"], f"Expected {counts['flashcards']} flashcards, got {total_fc}"
    print(f"PASS: /api/modules -> {len(modules)} modules, {total_topics} topics, {total_fc} flashcards, {total_q} questions ({official_q} official)")

    res_maps = client.get("/api/maps")
    assert res_maps.status_code == 200, f"Expected 200 on /api/maps, got {res_maps.status_code}"
    maps = res_maps.get_json()
    assert isinstance(maps, list) and len(maps) == counts["decision_maps"], "Decision maps count mismatch"
    first_map_id = maps[0]["id"]
    for dm in maps:
        assert "id" in dm and "titulo" in dm and isinstance(dm.get("etapas"), (dict, list)) and len(dm.get("etapas")) > 0
        assert isinstance(dm.get("questoesObjetivas"), list) and len(dm.get("questoesObjetivas")) > 0
    print(f"PASS: /api/maps -> {len(maps)} decision maps verified")

    # Inspect initial state in PostgreSQL so we can restore it cleanly at the end
    conn = get_db_connection()
    created_sim_id = None
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT key, mastered FROM topics WHERE key = %s;", (first_topic_key,))
            orig_topic = cur.fetchone()

            cur.execute("SELECT id, favorita FROM questions WHERE id = %s;", (first_question_id,))
            orig_question = cur.fetchone()

            cur.execute("SELECT question_id, correta, chosen_text, answered_at FROM user_answers WHERE question_id = %s;", (first_question_id,))
            orig_answer = cur.fetchone()

            cur.execute("SELECT id, completed, best_score FROM decision_maps WHERE id = %s;", (first_map_id,))
            orig_map = cur.fetchone()

            cur.execute("SELECT id, concluido FROM sprint_blocks ORDER BY id ASC LIMIT 1;")
            orig_sprint = cur.fetchone()
            first_sprint_id = orig_sprint["id"]

        print("=== [3/5] Testing POST persistence endpoints ===")
        # 1. POST /api/topics/toggle
        res_toggle_topic = client.post("/api/topics/toggle", json={"key": first_topic_key, "mastered": True})
        assert res_toggle_topic.status_code == 200, f"/api/topics/toggle failed: {res_toggle_topic.get_data(as_text=True)}"
        topic_json = res_toggle_topic.get_json()
        assert topic_json.get("ok") is True and topic_json.get("mastered") is True, f"Unexpected response: {topic_json}"

        # 2. POST /api/questions/answer
        test_chosen_text = "Alternativa de teste QA automatizado"
        res_ans = client.post(
            "/api/questions/answer",
            json={"questionId": first_question_id, "correct": True, "chosenText": test_chosen_text},
        )
        assert res_ans.status_code == 200, f"/api/questions/answer failed: {res_ans.get_data(as_text=True)}"
        assert res_ans.get_json().get("ok") is True

        # 3. POST /api/questions/favorite
        res_fav = client.post(
            "/api/questions/favorite",
            json={"questionId": first_question_id, "favorita": True},
        )
        assert res_fav.status_code == 200, f"/api/questions/favorite failed: {res_fav.get_data(as_text=True)}"
        fav_json = res_fav.get_json()
        assert fav_json.get("ok") is True and fav_json.get("favorita") is True

        # 4. POST /api/maps/complete
        res_map_comp = client.post(
            "/api/maps/complete",
            json={"mapId": first_map_id, "score": 95},
        )
        assert res_map_comp.status_code == 200, f"/api/maps/complete failed: {res_map_comp.get_data(as_text=True)}"
        map_comp_json = res_map_comp.get_json()
        assert map_comp_json.get("ok") is True and map_comp_json.get("bestScore") >= 95

        # 5. POST /api/sprint/toggle
        res_sprint = client.post(
            "/api/sprint/toggle",
            json={"blockId": first_sprint_id, "concluido": True},
        )
        assert res_sprint.status_code == 200, f"/api/sprint/toggle failed: {res_sprint.get_data(as_text=True)}"
        sprint_json = res_sprint.get_json()
        assert sprint_json.get("ok") is True and sprint_json.get("concluido") is True

        # 6. POST /api/simulations
        res_sim = client.post(
            "/api/simulations",
            json={
                "mode": "QA_TEST_SIM",
                "totalQuestions": 50,
                "correctAnswers": 42,
                "scorePct": 84,
                "passed": True,
                "durationSeconds": 3600,
                "details": [{"questionId": first_question_id, "correct": True}],
            },
        )
        assert res_sim.status_code == 201, f"/api/simulations failed: {res_sim.get_data(as_text=True)}"
        sim_json = res_sim.get_json()
        assert sim_json.get("ok") is True and sim_json.get("id") is not None
        created_sim_id = sim_json["id"]
        print(f"PASS: All 6 POST endpoints succeeded (created simulation id={created_sim_id})")

        print("=== [4/5] Verifying persistence via GET /api/bootstrap ===")
        res_boot = client.get("/api/bootstrap")
        assert res_boot.status_code == 200, f"/api/bootstrap failed: {res_boot.status_code}"
        boot = res_boot.get_json()

        assert boot["masteredTopics"].get(first_topic_key) is True, "Topic mastery did not persist in /api/bootstrap"
        assert first_question_id in boot["answeredQuestions"], "Answered question did not persist in /api/bootstrap"
        assert boot["answeredQuestions"][first_question_id]["correct"] is True, "Answered question 'correct' mismatch"
        assert boot["answeredQuestions"][first_question_id]["chosenText"] == test_chosen_text, "Answered question 'chosenText' mismatch"
        assert boot["favoriteQuestions"].get(first_question_id) is True, "Favorite question did not persist in /api/bootstrap"
        assert first_map_id in boot["completedCases"], "Completed decision map did not persist in /api/bootstrap"
        assert boot["completedCases"][first_map_id]["completed"] is True
        assert boot["completedCases"][first_map_id]["bestScore"] >= 95
        assert boot["sprintDone"].get(first_sprint_id) is True, "Sprint block completion did not persist in /api/bootstrap"

        sim_ids = [s["id"] for s in boot.get("simulations", [])]
        assert created_sim_id in sim_ids, f"Created simulation {created_sim_id} not found in /api/bootstrap simulations"
        print("PASS: GET /api/bootstrap confirmed 100% persistence in PostgreSQL 'cpa-ambima'")

    finally:
        print("=== [5/5] Restoring test records to clean state in PostgreSQL ===")
        with conn.cursor() as cur:
            if orig_topic:
                cur.execute(
                    "UPDATE topics SET mastered = %s WHERE key = %s;",
                    (orig_topic["mastered"], first_topic_key),
                )
            if orig_question:
                cur.execute(
                    "UPDATE questions SET favorita = %s WHERE id = %s;",
                    (orig_question["favorita"], first_question_id),
                )
            if orig_answer is None:
                cur.execute("DELETE FROM user_answers WHERE question_id = %s;", (first_question_id,))
            else:
                cur.execute(
                    """
                    UPDATE user_answers
                    SET correta = %s, chosen_text = %s, answered_at = %s
                    WHERE question_id = %s;
                    """,
                    (
                        orig_answer["correta"],
                        orig_answer["chosen_text"],
                        orig_answer["answered_at"],
                        first_question_id,
                    ),
                )
            if orig_map:
                cur.execute(
                    "UPDATE decision_maps SET completed = %s, best_score = %s WHERE id = %s;",
                    (orig_map["completed"], orig_map["best_score"], first_map_id),
                )
            if orig_sprint:
                cur.execute(
                    "UPDATE sprint_blocks SET concluido = %s WHERE id = %s;",
                    (orig_sprint["concluido"], first_sprint_id),
                )
            if created_sim_id is not None:
                cur.execute("DELETE FROM exam_simulations WHERE id = %s;", (created_sim_id,))
            else:
                cur.execute("DELETE FROM exam_simulations WHERE mode = 'QA_TEST_SIM';")
        conn.commit()
        conn.close()
        print("PASS: Clean state restored in PostgreSQL 'cpa-ambima'")

    # Verify restoration via /api/bootstrap
    res_after = client.get("/api/bootstrap")
    assert res_after.status_code == 200
    boot_after = res_after.get_json()
    sim_ids_after = [s["id"] for s in boot_after.get("simulations", [])]
    assert created_sim_id not in sim_ids_after, "Test simulation was not cleaned up!"
    assert bool(boot_after["masteredTopics"].get(first_topic_key, False)) == bool(orig_topic["mastered"])
    assert bool(boot_after["favoriteQuestions"].get(first_question_id, False)) == bool(orig_question["favorita"])
    assert (first_question_id in boot_after["answeredQuestions"]) == (orig_answer is not None)
    assert (first_map_id in boot_after["completedCases"]) == bool(orig_map["completed"])
    assert bool(boot_after["sprintDone"].get(first_sprint_id, False)) == bool(orig_sprint["concluido"])
    print("=== ALL BACKEND QA TESTS PASSED 100% ===")


if __name__ == "__main__":
    run_tests()
