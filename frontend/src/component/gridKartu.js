const data = [
  { icon: '🌊', title: 'Ombak', desc: 'Gelombang data mengalir' },
  { icon: '🔥', title: 'Api Abadi', desc: 'Server tidak pernah padam' },
  { icon: '🖤', title: 'Deep Core', desc: 'Akses root penuh' },
  { icon: '💀', title: 'Mode Senyap', desc: 'Tanpa jejak, tanpa batas' },
  { icon: '🔮', title: 'Ramalan', desc: 'Prediksi real-time' },
  { icon: '⚡', title: 'Overdrive', desc: 'Kecepatan maksimal' },
];

export default {
  render() {
    const grid = document.createElement('div');
    grid.className = 'grid';
    data.forEach(item => {
      const kartu = document.createElement('div');
      kartu.className = 'kartu';
      kartu.innerHTML = `
        <div class="icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      grid.appendChild(kartu);
    });
    return grid;
  },
};
