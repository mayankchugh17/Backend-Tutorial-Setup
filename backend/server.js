import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./lib/db.js";
import Redis from "ioredis";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server has been started");
    connectDB();
})

const redis = new Redis(process.env.REDIS_URL);

app.get("/", (req, res)=>{
    res.status(201).json({message:"Welcome to Dashboard"});
})

app.use("/user", userRoutes);
