import { Pool } from 'pg';
import { env } from './env.js';

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.on('connect', () => {
  console.log('⚡ Terhubung ke Neon Postgres');
});

pool.on('error', (err) => {
  console.error('Database error:', err);
});

export default pool;
