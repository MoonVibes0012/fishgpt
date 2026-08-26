import pool from '../config/database.js';

export const Log = {
  async create({ message, level = 'info' }) {
    const query = `
      INSERT INTO logs (message, level, created_at)
      VALUES ($1, $2, NOW())
      RETURNING *
    `;
    const { rows } = await pool.query(query, [message, level]);
    return rows[0];
  },

  async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM logs ORDER BY created_at DESC LIMIT 100
    `);
    return rows;
  },

  async getStats() {
    const { rows } = await pool.query(`
      SELECT
        COUNT(*) AS "totalLogs",
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) AS "today",
        COUNT(*) FILTER (WHERE level = 'error') AS "errors"
      FROM logs
    `);
    return rows[0];
  },
};
