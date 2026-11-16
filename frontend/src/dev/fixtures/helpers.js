// Helpers para montar fixtures no formato exato do backend (somente desenvolvimento).

export const p = (text) => `<p>${text}</p>`;
export const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
export const b = (text) => `<strong>${text}</strong>`;

const pad = (n) => String(n).padStart(2, '0');

// [codigo, titulo, prioridade, explicacaoHtml, gatilhos[], pegadinhas[]]
export function buildTopics(moduleId, tuples) {
  return tuples.map(([codigo, titulo, prioridade, explicacao, gatilhos, pegadinhas]) => {
    const key = `${moduleId}_${codigo}`;
    return {
      key,
      module_id: moduleId,
      codigo,
      titulo,
      prioridade,
      explicacao,
      gatilhosProva: gatilhos,
      gatilhos_prova: gatilhos,
      pegadinhas,
      mastered: false,
    };
  });
}

// [frente, verso]
export function buildFlashcards(moduleId, pairs) {
  return pairs.map(([frente, verso], i) => ({
    id: `FC_M${moduleId}_${pad(i + 1)}`,
    module_id: moduleId,
    ordem: i + 1,
    frente,
    verso,
    mastered: false,
  }));
}

// def: { of: codigoItem|null, dif, nivel, pd, tp, ctx, enun, alts: [[texto, justificativa], ...], ok, gab }
export function buildQuestions(moduleId, defs) {
  return defs.map((d, i) => {
    const id = d.of ? `CESG_${d.of}` : `INED_M${moduleId}_${pad(i + 1)}`;
    const alternativas = d.alts.map(([texto, justificativa], idx) => ({
      texto,
      correta: idx === d.ok,
      justificativa,
    }));
    return {
      id,
      module_id: moduleId,
      moduloId: moduleId,
      oficial: !!d.of,
      codigoItem: d.of || null,
      codigo_item: d.of || null,
      codigoPD: d.pd,
      codigo_pd: d.pd,
      topicoPD: d.tp,
      topico_pd: d.tp,
      nivelCognitivo: d.nivel,
      nivel_cognitivo: d.nivel,
      dificuldade: d.dif,
      contexto: d.ctx || null,
      enunciado: d.enun,
      alternativas,
      gabaritoComentado: d.gab,
      gabarito_comentado: d.gab,
      favorita: false,
    };
  });
}
