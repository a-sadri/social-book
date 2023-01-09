import express from 'express';

import { register } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', upload.single('picture'), register);

export default router;
