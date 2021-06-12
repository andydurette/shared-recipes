import passport from 'passport';
import express from 'express';
import apiRouter from './api.js';
import authRouter from './auth.js';

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("../../client/build/index.html");
});

router.route('/getuser').get((req, res) => {
  res.send(req.user);
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);


export default router;