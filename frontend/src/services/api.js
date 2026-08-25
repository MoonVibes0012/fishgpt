const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Terjadi kesalahan pada server');
  }

  return res.json();
}

export const api = {
  getLogs: () => request('/logs'),
  getStats: () => request('/stats'),
  sendSignal: (data) => request('/logs', { method: 'POST', body: JSON.stringify(data) }),
};
