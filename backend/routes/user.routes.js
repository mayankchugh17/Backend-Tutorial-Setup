import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res)=>{
    res.status(201).json({message:"User Fetched!!!"});
})

export default userRoutes;