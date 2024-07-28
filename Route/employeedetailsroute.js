
const express = require("express")
const employeeControllerdetails = require("../Controller/employeedetailscontroller")

const verifyToken = require('../middlewares/middlewares');

const router = express.Router()

router.post("/add-employee",verifyToken,employeeControllerdetails.addemployee)

router.get("/employee-details",employeeControllerdetails.getAllEmployeedetails)

router.post('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.header('Content-Type',image/jpeg);
    res.sendFile(path.join(__dirname,'..','uploads',imageName));
});

module.exports = router;