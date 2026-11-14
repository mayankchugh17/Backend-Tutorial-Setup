import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB (){
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("DataBase Connected!!!");
    } catch (error) {
        console.error("DB error", error)
    }
}

export default connectDB;