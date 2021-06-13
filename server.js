// Request NPM Module Dependencies
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Request Module/Middleware Dependencies
import connectDB from './server/config/connectDB.js';
import router from './server/routes/index.js';
import passportSetup from './server/middleware/passport/passport.js';

//Initiate Server
const PORT = process.env.PORT || 4000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// Connect to Database
connectDB();

// Connect to Middleware
passportSetup(app);
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")));
}

//Connect to Routes
app.use(router);

// console.log(path.join(__dirname, "../", "client", "build", "index.html"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

// Listen to requests on server
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}!`);
});