import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
const app=express();
app.use(express.json())
app.use(cors());
dotenv.config()
const connectApp=()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error);
        throw error;
    })
}
app.use('/',()=>{
    console.log("am");

})
app.listen(800,()=>{
    console.log("Server Connected at port",800)
    connectApp()
})