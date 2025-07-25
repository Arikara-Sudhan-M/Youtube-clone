import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import userroutes from "./Routes/User.js"


dotenv.config()
const app=express()

app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.get('/',(req,res)=>{
    res.send("YouTube is working")
})


app.use(bodyParser.json())
app.use('./user',userroutes)
const PORT= process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})
const DB_URL= process.env.DB_URL
mongoose.connect(DB_URL).then(()=>{
    console.log("Mongodb Database connected")
}).catch((error)=>{
    console.log(error)
})