import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.get('/', userController.getAll);
router.post('/', authenticate, userController.create);

export default router;
