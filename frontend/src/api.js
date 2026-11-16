const API_BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API ${path} failed with status ${res.status}`);
  }
  return res.json();
}

export const api = {
  getHealth: () => request('/health'),
  getBootstrap: () => request('/bootstrap'),
  getModules: () => request('/modules'),
  getMaps: () => request('/maps'),
  getAnalytics: () => request('/analytics'),
  getStudyMaterials: () => request('/study-materials'),

  toggleTopic: (key) =>
    request('/topics/toggle', { method: 'POST', body: JSON.stringify({ key }) }),

  answerQuestion: (questionId, correct, chosenText) =>
    request('/questions/answer', {
      method: 'POST',
      body: JSON.stringify({ questionId, correct, chosenText }),
    }),

  toggleFavorite: (questionId) =>
    request('/questions/favorite', {
      method: 'POST',
      body: JSON.stringify({ questionId }),
    }),

  completeMap: (mapId, score) =>
    request('/maps/complete', {
      method: 'POST',
      body: JSON.stringify({ mapId, score }),
    }),

  toggleSprint: (blockId, concluido) =>
    request('/sprint/toggle', {
      method: 'POST',
      body: JSON.stringify({ blockId, concluido }),
    }),

  saveSimulation: (payload) =>
    request('/simulations', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
