let socket = null;

export function connectSocket() {
  const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

  socket = new WebSocket(`ws://${SOCKET_URL}`);

  socket.onopen = () => {
    console.log('⚡ WebSocket terhubung ke backend');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    window.dispatchEvent(new CustomEvent('ws:message', { detail: data }));
  };

  socket.onerror = (err) => {
    console.error('WebSocket error:', err);
  };

  return socket;
}

export function sendWS(payload) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  }
}
