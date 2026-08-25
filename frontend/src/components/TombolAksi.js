import { emit } from '../core/events.js';

export default {
  render() {
    const area = document.createElement('div');
    area.className = 'tombol-area';

    const tombolList = [
      { label: 'Kirim Sinyal', class: '', msg: '🌊 Ombak membawa pesan dari kedalaman!' },
      { label: 'Hapus Jejak', class: 'merah', msg: '💀 Mode senyap aktif — jejak dihapus!' },
      { label: 'Baca Ramalan', class: 'ungu', msg: '🔮 Ramalan: langit cerah, laut gelap.' },
      { label: '🌈 Ubah Warna', class: '', action: 'ubahWarna' },
    ];

    tombolList.forEach(t => {
      const btn = document.createElement('button');
      btn.className = `tombol ${t.class}`.trim();
      btn.textContent = t.label;
      btn.addEventListener('click', () => {
        if (t.action === 'ubahWarna') emit('ubahWarna');
        else emit('notif', t.msg);
      });
      area.appendChild(btn);
    });

    return area;
  },
};
