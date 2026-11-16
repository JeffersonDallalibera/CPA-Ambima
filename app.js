(function () {
  const STORAGE_KEY = "cpa_pro_mastery_2026_v2";
  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        parsed.simulations = parsed.simulations || [];
        return parsed;
      }
    } catch (e) {}
    return {
      theme: "dark",
      sprintDone: {},
      masteredTopics: {},
      answeredQuestions: {}, // id -> { correct: boolean, chosenIdx: number }
      favoriteQuestions: {}, // id -> boolean
      completedCases: {},
      simulations: []
    };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function getModules() {
    return [
      window.CPA_MODULO_1,
      window.CPA_MODULO_2,
      window.CPA_MODULO_3,
      window.CPA_MODULO_4
    ].filter(Boolean);
  }

  function shuffle(arr) {
    const copy = (arr || []).slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- TEMA CLARO / ESCURO ---
  if (state.theme === "light") document.body.classList.add("light-theme");
  document.getElementById("btn-theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    state.theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    saveState();
  });

  // --- TIMER POMODORO 50/10 ---
  let pomoSeconds = 50 * 60;
  let pomoRunning = false;
  let pomoInterval = null;

  function updatePomoUI() {
    const m = String(Math.floor(pomoSeconds / 60)).padStart(2, "0");
    const s = String(pomoSeconds % 60).padStart(2, "0");
    const el = document.getElementById("pomo-display");
    if (el) el.textContent = `${m}:${s}`;
  }

  document.getElementById("btn-pomo-toggle")?.addEventListener("click", (e) => {
    pomoRunning = !pomoRunning;
    e.currentTarget.textContent = pomoRunning ? "⏸" : "▶";
    if (pomoRunning) {
      pomoInterval = setInterval(() => {
        if (pomoSeconds > 0) {
          pomoSeconds--;
          updatePomoUI();
        } else {
          clearInterval(pomoInterval);
          pomoRunning = false;
          pomoSeconds = 10 * 60; // Descanso 10 min
          updatePomoUI();
        }
      }, 1000);
    } else if (pomoInterval) {
      clearInterval(pomoInterval);
    }
  });

  document.getElementById("btn-pomo-reset")?.addEventListener("click", () => {
    if (pomoInterval) clearInterval(pomoInterval);
    pomoRunning = false;
    pomoSeconds = 50 * 60;
    const btn = document.getElementById("btn-pomo-toggle");
    if (btn) btn.textContent = "▶";
    updatePomoUI();
  });

  // --- NAVEGAÇÃO DE ABAS ---
  function switchTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tabName);
    });
    document.querySelectorAll(".view-section").forEach((s) => {
      s.classList.toggle("active", s.id === "view-" + tabName);
    });
    renderGlobalKPIs();
    if (tabName === "dashboard") renderDashboard();
    if (tabName === "estudo") renderStudyView();
    if (tabName === "questoes") renderPracticeQuestion();
    if (tabName === "cases") renderCaseView();
    if (tabName === "flashcards") renderFlashcard();
    if (tabName === "simulado") renderSimuladoHistory();
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // --- GLOBAL KPI STRIP ---
  function renderGlobalKPIs() {
    const strip = document.getElementById("global-kpi-strip");
    if (!strip) return;

    const mods = getModules();
    let totalQ = 0;
    let answeredCount = 0;
    let hitCount = 0;
    let totalTopics = 0;
    let doneTopics = 0;

    mods.forEach((m) => {
      (m.topicos || []).forEach((t) => {
        totalTopics++;
        if (state.masteredTopics[m.id + "_" + t.codigo]) doneTopics++;
      });
      (m.questoes || []).forEach((q) => {
        totalQ++;
        if (state.answeredQuestions[q.id]) {
          answeredCount++;
          if (state.answeredQuestions[q.id].correct) hitCount++;
        }
      });
    });

    const accPct = answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0;
    const mapsTotal = (window.CPA_MAPAS_OFICIAIS || []).length;
    const mapsDone = Object.keys(state.completedCases || {}).length;

    strip.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-icon">🎯</div>
        <div>
          <div class="kpi-val" style="color:${accPct >= 70 ? "#10b981" : accPct > 0 ? "#fbbf24" : "var(--text)"};">
            ${accPct}% <span style="font-size:0.8rem; font-weight:600; color:var(--muted);">(Meta: 70%+)</span>
          </div>
          <div class="kpi-lbl">Taxa Geral de Acerto (${hitCount}/${answeredCount} resolvidas)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(59,130,246,0.15);">🏛️</div>
        <div>
          <div class="kpi-val">${answeredCount} / ${totalQ}</div>
          <div class="kpi-lbl">Questões Praticadas (121 Oficiais + 27 Inéditas)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(139,92,246,0.15);">📚</div>
        <div>
          <div class="kpi-val">${doneTopics} / ${totalTopics}</div>
          <div class="kpi-lbl">Tópicos do Edital Dominados</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(245,158,11,0.15);">💬</div>
        <div>
          <div class="kpi-val">${mapsDone} / ${mapsTotal}</div>
          <div class="kpi-lbl">Mapas de Decisão Concluídos</div>
        </div>
      </div>
    `;
  }

  // --- ABA 1: DASHBOARD & PLANO SPRINT ---
  document.getElementById("cola-search")?.addEventListener("input", renderDashboard);

  function renderDashboard() {
    renderGlobalKPIs();
    const mods = getModules();
    const statsEl = document.getElementById("dashboard-stats");
    if (statsEl) {
      statsEl.innerHTML = mods
        .slice()
        .sort((a, b) => parseInt(b.peso) - parseInt(a.peso))
        .map((m) => {
          const totalTopics = (m.topicos || []).length;
          const doneTopics = (m.topicos || []).filter((t) => state.masteredTopics[m.id + "_" + t.codigo]).length;
          const qs = m.questoes || [];
          const oficiaisCount = qs.filter((q) => q.oficial).length;
          const answered = qs.filter((q) => state.answeredQuestions[q.id]);
          const hits = answered.filter((q) => state.answeredQuestions[q.id].correct).length;
          const pctHit = answered.length ? Math.round((hits / answered.length) * 100) : 0;
          const pctTopic = totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0;
          const badgeClass = m.id === 2 || m.id === 3 ? "badge-green" : "badge-blue";

          return `
            <div class="card card-interactive">
              <div class="card-header">
                <span class="card-title">Módulo ${m.id}</span>
                <span class="badge ${badgeClass}">Peso ${m.peso} (~${m.questoesProva}Q na prova)</span>
              </div>
              <p style="font-size:0.84rem; color:var(--muted); min-height:40px; margin-bottom:8px;">${m.titulo}</p>
              <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                <span style="font-size:1.65rem; font-weight:800; color:${pctHit >= 70 ? "#10b981" : "var(--text)"};">${pctHit}%</span>
                <span style="font-size:0.78rem; color:var(--muted);">${hits}/${answered.length} acertos • ${qs.length}Q (${oficiaisCount} oficiais)</span>
              </div>
              <div style="font-size:0.78rem; color:var(--muted);">Tópicos dominados: ${doneTopics}/${totalTopics} (${pctTopic}%)</div>
              <div class="progress-bar"><div class="progress-fill" style="width:${pctTopic}%"></div></div>
              <div style="display:flex; gap:8px; margin-top:14px;">
                <button class="btn btn-secondary btn-sm" style="flex:1;" data-goto-study="${m.id}">📖 Apostila</button>
                <button class="btn btn-sm" style="flex:1;" data-goto-q="${m.id}">🎯 Treinar (${qs.length}Q)</button>
              </div>
            </div>
          `;
        })
        .join("");

      statsEl.querySelectorAll("[data-goto-study]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const sel = document.getElementById("study-mod-select");
          if (sel) sel.value = btn.dataset.gotoStudy;
          switchTab("estudo");
        });
      });

      statsEl.querySelectorAll("[data-goto-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const sel = document.getElementById("q-mod-filter");
          if (sel) sel.value = btn.dataset.gotoQ;
          buildQuestionPool();
          switchTab("questoes");
        });
      });
    }

    // Cronograma Sprint
    const sprintData = window.CPA_SPRINT || { blocosEstudo: [], colaDeProva: [] };
    const blocos = sprintData.blocosEstudo || [];
    const doneBlocks = blocos.filter((b) => state.sprintDone[b.id]).length;
    const pctSprint = blocos.length ? Math.round((doneBlocks / blocos.length) * 100) : 0;
    const badgeEl = document.getElementById("sprint-progress-badge");
    if (badgeEl) badgeEl.textContent = `${pctSprint}% concluído (${doneBlocks}/${blocos.length})`;

    const scheduleEl = document.getElementById("sprint-schedule-list");
    if (scheduleEl) {
      scheduleEl.innerHTML = blocos
        .map((b) => {
          const checked = state.sprintDone[b.id] ? "checked" : "";
          const doneClass = state.sprintDone[b.id] ? "done" : "";
          return `
            <div class="sprint-item ${doneClass}">
              <input type="checkbox" class="sprint-check" data-sprint-id="${b.id}" ${checked}>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <strong>${b.dia || ""} • ${b.horario || ""} — ${b.titulo || ""}</strong>
                  <span class="badge badge-purple">${b.moduloFoco || ""} (${b.pesoFoco || ""})</span>
                </div>
                <ul style="padding-left:18px; margin-top:6px; font-size:0.85rem; color:var(--text-secondary);">
                  ${(b.tarefas || []).map((t) => `<li>${t}</li>`).join("")}
                </ul>
                ${b.metaQuestoes ? `<div style="margin-top:5px; font-size:0.8rem; color:#10b981; font-weight:700;">🎯 Meta: ${b.metaQuestoes}</div>` : ""}
              </div>
            </div>
          `;
        })
        .join("");

      scheduleEl.querySelectorAll(".sprint-check").forEach((chk) => {
        chk.addEventListener("change", () => {
          const blockId = chk.dataset.sprintId;
          const concluido = chk.checked;
          state.sprintDone[blockId] = concluido;
          saveState();
          renderDashboard();
          fetch("/api/sprint/toggle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blockId: blockId, concluido: concluido })
          }).catch(() => {});
        });
      });
    }

    // Cola de Prova com filtro
    const colaQuery = (document.getElementById("cola-search")?.value || "").trim().toLowerCase();
    const colaEl = document.getElementById("cola-prova-list");
    if (colaEl) {
      const filteredCola = (sprintData.colaDeProva || []).filter((c) => {
        if (!colaQuery) return true;
        const txt = `${c.titulo || ""} ${c.tema || ""} ${c.modulo || ""} ${c.conteudo || ""} ${c.resumo || ""}`.toLowerCase();
        return txt.includes(colaQuery);
      });

      colaEl.innerHTML = filteredCola
        .map(
          (c) => `
          <div style="padding:14px; border-bottom:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <strong style="color:#10b981; font-size:0.95rem;">${c.titulo || c.tema || ""}</strong>
              ${c.modulo ? `<span class="badge badge-blue">${c.modulo}</span>` : ""}
            </div>
            <div style="font-size:0.88rem; color:var(--text-secondary);">${c.conteudo || c.resumo || c.regra || ""}</div>
          </div>
        `
        )
        .join("");
    }
  }

  // --- ABA 2: ESTUDO GUIADO POR MÓDULO ---
  const studyModSelect = document.getElementById("study-mod-select");
  const studySearch = document.getElementById("study-search");
  studyModSelect?.addEventListener("change", renderStudyView);
  studySearch?.addEventListener("input", renderStudyView);

  function renderStudyView() {
    const modId = parseInt(studyModSelect ? studyModSelect.value : "2", 10);
    const query = (studySearch ? studySearch.value : "").trim().toLowerCase();
    const mod = getModules().find((m) => m.id === modId);
    if (!mod) return;

    const headerEl = document.getElementById("study-module-header");
    const containerEl = document.getElementById("study-topics-container");
    const countEl = document.getElementById("study-mastered-count");

    const allTopics = mod.topicos || [];
    const doneCount = allTopics.filter((t) => state.masteredTopics[mod.id + "_" + t.codigo]).length;
    if (countEl) countEl.textContent = `${doneCount}/${allTopics.length} tópicos dominados`;

    if (headerEl) {
      headerEl.innerHTML = `
        <div class="card-header">
          <h2 class="card-title">Módulo ${mod.id}: ${mod.titulo}</h2>
          <span class="badge badge-green">Peso na Prova: ${mod.peso} (~${mod.questoesProva} questões)</span>
        </div>
        <p style="font-size:0.93rem; color:var(--text-secondary);">${mod.resumoExecutivo || ""}</p>
      `;
    }

    const filtered = allTopics.filter((t) => {
      if (!query) return true;
      const hay = `${t.codigo} ${t.titulo} ${t.explicacao} ${(t.gatilhosProva || []).join(" ")} ${(t.pegadinhas || []).join(" ")}`.toLowerCase();
      return hay.includes(query);
    });

    if (containerEl) {
      containerEl.innerHTML = filtered
        .map((t) => {
          const key = mod.id + "_" + t.codigo;
          const isMastered = !!state.masteredTopics[key];
          return `
            <div class="card topic-card ${isMastered ? "mastered" : ""}">
              <div class="card-header" style="flex-wrap:wrap;">
                <div>
                  <span class="badge badge-blue">${t.codigo}</span>
                  <strong style="font-size:1.05rem; margin-left:8px;">${t.titulo}</strong>
                  ${t.prioridade ? `<span class="badge ${t.prioridade === "Alta" ? "badge-amber" : "badge-purple"}" style="margin-left:6px;">Prioridade ${t.prioridade}</span>` : ""}
                </div>
                <button class="btn ${isMastered ? "btn-secondary" : ""} btn-sm" data-master-key="${key}">
                  ${isMastered ? "✅ Tópico Dominado" : "Marcar como Dominado"}
                </button>
              </div>
              <div class="topic-body">${t.explicacao || ""}</div>
              ${
                (t.gatilhosProva || []).length
                  ? `<div class="trigger-box"><strong>🎯 Gatilhos de Prova (Como a Cesgranrio/ANBIMA cobra):</strong><ul style="padding-left:18px; margin-top:4px;">${t.gatilhosProva.map((g) => `<li>${g}</li>`).join("")}</ul></div>`
                  : ""
              }
              ${
                (t.pegadinhas || []).length
                  ? `<div class="trap-box"><strong>⚠️ Pegadinhas Clássicas da Banca:</strong><ul style="padding-left:18px; margin-top:4px;">${t.pegadinhas.map((p) => `<li>${p}</li>`).join("")}</ul></div>`
                  : ""
              }
            </div>
          `;
        })
        .join("");

      containerEl.querySelectorAll("[data-master-key]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const k = btn.dataset.masterKey;
          const mastered = !state.masteredTopics[k];
          state.masteredTopics[k] = mastered;
          saveState();
          renderStudyView();
          renderGlobalKPIs();
          fetch("/api/topics/toggle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: k, mastered: mastered })
          }).catch(() => {});
        });
      });
    }
  }

  // --- ABA 3: BANCO DE QUESTÕES (148 QUESTÕES + MAPA NAVEGADOR + JUSTIFICATIVAS POR ALTERNATIVA) ---
  let currentQuestionList = [];
  let currentQuestionIndex = 0;

  function buildQuestionPool() {
    const modFilter = document.getElementById("q-mod-filter")?.value || "all";
    const originFilter = document.getElementById("q-origin-filter")?.value || "all";
    const diffFilter = document.getElementById("q-diff-filter")?.value || "all";
    const searchQ = (document.getElementById("q-search-input")?.value || "").trim().toLowerCase();

    let pool = [];
    getModules().forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== modFilter) return;
      (m.questoes || []).forEach((q) => {
        pool.push({ ...q, moduloId: m.id, moduloTitulo: m.titulo });
      });
    });

    if (originFilter === "oficial") pool = pool.filter((q) => q.oficial);
    if (originFilter === "inedita") pool = pool.filter((q) => !q.oficial);
    if (originFilter === "wrong") {
      pool = pool.filter((q) => state.answeredQuestions[q.id] && !state.answeredQuestions[q.id].correct);
    }
    if (originFilter === "fav") {
      pool = pool.filter((q) => state.favoriteQuestions && state.favoriteQuestions[q.id]);
    }
    if (diffFilter !== "all") {
      pool = pool.filter((q) => (q.dificuldade || "").toLowerCase().startsWith(diffFilter.slice(0, 3).toLowerCase()));
    }
    if (searchQ) {
      pool = pool.filter((q) => {
        const hay = `${q.id} ${q.codigoItem || ""} ${q.codigoPD || ""} ${q.topicoPD || ""} ${q.contexto || ""} ${q.enunciado || ""}`.toLowerCase();
        return hay.includes(searchQ);
      });
    }

    currentQuestionList = pool;
    currentQuestionIndex = 0;
  }

  ["q-mod-filter", "q-origin-filter", "q-diff-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", () => {
      buildQuestionPool();
      renderPracticeQuestion();
    });
  });
  document.getElementById("q-search-input")?.addEventListener("input", () => {
    buildQuestionPool();
    renderPracticeQuestion();
  });

  document.getElementById("btn-prev-q")?.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderPracticeQuestion();
    }
  });
  document.getElementById("btn-next-q")?.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestionList.length - 1) {
      currentQuestionIndex++;
      renderPracticeQuestion();
    }
  });

  function renderQuestionNavGrid() {
    const grid = document.getElementById("q-nav-grid");
    if (!grid) return;
    grid.innerHTML = currentQuestionList
      .map((q, idx) => {
        const ans = state.answeredQuestions[q.id];
        const statusCls = ans ? (ans.correct ? "hit" : "miss") : "";
        const currCls = idx === currentQuestionIndex ? "current" : "";
        return `<button class="q-nav-dot ${statusCls} ${currCls}" data-qjump="${idx}" title="${q.codigoItem ? "Item " + q.codigoItem : q.id}">${idx + 1}</button>`;
      })
      .join("");

    grid.querySelectorAll("[data-qjump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentQuestionIndex = parseInt(btn.dataset.qjump, 10);
        renderPracticeQuestion();
      });
    });
  }

  function renderPracticeQuestion() {
    if (!currentQuestionList.length) buildQuestionPool();
    const container = document.getElementById("practice-question-container");
    const badge = document.getElementById("q-counter-badge");
    if (!container) return;

    renderQuestionNavGrid();

    if (!currentQuestionList.length) {
      if (badge) badge.textContent = "0 questões";
      container.innerHTML = `<div class="card">Nenhuma questão encontrada para este filtro. Tente limpar a busca ou trocar o filtro acima.</div>`;
      return;
    }

    const q = currentQuestionList[currentQuestionIndex];
    if (badge) badge.textContent = `${currentQuestionIndex + 1} / ${currentQuestionList.length}`;

    if (!q._shuffledOptions) {
      q._shuffledOptions = shuffle(q.alternativas || []);
    }
    const letters = ["A", "B", "C", "D"];
    const isFav = !!(state.favoriteQuestions && state.favoriteQuestions[q.id]);

    container.innerHTML = `
      <div class="card">
        <div class="card-header" style="flex-wrap:wrap;">
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <span class="badge badge-blue">Módulo ${q.moduloId}</span>
            <span class="badge ${q.oficial ? "badge-green" : "badge-purple"}">
              ${q.oficial ? `🏛️ Oficial Cesgranrio ${q.codigoItem ? "• Item " + q.codigoItem : q.numeroOficial ? "#" + q.numeroOficial : ""}` : "✨ Inédita Padrão CPA"}
            </span>
            <span class="badge badge-amber">PD ${q.codigoPD || ""}</span>
            <span class="badge badge-blue">${q.dificuldade || "Médio"}</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-secondary btn-sm" id="btn-fav-q" title="Favoritar para revisão">${isFav ? "⭐ Favorita" : "☆ Favoritar"}</button>
            <button class="btn btn-secondary btn-sm" id="btn-reshuffle-q" title="Reembaralhar alternativas">🔀</button>
          </div>
        </div>

        ${q.topicoPD ? `<div style="font-size:0.8rem; color:var(--muted); margin-bottom:10px;">📌 <b>Tópico do Programa Detalhado:</b> ${q.topicoPD}</div>` : ""}

        <div class="context-block">${(q.contexto || "").replace(/\n/g, "<br>")}</div>
        <div class="enunciado-block">${q.enunciado || ""}</div>

        <div class="options-list" id="q-options-list">
          ${q._shuffledOptions
            .map(
              (opt, idx) => `
              <div class="option-row">
                <button class="option-btn" data-opt-idx="${idx}">
                  <div class="option-main">
                    <span class="opt-letter">${letters[idx]}</span>
                    <span style="flex:1;">${opt.texto}</span>
                  </div>
                  ${
                    opt.justificativa
                      ? `<div class="opt-justificativa">
                           <strong style="color:${opt.correta ? "#10b981" : "#f87171"};">
                             ${opt.correta ? "✅ Gabarito Oficial:" : "❌ Por que está incorreta:"}
                           </strong>
                           ${opt.justificativa}
                         </div>`
                      : ""
                  }
                </button>
                <button class="elim-btn" data-elim-idx="${idx}" title="Riscar / Eliminar alternativa">✂️</button>
              </div>
            `
            )
            .join("")}
        </div>

        <div id="q-feedback-area"></div>
      </div>
    `;

    document.getElementById("btn-fav-q")?.addEventListener("click", () => {
      state.favoriteQuestions = state.favoriteQuestions || {};
      const favorita = !state.favoriteQuestions[q.id];
      state.favoriteQuestions[q.id] = favorita;
      saveState();
      renderPracticeQuestion();
      fetch("/api/questions/favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: q.id, favorita: favorita })
      }).catch(() => {});
    });

    document.getElementById("btn-reshuffle-q")?.addEventListener("click", () => {
      q._shuffledOptions = shuffle(q.alternativas || []);
      renderPracticeQuestion();
    });

    container.querySelectorAll("[data-elim-idx]").forEach((ebtn) => {
      ebtn.addEventListener("click", () => {
        const idx = ebtn.dataset.elimIdx;
        const optBtn = container.querySelector(`.option-btn[data-opt-idx="${idx}"]`);
        optBtn?.classList.toggle("eliminated");
      });
    });

    const optBtns = container.querySelectorAll(".option-btn");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.optIdx, 10);
        const chosen = q._shuffledOptions[idx];
        const isCorrect = !!chosen.correta;

        state.answeredQuestions[q.id] = { correct: isCorrect, chosenText: chosen.texto || "" };
        saveState();
        renderGlobalKPIs();
        renderQuestionNavGrid();

        fetch("/api/questions/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            questionId: q.id,
            correct: isCorrect,
            chosenText: chosen.texto || ""
          })
        }).catch(() => {});

        optBtns.forEach((b, i) => {
          b.disabled = true;
          b.classList.add("show-just");
          if (q._shuffledOptions[i].correta) b.classList.add("correct");
          else if (i === idx) b.classList.add("wrong");
        });

        const fb = document.getElementById("q-feedback-area");
        if (fb) {
          fb.innerHTML = `
            <div class="feedback-panel ${isCorrect ? "ok" : "err"}">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <strong style="font-size:1rem;">${isCorrect ? "✅ Excelente! Resposta Correta!" : "❌ Resposta Incorreta — Analise as justificativas oficiais acima!"}</strong>
                ${
                  currentQuestionIndex < currentQuestionList.length - 1
                    ? `<button class="btn btn-sm" id="btn-inline-next-q">Ir para Próxima Questão ▶</button>`
                    : ""
                }
              </div>
              <p style="margin-top:8px;"><b>Síntese do Conceito Avaliado:</b> ${q.gabaritoComentado || ""}</p>
            </div>
          `;
          document.getElementById("btn-inline-next-q")?.addEventListener("click", () => {
            currentQuestionIndex++;
            renderPracticeQuestion();
          });
        }
      });
    });
  }

  // --- ABA 4: MAPAS DE DECISÃO OFICIAIS (CESGRANRIO / ANBIMA EDU) ---
  let currentCaseIdx = 0;
  let currentNodeKey = "1";
  let currentMapScore = 0;
  let currentMapHistory = [];

  function getMapasPool() {
    if (window.CPA_MAPAS_OFICIAIS && window.CPA_MAPAS_OFICIAIS.length) {
      return window.CPA_MAPAS_OFICIAIS;
    }
    return window.CPA_CASES || [];
  }

  function resetCurrentMap() {
    currentNodeKey = "1";
    currentMapScore = 0;
    currentMapHistory = [];
  }

  function initCasesDropdown() {
    const sel = document.getElementById("case-select");
    const cases = getMapasPool();
    if (!sel || !cases.length) return;
    sel.innerHTML = cases
      .map((c, idx) => {
        const isOficial = ["000140", "000158", "000314", "000344", "000147"].includes(c.codigoItem);
        const tag = isOficial ? `🏛️ [Oficial Cesgranrio ${c.codigoItem}]` : `✨ [Mapa CPA #${idx + 1}]`;
        return `<option value="${idx}">${idx + 1}. ${tag} ${c.titulo || c.topicoPD || ""} (${c.modulo || ""})</option>`;
      })
      .join("");
    sel.addEventListener("change", () => {
      currentCaseIdx = parseInt(sel.value, 10);
      resetCurrentMap();
      renderCaseView();
    });
  }

  document.getElementById("btn-reset-case")?.addEventListener("click", () => {
    resetCurrentMap();
    renderCaseView();
  });

  function renderCaseView() {
    const cases = getMapasPool();
    const sel = document.getElementById("case-select");
    if (sel && !sel.options.length) initCasesDropdown();
    const container = document.getElementById("case-stage-container");
    const scoreBadge = document.getElementById("case-score-badge");
    if (!container || !cases.length) return;

    const c = cases[currentCaseIdx] || cases[0];
    const limite = c.limite || 5;
    if (scoreBadge) scoreBadge.textContent = `Pontuação no Diálogo: ${currentMapScore} / ${limite}`;

    if (c.etapas && !Array.isArray(c.etapas)) {
      const node = c.etapas[currentNodeKey];
      const isEnd = !node || currentNodeKey === "END" || !node.opcoes || !node.opcoes.length;

      // Stepper visual do caminho percorrido
      const visitedSteps = currentMapHistory.map(
        (h) => `<span class="step-node ${h.peso > 0 ? "done-a" : "done-b"}">Etapa ${h.etapa} (${h.peso > 0 ? "+1" : "0"})</span><span>→</span>`
      );
      visitedSteps.push(`<span class="step-node active">${isEnd ? "🏁 FIM" : "Etapa " + currentNodeKey}</span>`);

      const chatHtml = currentMapHistory.length
        ? `<div class="chat-stream" id="map-chat-stream">
             ${currentMapHistory
               .map(
                 (h) => `
                 <div class="chat-bubble chat-client">
                   <div style="font-size:0.74rem; color:var(--muted); font-weight:700; margin-bottom:2px;">👤 Cliente (Etapa ${h.etapa})</div>
                   "${h.falaCliente}"
                 </div>
                 <div class="chat-bubble ${h.peso > 0 ? "chat-advisor-good" : "chat-advisor-bad"}">
                   <div style="font-size:0.74rem; font-weight:700; margin-bottom:2px;">
                     🧑‍💼 Você (${h.peso > 0 ? "✅ +1 pt • Trilha A" : "⚠️ 0 pt • Trilha B"} → Etapa ${h.proximo})
                   </div>
                   "${h.resposta}"
                 </div>
               `
               )
               .join("")}
           </div>`
        : "";

      if (!isEnd) {
        if (!node._shuffled) node._shuffled = shuffle(node.opcoes || []);
        const letters = ["A", "B", "C", "D"];

        container.innerHTML = `
          <div class="card">
            <div class="card-header" style="flex-wrap:wrap;">
              <div>
                <span class="badge badge-green">Item ${c.codigoItem || c.id}</span>
                <span class="badge badge-blue" style="margin-left:6px;">${c.modulo || ""}</span>
                <strong style="font-size:1.05rem; margin-left:8px;">${c.titulo || c.topicoPD || ""}</strong>
              </div>
              <span class="badge badge-amber">Etapa Atual: ${currentNodeKey}</span>
            </div>

            <div class="node-stepper">${visitedSteps.join("")}</div>

            ${chatHtml}

            <div class="context-block" style="border-left-color:var(--primary);">
              <div style="font-size:0.78rem; text-transform:uppercase; color:var(--primary); font-weight:800; margin-bottom:4px;">
                💬 Fala Atual do Cliente (Etapa ${currentNodeKey}):
              </div>
              "${node.falaCliente || ""}"
            </div>

            <div class="enunciado-block">Selecione a resposta que melhor concilia precisão técnica e atendimento adequado:</div>

            <div class="options-list">
              ${node._shuffled
                .map(
                  (op, i) => `
                  <button class="option-btn" data-map-opt="${i}">
                    <div class="option-main">
                      <span class="opt-letter">${letters[i]}</span>
                      <span style="flex:1;">${op.texto}</span>
                    </div>
                  </button>
                `
                )
                .join("")}
            </div>
            <div id="map-step-feedback"></div>
          </div>
        `;

        const streamEl = document.getElementById("map-chat-stream");
        if (streamEl) streamEl.scrollTop = streamEl.scrollHeight;

        const btns = container.querySelectorAll("[data-map-opt]");
        btns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.mapOpt, 10);
            const chosen = node._shuffled[idx];
            const peso = Number(chosen.peso || 0);
            currentMapScore += peso;
            if (scoreBadge) scoreBadge.textContent = `Pontuação no Diálogo: ${currentMapScore} / ${limite}`;

            btns.forEach((b, i) => {
              b.disabled = true;
              if (Number(node._shuffled[i].peso) > 0) b.classList.add("correct");
              else if (i === idx) b.classList.add("wrong");
            });

            const fb = document.getElementById("map-step-feedback");
            if (fb) {
              fb.innerHTML = `
                <div class="feedback-panel ${peso > 0 ? "ok" : "err"}">
                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <strong>${
                      peso > 0
                        ? `✅ Decisão de Peso 1 (+1 ponto)! O cliente avança pela Trilha ${chosen.proximo}.`
                        : `⚠️ Decisão de Peso 0 (0 ponto). O cliente segue pela Trilha ${chosen.proximo}.`
                    }</strong>
                    <button class="btn btn-sm" id="btn-advance-map">Avançar para Etapa ${chosen.proximo} ▶</button>
                  </div>
                </div>
              `;
              document.getElementById("btn-advance-map")?.addEventListener("click", () => {
                currentMapHistory.push({
                  etapa: currentNodeKey,
                  falaCliente: node.falaCliente,
                  resposta: chosen.texto,
                  peso: peso,
                  proximo: chosen.proximo
                });
                currentNodeKey = chosen.proximo || "END";
                renderCaseView();
              });
            }
          });
        });
        return;
      }

      // Desfecho do Mapa + 2 Questões Objetivas Acopladas
      const endMsg = (c.etapas["END"] && c.etapas["END"].falaCliente) || (node && node.falaCliente) || "[Fim do diálogo]";
      const qObjs = c.questoesObjetivas || [];

      const mapKey = c.id || c.codigoItem;
      if (mapKey) {
        const prevBest =
          state.completedCases[mapKey] && typeof state.completedCases[mapKey] === "object"
            ? state.completedCases[mapKey].bestScore || 0
            : 0;
        state.completedCases[mapKey] = {
          completed: true,
          bestScore: Math.max(prevBest, currentMapScore)
        };
        saveState();
        renderGlobalKPIs();
        fetch("/api/maps/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mapId: mapKey, score: currentMapScore })
        })
          .then((r) => (r.ok ? r.json() : null))
          .then((res) => {
            if (res && res.mapId) {
              if (res.mapId !== mapKey) delete state.completedCases[mapKey];
              state.completedCases[res.mapId] = {
                completed: true,
                bestScore: res.bestScore ?? currentMapScore
              };
              saveState();
              renderGlobalKPIs();
            }
          })
          .catch(() => {});
      }

      container.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">🏁 Diálogo Finalizado — Pontuação: ${currentMapScore} / ${limite}</h3>
            <span class="badge ${currentMapScore >= 4 ? "badge-green" : "badge-amber"}">
              ${currentMapScore >= 4 ? "Atendimento de Excelência" : "Reveja as escolhas de Peso 0"}
            </span>
          </div>
          <div class="node-stepper">${visitedSteps.join("")}</div>
          ${chatHtml}
          <div class="context-block"><b>Desfecho do Atendimento:</b> ${endMsg}</div>

          ${
            qObjs.length
              ? `<h3 style="margin:20px 0 12px; color:#10b981;">📝 Questões Objetivas Acopladas a este Mapa de Decisão:</h3>
                 ${qObjs
                   .map((qo, qIdx) => {
                     if (!qo._shuffled) qo._shuffled = shuffle(qo.alternativas || []);
                     const letters = ["A", "B", "C", "D"];
                     return `
                       <div class="card" style="margin-bottom:14px; background:var(--bg);">
                         <div class="enunciado-block">${qIdx + 1}. ${qo.enunciado}</div>
                         <div class="options-list">
                           ${qo._shuffled
                             .map(
                               (alt, aIdx) => `
                               <button class="option-btn" data-qobj="${qIdx}" data-aidx="${aIdx}">
                                 <div class="option-main">
                                   <span class="opt-letter">${letters[aIdx]}</span>
                                   <span style="flex:1;">${alt.texto}</span>
                                 </div>
                                 ${
                                   alt.justificativa
                                     ? `<div class="opt-justificativa">
                                          <strong style="color:${alt.correta ? "#10b981" : "#f87171"};">
                                            ${alt.correta ? "✅ Gabarito:" : "❌ Justificativa:"}
                                          </strong> ${alt.justificativa}
                                        </div>`
                                     : ""
                                 }
                               </button>
                             `
                             )
                             .join("")}
                         </div>
                         <div id="qobj-fb-${qIdx}"></div>
                       </div>
                     `;
                   })
                   .join("")}`
              : ""
          }

          <div style="display:flex; gap:10px; margin-top:16px;">
            <button class="btn btn-secondary" id="btn-replay-map">🔄 Refazer este Mapa</button>
            <button class="btn" id="btn-next-map">Próximo Mapa de Decisão ▶</button>
          </div>
        </div>
      `;

      container.querySelectorAll("[data-qobj]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = parseInt(btn.dataset.qobj, 10);
          const aIdx = parseInt(btn.dataset.aidx, 10);
          const qo = qObjs[qIdx];
          const chosen = qo._shuffled[aIdx];
          const groupBtns = container.querySelectorAll(`[data-qobj="${qIdx}"]`);
          groupBtns.forEach((b, i) => {
            b.disabled = true;
            b.classList.add("show-just");
            if (qo._shuffled[i].correta) b.classList.add("correct");
            else if (i === aIdx) b.classList.add("wrong");
          });
          const fb = document.getElementById(`qobj-fb-${qIdx}`);
          if (fb) {
            fb.innerHTML = `
              <div class="feedback-panel ${chosen.correta ? "ok" : "err"}">
                <strong>${chosen.correta ? "✅ Resposta Correta!" : "❌ Resposta Incorreta."}</strong>
                <p style="margin-top:4px;">${qo.gabaritoComentado || ""}</p>
              </div>
            `;
          }
        });
      });

      document.getElementById("btn-replay-map")?.addEventListener("click", () => {
        resetCurrentMap();
        renderCaseView();
      });
      document.getElementById("btn-next-map")?.addEventListener("click", () => {
        const mId = c.id || c.codigoItem;
        if (mId) {
          state.completedCases[mId] = { completed: true, bestScore: currentMapScore };
          saveState();
          renderGlobalKPIs();
          fetch("/api/maps/complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mapId: mId, score: currentMapScore })
          }).catch(() => {});
        }
        currentCaseIdx = (currentCaseIdx + 1) % cases.length;
        resetCurrentMap();
        if (sel) sel.value = String(currentCaseIdx);
        renderCaseView();
      });
    }
  }

  // --- ABA 5: FLASHCARDS 3D ---
  let fcPool = [];
  let fcIndex = 0;
  let fcFlipped = false;

  function buildFlashcardPool() {
    const modFilter = document.getElementById("fc-mod-filter")?.value || "all";
    let list = [];
    getModules().forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== modFilter) return;
      (m.flashcards || []).forEach((f) => {
        list.push({ ...f, moduloId: m.id });
      });
    });
    fcPool = list;
    fcIndex = 0;
    fcFlipped = false;
  }

  document.getElementById("fc-mod-filter")?.addEventListener("change", () => {
    buildFlashcardPool();
    renderFlashcard();
  });
  document.getElementById("btn-shuffle-fc")?.addEventListener("click", () => {
    fcPool = shuffle(fcPool);
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  });
  document.getElementById("btn-fc-flip")?.addEventListener("click", () => {
    fcFlipped = !fcFlipped;
    renderFlashcard();
  });
  document.getElementById("flashcard-card")?.addEventListener("click", () => {
    fcFlipped = !fcFlipped;
    renderFlashcard();
  });
  document.getElementById("btn-fc-prev")?.addEventListener("click", () => {
    if (fcIndex > 0) {
      fcIndex--;
      fcFlipped = false;
      renderFlashcard();
    }
  });
  document.getElementById("btn-fc-next")?.addEventListener("click", () => {
    if (fcIndex < fcPool.length - 1) {
      fcIndex++;
      fcFlipped = false;
      renderFlashcard();
    }
  });

  // Atalhos de teclado na aba Flashcards
  window.addEventListener("keydown", (e) => {
    const fcView = document.getElementById("view-flashcards");
    if (!fcView || !fcView.classList.contains("active")) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") {
      e.preventDefault();
      fcFlipped = !fcFlipped;
      renderFlashcard();
    } else if (e.code === "ArrowRight" && fcIndex < fcPool.length - 1) {
      fcIndex++;
      fcFlipped = false;
      renderFlashcard();
    } else if (e.code === "ArrowLeft" && fcIndex > 0) {
      fcIndex--;
      fcFlipped = false;
      renderFlashcard();
    }
  });

  function renderFlashcard() {
    if (!fcPool.length) buildFlashcardPool();
    const card3d = document.getElementById("flashcard-card");
    const frontLbl = document.getElementById("fc-front-label");
    const frontTxt = document.getElementById("fc-front-text");
    const backLbl = document.getElementById("fc-back-label");
    const backTxt = document.getElementById("fc-back-text");
    const counter = document.getElementById("fc-counter");
    if (!fcPool.length || !card3d) return;

    const item = fcPool[fcIndex];
    card3d.classList.toggle("is-flipped", fcFlipped);
    if (counter) counter.textContent = `Cartão ${fcIndex + 1} de ${fcPool.length} • Módulo ${item.moduloId}`;
    if (frontLbl) frontLbl.textContent = `PERGUNTA • MÓDULO ${item.moduloId} (Clique ou Espaço para virar)`;
    if (frontTxt) frontTxt.innerHTML = item.frente;
    if (backLbl) backLbl.textContent = `RESPOSTA OFICIAL • MÓDULO ${item.moduloId}`;
    if (backTxt) backTxt.innerHTML = item.verso;
  }

  // --- ABA 6: SIMULADO REAL (50Q ou 20Q + BLOQUEIO DE NAVEGAÇÃO) ---
  let simQuestions = [];
  let simIdx = 0;
  let simAnswers = [];
  let simTimerId = null;
  let simSecondsLeft = 150 * 60;
  let simInitialSeconds = 150 * 60;

  function renderSimuladoHistory() {
    const historyEl = document.getElementById("simulado-history-card");
    if (!historyEl) return;
    const sims = state.simulations || [];
    const activeEl = document.getElementById("simulado-active");
    const isSimRunning = activeEl && activeEl.style.display === "block";

    if (isSimRunning || !sims.length) {
      historyEl.style.display = "none";
      return;
    }

    historyEl.style.display = "block";
    historyEl.innerHTML = `
      <div class="card-header">
        <h3 class="card-title" style="font-size:1.05rem;">🗄️ Histórico de Simulados Salvos (PostgreSQL: cpa-ambima)</h3>
        <span class="badge badge-blue">${sims.length} ${sims.length === 1 ? "simulado registrado" : "simulados registrados"}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${sims
          .slice(0, 10)
          .map((s, idx) => {
            const totalQ = s.totalQuestions ?? s.total_questions ?? 50;
            const rightQ = s.correctAnswers ?? s.correct_answers ?? 0;
            const pct = s.scorePct ?? s.score_pct ?? 0;
            const passed = s.passed ?? pct >= 70;
            const durSec = s.durationSeconds ?? s.duration_seconds ?? 0;
            const durMin = Math.max(1, Math.round(durSec / 60));
            const dateStr =
              s.createdAt || s.created_at
                ? new Date(s.createdAt || s.created_at).toLocaleString("pt-BR")
                : `Tentativa #${sims.length - idx}`;
            return `
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; padding:10px 14px; background:var(--bg); border:1px solid var(--border); border-radius:10px;">
                <div>
                  <strong>Modo ${s.mode || totalQ + "Q"}</strong>
                  <span style="font-size:0.8rem; color:var(--muted); margin-left:8px;">${dateStr} • ⏱️ ${durMin} min</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-weight:700; font-size:0.9rem;">${rightQ}/${totalQ} acertos (${pct}%)</span>
                  <span class="badge ${passed ? "badge-green" : "badge-red"}">${passed ? "✅ Aprovado (≥70%)" : "⚠️ Revisar (<70%)"}</span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function buildSimulado(totalCount) {
    const ratio = totalCount / 50; // 1 para 50Q, 0.4 para 20Q
    const m1 = shuffle((window.CPA_MODULO_1?.questoes || []).map((q) => ({ ...q, moduloId: 1 })));
    const m2 = shuffle((window.CPA_MODULO_2?.questoes || []).map((q) => ({ ...q, moduloId: 2 })));
    const m3 = shuffle((window.CPA_MODULO_3?.questoes || []).map((q) => ({ ...q, moduloId: 3 })));
    const m4 = shuffle((window.CPA_MODULO_4?.questoes || []).map((q) => ({ ...q, moduloId: 4 })));

    const c1 = Math.round(10 * ratio);
    const c2 = Math.round(20 * ratio);
    const c3 = Math.round(15 * ratio);
    const c4 = totalCount - (c1 + c2 + c3);

    const selected = [
      ...m1.slice(0, c1),
      ...m2.slice(0, c2),
      ...m3.slice(0, c3),
      ...m4.slice(0, c4)
    ];

    return shuffle(selected).map((q) => ({
      ...q,
      _opts: shuffle(q.alternativas || [])
    }));
  }

  function startSimulado(totalCount, minutes) {
    simQuestions = buildSimulado(totalCount);
    simIdx = 0;
    simAnswers = [];
    simInitialSeconds = minutes * 60;
    simSecondsLeft = minutes * 60;

    document.getElementById("simulado-intro").style.display = "none";
    document.getElementById("simulado-result").style.display = "none";
    const histCard = document.getElementById("simulado-history-card");
    if (histCard) histCard.style.display = "none";
    document.getElementById("simulado-active").style.display = "block";

    if (simTimerId) clearInterval(simTimerId);
    simTimerId = setInterval(() => {
      simSecondsLeft--;
      const h = String(Math.floor(simSecondsLeft / 3600)).padStart(2, "0");
      const m = String(Math.floor((simSecondsLeft % 3600) / 60)).padStart(2, "0");
      const s = String(simSecondsLeft % 60).padStart(2, "0");
      const tEl = document.getElementById("sim-timer");
      if (tEl) tEl.textContent = `${h}:${m}:${s}`;
      if (simSecondsLeft <= 0) finishSimulado();
    }, 1000);

    renderSimuladoStep();
  }

  document.getElementById("btn-start-simulado-50")?.addEventListener("click", () => startSimulado(50, 150));
  document.getElementById("btn-start-simulado-20")?.addEventListener("click", () => startSimulado(20, 60));
  document.getElementById("btn-finish-simulado-early")?.addEventListener("click", finishSimulado);

  function renderSimuladoStep() {
    const q = simQuestions[simIdx];
    if (!q) {
      finishSimulado();
      return;
    }

    document.getElementById("sim-q-progress").textContent = `Questão ${simIdx + 1} de ${simQuestions.length}`;
    document.getElementById("sim-q-mod").textContent = `Módulo ${q.moduloId} ${q.codigoItem ? "• Item " + q.codigoItem : ""}`;

    const area = document.getElementById("simulado-question-area");
    const letters = ["A", "B", "C", "D"];
    let selectedOptIdx = null;

    area.innerHTML = `
      <div class="context-block">${(q.contexto || "").replace(/\n/g, "<br>")}</div>
      <div class="enunciado-block">${q.enunciado || ""}</div>
      <div class="options-list" id="sim-opts">
        ${q._opts
          .map(
            (o, idx) => `
            <button class="option-btn" data-sim-opt="${idx}">
              <div class="option-main">
                <span class="opt-letter">${letters[idx]}</span>
                <span style="flex:1;">${o.texto}</span>
              </div>
            </button>
          `
          )
          .join("")}
      </div>
      <div style="margin-top:18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <span style="font-size:0.82rem; color:var(--muted);">⚠️ Regra Oficial ANBIMA: Ao confirmar e avançar, você não poderá retornar a esta questão.</span>
        <button class="btn" id="btn-confirm-sim-q" disabled>Confirmar Resposta e Avançar 🔒 ▶</button>
      </div>
    `;

    const optBtns = area.querySelectorAll("[data-sim-opt]");
    const confirmBtn = document.getElementById("btn-confirm-sim-q");

    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedOptIdx = parseInt(btn.dataset.simOpt, 10);
        optBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        confirmBtn.disabled = false;
      });
    });

    confirmBtn.addEventListener("click", () => {
      if (selectedOptIdx === null) return;
      const chosen = q._opts[selectedOptIdx];
      const isOk = !!chosen.correta;
      state.answeredQuestions[q.id] = { correct: isOk, chosenText: chosen.texto || "" };
      simAnswers.push({
        question: q,
        chosenOpt: chosen,
        correct: isOk
      });
      saveState();
      fetch("/api/questions/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: q.id,
          correct: isOk,
          chosenText: chosen.texto || ""
        })
      }).catch(() => {});
      simIdx++;
      renderSimuladoStep();
    });
  }

  function finishSimulado() {
    if (simTimerId) clearInterval(simTimerId);
    renderGlobalKPIs();
    document.getElementById("simulado-active").style.display = "none";
    const resEl = document.getElementById("simulado-result");
    resEl.style.display = "block";

    const total = simAnswers.length || simQuestions.length;
    const hits = simAnswers.filter((a) => a.correct).length;
    const pct = total ? Math.round((hits / total) * 100) : 0;
    const passed = pct >= 70;
    const durationSeconds = Math.max(0, simInitialSeconds - simSecondsLeft);
    const modeLabel = `${simQuestions.length || total}Q`;
    const simDetails = simAnswers.map((a) => ({
      questionId: a.question.id,
      moduloId: a.question.moduloId,
      correct: a.correct
    }));

    const localSimEntry = {
      id: Date.now(),
      mode: modeLabel,
      totalQuestions: total,
      correctAnswers: hits,
      scorePct: pct,
      passed: passed,
      durationSeconds: durationSeconds,
      details: simDetails,
      createdAt: new Date().toISOString()
    };
    state.simulations = [localSimEntry, ...(state.simulations || [])];
    saveState();
    renderSimuladoHistory();

    fetch("/api/simulations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: modeLabel,
        totalQuestions: total,
        correctAnswers: hits,
        scorePct: pct,
        passed: passed,
        durationSeconds: durationSeconds,
        details: simDetails
      })
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((savedSim) => {
        if (savedSim && savedSim.id) {
          state.simulations = [
            savedSim,
            ...(state.simulations || []).filter((s) => s.id !== localSimEntry.id && s.id !== savedSim.id)
          ];
          saveState();
          renderSimuladoHistory();
        }
      })
      .catch(() => {});

    // Desempenho por Módulo
    const modBreakdown = [1, 2, 3, 4].map((mId) => {
      const mAns = simAnswers.filter((a) => a.question.moduloId === mId);
      const mHits = mAns.filter((a) => a.correct).length;
      const mPct = mAns.length ? Math.round((mHits / mAns.length) * 100) : 0;
      return { mId, total: mAns.length, hits: mHits, pct: mPct };
    });

    const wrongList = simAnswers.filter((a) => !a.correct);

    resEl.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title" style="font-size:1.3rem;">
            ${passed ? "🏆 APROVADO NO SIMULADO CPA ANBIMA!" : "⚠️ Aproveitamento Abaixo de 70% — Veja o Diagnóstico"}
          </h2>
          <span class="badge ${passed ? "badge-green" : "badge-red"}" style="font-size:0.95rem; padding:6px 14px;">
            ${hits} / ${total} acertos (${pct}%)
          </span>
        </div>
        <div class="grid-4" style="margin-top:14px;">
          ${modBreakdown
            .map(
              (mb) => `
              <div class="card" style="padding:12px; background:var(--bg);">
                <div style="font-weight:700; font-size:0.88rem;">Módulo ${mb.mId}</div>
                <div style="font-size:1.4rem; font-weight:800; color:${mb.pct >= 70 ? "#10b981" : "#fbbf24"};">${mb.pct}%</div>
                <div style="font-size:0.78rem; color:var(--muted);">${mb.hits}/${mb.total} acertos</div>
              </div>
            `
            )
            .join("")}
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="btn" id="btn-restart-simulado">🔄 Novo Simulado</button>
          ${
            wrongList.length
              ? `<button class="btn btn-secondary" id="btn-goto-wrong-bank">❌ Praticar Caderno de Erros</button>`
              : ""
          }
        </div>
      </div>

      ${
        wrongList.length
          ? `<h3 style="margin:22px 0 12px;">🔍 Correção Comentada das Questões Erradas (${wrongList.length}):</h3>` +
            wrongList
              .map((item, idx) => {
                const rightOpt = item.question._opts.find((o) => o.correta) || {};
                return `
                  <div class="card" style="margin-bottom:14px; border-left:4px solid var(--danger);">
                    <div class="card-header">
                      <strong>Questão Revisão #${idx + 1} (Módulo ${item.question.moduloId} ${item.question.codigoItem ? "• Item " + item.question.codigoItem : ""})</strong>
                      <span class="badge badge-amber">PD ${item.question.codigoPD || ""}</span>
                    </div>
                    <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:10px;">${item.question.enunciado}</p>
                    <p style="font-size:0.88rem; color:#f87171;">❌ <b>Sua resposta:</b> ${item.chosenOpt.texto}</p>
                    ${item.chosenOpt.justificativa ? `<p style="font-size:0.82rem; color:var(--muted); margin:4px 0 8px 20px;">↳ <i>Por que está incorreta:</i> ${item.chosenOpt.justificativa}</p>` : ""}
                    <p style="font-size:0.88rem; color:#10b981; margin-top:6px;">✅ <b>Alternativa Correta:</b> ${rightOpt.texto || ""}</p>
                    <div class="feedback-panel ok" style="margin-top:10px;">
                      <strong>Gabarito Oficial Comentado:</strong> ${item.question.gabaritoComentado || rightOpt.justificativa || ""}
                    </div>
                  </div>
                `;
              })
              .join("")
          : ""
      }
    `;

    document.getElementById("btn-restart-simulado")?.addEventListener("click", () => {
      document.getElementById("simulado-result").style.display = "none";
      document.getElementById("simulado-intro").style.display = "block";
      renderSimuladoHistory();
    });
    document.getElementById("btn-goto-wrong-bank")?.addEventListener("click", () => {
      const originSel = document.getElementById("q-origin-filter");
      if (originSel) originSel.value = "wrong";
      buildQuestionPool();
      switchTab("questoes");
    });
  }

  // Inicialização
  window.addEventListener("DOMContentLoaded", () => {
    if (typeof window.createHP12CWidget === "function") {
      window.createHP12CWidget(document.getElementById("sim-hp12c-mount"));
      window.createHP12CWidget(document.getElementById("hp12c-floating-mount"));
    }

    document.getElementById("btn-toggle-hp12c-modal")?.addEventListener("click", () => {
      document.getElementById("hp12c-floating-modal")?.classList.toggle("open");
    });

    renderGlobalKPIs();
    renderDashboard();
    renderStudyView();
    buildQuestionPool();
    renderPracticeQuestion();
    initCasesDropdown();
    renderCaseView();
    buildFlashcardPool();
    renderFlashcard();
    renderSimuladoHistory();

    fetch("/api/bootstrap")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Bootstrap failed"))))
      .then((data) => {
        const badge = document.getElementById("db-status-badge");
        if (badge) {
          badge.textContent = "🟢 PostgreSQL: cpa-ambima (Ativo)";
        }
        if (data.masteredTopics) state.masteredTopics = data.masteredTopics;
        if (data.answeredQuestions) state.answeredQuestions = data.answeredQuestions;
        if (data.favoriteQuestions) state.favoriteQuestions = data.favoriteQuestions;
        if (data.completedCases) state.completedCases = data.completedCases;
        if (data.sprintDone) state.sprintDone = data.sprintDone;
        if (Array.isArray(data.simulations)) state.simulations = data.simulations;
        saveState();

        renderGlobalKPIs();
        renderDashboard();
        renderStudyView();
        buildQuestionPool();
        renderPracticeQuestion();
        renderCaseView();
        renderFlashcard();
        renderSimuladoHistory();
      })
      .catch(() => {});
  });
})();
