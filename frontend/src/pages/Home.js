import Header from '../components/Header.js';
import JamDigital from '../components/JamDigital.js';
import GridKartu from '../components/GridKartu.js';
import TombolAksi from '../components/TombolAksi.js';
import Notifikasi from '../components/Notifikasi.js';
import Footer from '../components/Footer.js';

export default {
  mount(root) {
    const container = document.createElement('div');
    container.className = 'container';

    container.appendChild(Header.render());
    container.appendChild(JamDigital.render());
    container.appendChild(GridKartu.render());
    container.appendChild(TombolAksi.render());
    container.appendChild(Notifikasi.render());
    container.appendChild(Footer.render());

    root.appendChild(container);
  },
};
