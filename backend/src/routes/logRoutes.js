import { Router } from 'express';
import { logController } from '../controllers/logController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.get('/', logController.getAll);
router.post('/', authenticate, logController.create);
router.get('/stats', logController.getStats);

export default router;
