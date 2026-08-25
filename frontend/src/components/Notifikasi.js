import { on } from '../core/events.js';

export default {
  render() {
    const el = document.createElement('div');
    el.id = 'notif';
    el.textContent = '▼ Klik tombol untuk merasakan kedalaman ▼';

    on('notif', (msg) => {
      el.textContent = '⚡ ' + msg + ' ⚡';
      el.style.color = '#00ffcc';
      el.style.transform = 'scale(1.02)';
      setTimeout(() => el.style.transform = 'scale(1)', 150);
    });

    return el;
  },
};
