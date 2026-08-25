export function validateLogInput({ message, level }) {
  if (!message || typeof message !== 'string' || message.length > 1000) {
    return { valid: false, error: 'Message harus string maksimal 1000 karakter' };
  }
  if (level && !['info', 'warn', 'error'].includes(level)) {
    return { valid: false, error: 'Level harus info, warn, atau error' };
  }
  return { valid: true };
}
