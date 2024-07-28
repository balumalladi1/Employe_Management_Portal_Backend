
const employeeSchema = require("../Model/EmployeeSchema");

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const dotEnv=require('dotenv');

dotEnv.config()

const secretKey = process.env.WhatIsYourName


const employeeRegister = async(req,res)=>{
    const {username,password} = req.body;
    try {
        const username1 = await employeeSchema.findOne({username})
        if(username1){
            console.log("user already exist")
            return res.status(400).json("user already exist") 
        }

        const hashedpassword = await bcrypt.hash(password,10)

        const newEmployee = new employeeSchema({
            username:username,
            password:hashedpassword
        })

        await newEmployee.save();
        res.status(200).json("employee registered succesfully")
        console.log("Vendor Registered Succesfully")

    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}

const employeelogin = async(req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await employeeSchema.findOne({username})
        if(!user || !(await bcrypt.compare(password,user.password)) ){
            res.status(401).json("User not found")
        }
        
        const token = jwt.sign({employeeId:user._id},secretKey,{expiresIn:"1h"})
        const employeeId=user._id;
        res.status(200).json({success:"Login succesfull",token,employeeId})
        console.log(employeeId)
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}

const getAllEmployees = async(req,res) =>{
    try {
        const vendors = await employeeSchema.find({})
        res.json({vendors})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})   
    }
}

module.exports = {employeeRegister,employeelogin,getAllEmployees}

