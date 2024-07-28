

const mongoose = require("mongoose");

const employeedetails = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type:[{
            type:String,
            enum:['Hr','Manager','Sales']
        }]
    },
    gender:{
        type:[{
            type:String,
            enum:['Male','Female']
        }]
    },
    course:{
        type:[{
            type:String,
            enum:['MCA','BCA','BSC']
        }]
    },
    image:{
        type:String
    },
    employeeSchema:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    }]
})

const Employeedetails = mongoose.model("Employeedetails",employeedetails)

module.exports = Employeedetails;