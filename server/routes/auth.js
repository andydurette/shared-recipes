import passport from 'passport';
import express from 'express';

const authRouter = express.Router();

authRouter.route('/google').get(passport.authenticate('google', { scope: ['profile'] }));

authRouter.route('/google/callback').get(
    passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  if(process.env.NODE_ENV === 'production') {
    res.redirect('https://shared-recipes.herokuapp.com');
  }

  if(process.env.NODE_ENV === 'dev') {
    res.redirect('http://localhost:3000');
  }
  
});

authRouter.route('/twitter', 
passport.authenticate('twitter'));

authRouter.route('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  });

authRouter.route('/github', 
passport.authenticate('github'));

authRouter.route('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  });

  authRouter.route("/logout").get((req, res) => {
    res.status(200);
    req.logout();
    res.send("done");
});


export default authRouter;