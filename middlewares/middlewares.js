
const jwt = require("jsonwebtoken");

const Employee = require("../Model/EmployeeSchema");

const dotEnv = require("dotenv")

dotEnv.config()

const secretKey = process.env.WhatIsYourName 

const verifytoken = async(req,res,next)=>{
        const token = req.headers.token;
        try {
            const decoded = jwt.verify(token,secretKey)
            const employee = await Employee.findById(decoded.employeeId)
            if(!employee){
                res.status(404).json("Employee not exist")
            }

            req.employeeId = employee._id;
            next()

        } catch (error) {
            console.log(error)
            res.status(500).json("Internal Server error")
        }
}

module.exports = verifytoken;