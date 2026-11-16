-- ============================================================================
-- CPA ANBIMA - PostgreSQL Database Schema (database: cpa-ambima)
-- ============================================================================

CREATE TABLE IF NOT EXISTS modules (
    id INT PRIMARY KEY,
    titulo TEXT NOT NULL,
    peso TEXT NOT NULL,
    questoes_prova INT NOT NULL,
    resumo_executivo TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS topics (
    key TEXT PRIMARY KEY,
    module_id INT REFERENCES modules(id) ON DELETE CASCADE,
    codigo TEXT NOT NULL,
    titulo TEXT NOT NULL,
    prioridade TEXT,
    explicacao TEXT NOT NULL,
    gatilhos_prova JSONB NOT NULL,
    pegadinhas JSONB NOT NULL,
    mastered BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    module_id INT REFERENCES modules(id) ON DELETE CASCADE,
    oficial BOOLEAN NOT NULL,
    codigo_item TEXT,
    codigo_pd TEXT,
    topico_pd TEXT,
    nivel_cognitivo TEXT,
    dificuldade TEXT,
    contexto TEXT NOT NULL,
    enunciado TEXT NOT NULL,
    alternativas JSONB NOT NULL,
    gabarito_comentado TEXT NOT NULL,
    favorita BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS user_answers (
    question_id TEXT PRIMARY KEY REFERENCES questions(id) ON DELETE CASCADE,
    correta BOOLEAN NOT NULL,
    chosen_text TEXT,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS decision_maps (
    id TEXT PRIMARY KEY,
    codigo_item TEXT,
    modulo TEXT,
    titulo TEXT,
    topico_pd TEXT,
    dificuldade TEXT,
    limite INT DEFAULT 5,
    etapas JSONB NOT NULL,
    questoes_objetivas JSONB NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    best_score INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS flashcards (
    id SERIAL PRIMARY KEY,
    module_id INT REFERENCES modules(id) ON DELETE CASCADE,
    ordem INT NOT NULL,
    frente TEXT NOT NULL,
    verso TEXT NOT NULL,
    mastered BOOLEAN DEFAULT FALSE,
    CONSTRAINT uq_flashcards_module_ordem UNIQUE (module_id, ordem)
);

CREATE TABLE IF NOT EXISTS sprint_blocks (
    id TEXT PRIMARY KEY,
    ordem INT NOT NULL,
    dia TEXT,
    horario TEXT,
    titulo TEXT,
    modulo_foco TEXT,
    peso_foco TEXT,
    tarefas JSONB NOT NULL,
    meta_questoes TEXT,
    concluido BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS cola_cards (
    id SERIAL PRIMARY KEY,
    ordem INT NOT NULL,
    titulo TEXT NOT NULL,
    modulo TEXT,
    conteudo TEXT NOT NULL,
    CONSTRAINT uq_cola_cards_ordem UNIQUE (ordem)
);

CREATE TABLE IF NOT EXISTS exam_simulations (
    id SERIAL PRIMARY KEY,
    mode TEXT NOT NULL,
    total_questions INT NOT NULL,
    correct_answers INT NOT NULL,
    score_pct INT NOT NULL,
    passed BOOLEAN NOT NULL,
    duration_seconds INT DEFAULT 0,
    details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_topics_module_id ON topics(module_id);
CREATE INDEX IF NOT EXISTS idx_questions_module_id ON questions(module_id);
CREATE INDEX IF NOT EXISTS idx_questions_oficial ON questions(oficial);
CREATE INDEX IF NOT EXISTS idx_flashcards_module_id ON flashcards(module_id);
CREATE INDEX IF NOT EXISTS idx_sprint_blocks_ordem ON sprint_blocks(ordem);
CREATE INDEX IF NOT EXISTS idx_cola_cards_ordem ON cola_cards(ordem);
