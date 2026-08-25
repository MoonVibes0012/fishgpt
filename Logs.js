import { api } from '../services/api.js';

export default {
  async mount(root) {
    const el = document.createElement('div');
    el.className = 'container';
    el.innerHTML = `<h1>📜 Logs</h1><p>Memuat riwayat...</p>`;
    root.appendChild(el);

    try {
      const logs = await api.getLogs();
      el.innerHTML = `
        <h1>📜 Logs</h1>
        <ul style="list-style:none; margin-top:20px;">
          ${logs.map(log => `
            <li style="padding:10px; border-bottom:1px solid rgba(0,255,204,0.1);">
              <span style="color:var(--secondary)">${log.timestamp}</span> — ${log.message}
            </li>
          `).join('')}
        </ul>
      `;
    } catch (err) {
      el.innerHTML = `<h1>📜 Logs</h1><p style="color:var(--danger)">⚠️ Gagal memuat: ${err.message}</p>`;
    }
  },
};