import express from "express";
import { register, allUsers } from "../controllers/user.controller.js";
const userRoutes = express.Router();

userRoutes.get("/", allUsers);
// userRoutes.get("/fetch-by-redis", redisUsers);


userRoutes.post("/register", register);

export default userRoutes;