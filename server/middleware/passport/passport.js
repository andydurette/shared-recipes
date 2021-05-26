import session from 'express-session';
import passport from 'passport';
//Import Passport Strategies
import {googleStrategy, twitterStrategy, githubStrategy} from '../../strategies/authStrategies.js';
import { User } from '../../models/models.js';

const passportSetup = (app) => {
    
    // app.set("trust proxy", 1);

    app.use(
        session({
            secret: process.env.AUTH_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: {
              // sameSite: "none",
              // secure: true,
              maxAge: 1000 * 60 * 60 * 7 // One Week
            }
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser((user, done) => {
      return done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, doc) => {
        // Whatever we return goes to the client
        return done(null, doc);
      })
    });
    
    // Login With oAuth strategy -> Create A User in MONGODB -> Serialize Deserialize -> Grab that user from the database and return him
    passport.use(googleStrategy);
    passport.use(twitterStrategy);
    passport.use(githubStrategy);
}

export default passportSetup;