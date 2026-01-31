/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
const password = process.env.MONGODB_ATLAS_PASSWORD;
const username = process.env.MONGODB_ATLAS_USERNAME;

const mongoDB_URL= "mongodb+srv://"+username+":"+password+"@cluster0.fx54vz0.mongodb.net/dayframe?appName=Cluster0";

let cached = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

export async function dbConnect() {
    if(cached.conn){
        return cached.conn;
    }
    if(!cached.promise){
        cached.promise = mongoose.connect(mongoDB_URL).then((mongoose) => {
            return mongoose
        });
    }
    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.conn = null;
        throw error;
    }
    return cached.conn;
}
