import User from "../models/user.model.js";
import Redis from "ioredis";
// GET method

// 67 ms
export async function allUsers(req, res) {
    try {
        const user = await User.find();
        return res.json({message:user});
        
    } catch (error) {
        console.error("All Users error", error)
    }    
}

// By redis
// export async function redisUsers(req, res){
//     const users = new 
// }

// POST method
export async function register(req, res){
    try {
        const {name, email, password} = req.body;
        const userExits = await User.findOne({email});
        if(userExits)
        {
            return res.json({message:"User Already Exists!!!"});
        }
        const user = await User.create({name, email, password});
        return res.status(201).json({message: "User created sucessfully !!!", user})
    } catch (error) {
        console.error("User creation error", error)
    }
};