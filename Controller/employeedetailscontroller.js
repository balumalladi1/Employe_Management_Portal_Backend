
const multer = require("multer");

const employeedetails = require("../Model/EmployeeSchema");

const Firm = require('../Model/EmployeedetailsSchema')

const path= require("path")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage:storage})

const addemployee = async(req,res)=>{
       
        try {
            const {name,email,mobile,designation,gender,course}=req.body;
            const image = req.file? req.file.filename:undefined;
            const employee = await employeedetails.findById(req.EmployeeId)

            
            const firm = new Firm ({
                name,email,mobile,designation,gender,course,image
            })
            await firm.save()
            return res.status(200).json({message:"Firm added Succesfully"})
        } catch (error) {
            console.log(error) 
            return res.status(500).json("Internal server is error")
        }
}

const getAllEmployeedetails = async(req,res) =>{
    try {
        const vendors = await Firm.find({})
        res.json({vendors})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})   
    }
}

module.exports = {addemployee:[upload.single("image"), addemployee],getAllEmployeedetails};