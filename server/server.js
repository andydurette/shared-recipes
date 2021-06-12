// Request NPM Module Dependencies
import express from 'express';
import cors from 'cors';

// Request Module/Middleware Dependencies
import connectDB from './config/connectDB.js';
import router from './routes/index.js';
import passportSetup from './middleware/passport/passport.js';

//Initiate Server
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to Database
connectDB();

// Connect to Middleware
passportSetup(app);
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

//Connect to Routes
app.use(router);



// Listen to requests on server
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}!`);
});