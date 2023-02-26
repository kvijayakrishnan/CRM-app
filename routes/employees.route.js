const express = require('express');
const Employees = require('../model/employees.model');
const router = express.Router();


// to get all employees
router.get('/employees', (req, res)=>{
    try{
        Employees.find((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving employee details..'});
            }
            return res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({message: 'Internal server error'});
    }
});

// to get signle employee details - using path parameter
router.get('/employees/:empID', (req, res)=>{
    try{
        const employeeID = req.params.empID
        Employees.findOne({_id: req.params.empID},(err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving employee details..'});
            }
            return res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({message: 'Internal server error'});
    }
});



// To add a new employee
router.post('/employees', (req, res)=>{
    try{
        const data = req.body;
        const employee = new Employees(data);
        employee.save((err, data) =>{
            if(err){
                return res.status(400).send({message:"Error while creating new employee"});
            }
            return res.status(201).send({id:data._id, message:"Employee has been created successfully.. "});
        })
    }catch(error){
        res.status(500).send({message:"Internal server error"});
    }
});




// To update an employee
router.put('/employees/:empID', (req,res) => {
        try{
            const employeeID = req.params.empID;
            Employees.findByIdAndUpdate({_id: employeeID},{$set:req.body},(err, data) => {
                if(err){
                    return res.status(400).send({message:"Error while updating an employee"});
                }
                return res.status(201).send({id:data._id, message:"Employee has updated successfully.. "});
            })

        }catch(error){
            res.status(500).send({message: "Internal server Error"})
        }
});




// To delete an employee
router.delete('/employees/:empID', (req, res) => {
    try{
        const employeeID = req.params.empID;
        Employees.deleteOne({_id: employeeID},(err, data) => {
            if(err){
                return res.status(400).send({message:'Error while delete the employee'});
            }
            return res.status(200).send({message:"Employee has deleted successfully"})
        })
    }catch(err){
        res.status(500).send({message:"Internal server error"})
    }
});


module.exports = router;




