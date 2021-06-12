import path from 'path';
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

router.route("/").get((req, res) => {
  // res.send("Hello World");
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


export default router;