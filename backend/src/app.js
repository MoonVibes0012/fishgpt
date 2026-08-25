import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from './middlewares/rateLimiter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import logRoutes from './routes/logRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(rateLimiter);

app.get('/', (req, res) => {
  res.json({ status: 'online', name: 'Fishgpt Laut API' });
});

app.use('/api/logs', logRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
