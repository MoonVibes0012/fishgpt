import { handleRoute } from './router.js';
import Footer from './components/Footer.js';

class App {
  mount(root) {
    this.root = root;
    window.addEventListener('hashchange', () => this.render());
    this.render();
  }

  render() {
    this.root.innerHTML = '';
    const page = handleRoute();
    page.mount(this.root);
    this.root.appendChild(Footer.render());
  }
}

export default new App();
