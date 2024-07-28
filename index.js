
const express = require("express")
const mongoose =require("mongoose")
const dotEnv=require("dotenv")
const bodyparser = require("body-parser")
const employeeRoute = require("./Route/employeeroute")
const employeeDetailsRoute = require("./Route/employeedetailsroute")
const cors = require('cors')
const path = require('path')

const app=express()

dotEnv.config()
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch(()=>console.log(error))

const Port=4002;
app.listen(Port,()=>{
    console.log(`Server running on ${Port}`)
});

app.use(bodyparser.json())
app.use("/employee",employeeRoute)
app.use("/employeedetails",employeeDetailsRoute)

app.use("/",(req,res)=>{
    res.send("Hi")
})



