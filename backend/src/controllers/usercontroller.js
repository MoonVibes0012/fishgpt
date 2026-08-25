import pool from '../config/database.js';

export const userController = {
  async getAll(req, res, next) {
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const { username, email } = req.body;
      const { rows } = await pool.query(
        'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
        [username, email]
      );
      res.status(201).json(rows[0]);
    } catch (err) {
      next(err);
    }
  },
};
