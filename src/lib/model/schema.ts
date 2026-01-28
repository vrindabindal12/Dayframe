import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : String,
    educationLevel : String,

})

export const User = mongoose.model("users", schema) || mongoose.models.users 