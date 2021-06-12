import passport from 'passport';
import express from 'express';
import apiRouter from './api.js';
import authRouter from './auth.js';

const router = express.Router();

router.route('/getuser').get((req, res) => {
  res.send(req.user);
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);


export default router;