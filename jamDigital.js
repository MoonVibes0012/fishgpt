export default {
  render() {
    const el = document.createElement('div');
    el.className = 'jam';
    el.id = 'jam';
    el.textContent = '00:00:00';
    this.start(el);
    return el;
  },

  start(el) {
    const update = () => {
      const now = new Date();
      const jam = String(now.getHours()).padStart(2, '0');
      const menit = String(now.getMinutes()).padStart(2, '0');
      const detik = String(now.getSeconds()).padStart(2, '0');
      el.textContent = `${jam}:${menit}:${detik}`;
    };
    update();
    setInterval(update, 1000);
  },
};