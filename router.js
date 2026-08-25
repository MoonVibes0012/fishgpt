import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
import Logs from './pages/Logs.js';

const routes = {
  '/': Home,
  '/dashboard': Dashboard,
  '/logs': Logs,
};

export function handleRoute() {
  const path = window.location.hash.slice(1) || '/';
  return routes[path] || Home;
}

export function navigate(path) {
  window.location.hash = path;
}