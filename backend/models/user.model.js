import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {timestamps:true});

const User = mongoose.Model("users", userSchema);

export default User;