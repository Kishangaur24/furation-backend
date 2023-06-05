const express= require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
mongoose.connect(process.env.MONGOURL)
const app = express()

let PORT= process.env.PORT||8000
const userRoute= require("./route/userRoute")
app.use("/api",userRoute)

app.listen(PORT,()=>{
    console.log("port is running")
})