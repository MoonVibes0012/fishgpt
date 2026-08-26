import { WebSocketServer } from 'ws';
import { Log } from '../models/Log.js';

export function setupSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('⚡ Klien WebSocket terhubung');

    ws.on('message', async (data) => {
      const payload = JSON.parse(data);
      if (payload.type === 'ping') {
        ws.send(JSON.stringify({ type: 'pong' }));
      }
      if (payload.type === 'createLog') {
        const log = await Log.create(payload.data);
        wss.clients.forEach((client) => {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ type: 'newLog', data: log }));
          }
        });
      }
    });
  });

  return wss;
}
