
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    employeedetails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employeedetails"
    }]

    
})

const Employee=mongoose.model("Employee",employeeSchema)

module.exports=Employee;