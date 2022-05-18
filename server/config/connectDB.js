import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`;

const connectDB = async() => {
    try {
        await mongoose.connect(dbConfig, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => {
        console.log("Connected to mongoose successfully");
        });
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

export default connectDB;