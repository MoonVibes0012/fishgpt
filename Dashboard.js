import { api } from '../services/api.js';

export default {
  async mount(root) {
    const el = document.createElement('div');
    el.className = 'container';
    el.innerHTML = `<h1>📊 Dashboard</h1><p>Memuat statistik...</p>`;
    root.appendChild(el);

    try {
      const stats = await api.getStats();
      el.innerHTML = `
        <h1>📊 Dashboard</h1>
        <div class="grid">
          <div class="kartu"><h3>Total Logs</h3><p>${stats.totalLogs || 0}</p></div>
          <div class="kartu"><h3>Aktivitas Hari Ini</h3><p>${stats.today || 0}</p></div>
          <div class="kartu"><h3>Status Server</h3><p>${stats.status || 'Online'}</p></div>
        </div>
      `;
    } catch (err) {
      el.innerHTML = `<h1>📊 Dashboard</h1><p style="color:var(--danger)">⚠️ Gagal memuat: ${err.message}</p>`;
    }
  },
};