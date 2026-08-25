import pool from '../config/database.js';

export const User = {
  async create({ username, email }) {
    const { rows } = await pool.query(
      'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    return rows[0];
  },
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
  },
};
