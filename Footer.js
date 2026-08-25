export default {
  render() {
    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML = `
      <p>🐟 Fishgpt Laut — Syntera · Kedalaman Tak Terbatas</p>
      <p class="footer-note">© 2026 · All systems cold, all signals clear</p>
    `;
    return footer;
  },
};