import http from 'http';
import app from './src/app.js';
import { env } from './src/config/env.js';
import { setupSocket } from './src/sockets/index.js';

const server = http.createServer(app);
setupSocket(server);

server.listen(env.PORT, () => {
  console.log(`⚡ Fishgpt Laut API berjalan di port ${env.PORT}`);
});
