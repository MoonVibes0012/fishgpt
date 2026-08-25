export function formatTime(date = new Date()) {
  const jam = String(date.getHours()).padStart(2, '0');
  const menit = String(date.getMinutes()).padStart(2, '0');
  const detik = String(date.getSeconds()).padStart(2, '0');
  return `${jam}:${menit}:${detik}`;
}

export function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);
}