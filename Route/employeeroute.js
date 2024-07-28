
const express = require("express")
const employeeController = require("../Controller/employeecontroller")

const router = express.Router()

router.post("/register",employeeController.employeeRegister)


router.post("/login",employeeController.employeelogin)

router.get('/all-vendors', employeeController.getAllEmployees);

module.exports = router;