import App from './App.js';
import './router.js';
import { connectSocket } from './services/socket.js';

connectSocket(); // opsional, akan reconnect otomatis saat backend hidup

const app = document.getElementById('app');
App.mount(app);