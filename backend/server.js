import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./lib/db.js";
dotenv.config();

const app = express();

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server has been started");
    connectDB();
})

app.get("/", (req, res)=>{
    res.status(201).json({message:"Welcome to Dashboard"});
})

app.get("/user", userRoutes);