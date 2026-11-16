const API_BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  if (!res.ok) {
    throw new Error(`API ${path} falhou com status ${res.status}`);
  }
  return res.json();
}

const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) });

// O backend devolve array puro em /modules e /maps; aceita-se também { modules } / { maps }.
function listFrom(payload, key) {
  if (Array.isArray(payload)) return payload;
  return payload?.[key] || [];
}

export const api = {
  async loadAll() {
    const [boot, modules, maps, analytics, materials] = await Promise.all([
      request('/bootstrap'),
      request('/modules'),
      request('/maps'),
      request('/analytics'),
      request('/study-materials'),
    ]);
    return {
      boot,
      modules: listFrom(modules, 'modules'),
      maps: listFrom(maps, 'maps'),
      analytics,
      materials: listFrom(materials, 'materials'),
    };
  },

  toggleTopic: (key) => post('/topics/toggle', { key }),
  answerQuestion: (questionId, correct, chosenText) =>
    post('/questions/answer', { questionId, correct, chosenText }),
  toggleFavorite: (questionId) => post('/questions/favorite', { questionId }),
  completeMap: (mapId, score) => post('/maps/complete', { mapId, score }),
  toggleSprint: (blockId, concluido) => post('/sprint/toggle', { blockId, concluido }),
  saveSimulation: (payload) => post('/simulations', payload),
};
