import { Log } from '../models/Log.js';

export const logController = {
  async getAll(req, res, next) {
    try {
      const logs = await Log.getAll();
      res.json(logs);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const { message, level } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }
      const log = await Log.create({ message, level });
      res.status(201).json(log);
    } catch (err) {
      next(err);
    }
  },

  async getStats(req, res, next) {
    try {
      const stats = await Log.getStats();
      res.json(stats);
    } catch (err) {
      next(err);
    }
  },
};
