import crypto from 'crypto';
import { env } from '../config/env.js';

const algorithm = 'aes-256-ctr';
const secretKey = crypto.createHash('sha256').update(env.JWT_SECRET).digest();

export function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decrypt(text) {
  const [iv, encrypted] = text.split(':').map((part) => Buffer.from(part, 'hex'));
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString();
                                              }
