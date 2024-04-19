// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

const {addEmployee, getEmployees,removeEmployee} = require('../Controllers/employeeController');

// POST new employee
router.post('/employee/add', addEmployee);

// GET all employees
router.get('/employee/get', getEmployees);

// DELETE employee
router.delete('/:id', removeEmployee); 

module.exports = router;
