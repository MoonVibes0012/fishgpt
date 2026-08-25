export default {
  render() {
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
      <h1>🐟 FISHGPT LAUT</h1>
      <div class="sub">⚡ SYNTERA — KEDALAMAN TAK TERBATAS ⚡</div>
    `;
    return header;
  },
};