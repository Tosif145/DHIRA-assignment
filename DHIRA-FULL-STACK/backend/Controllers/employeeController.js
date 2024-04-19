// controllers/employeeController.js

const Employee = require('../model/employee');

// Controller function to add a new employee
exports.addEmployee = async (req, res) => {
  const { name, salary, department } = req.body;

  try {
    const employee = new Employee({
      name,
      salary,
      department,
    });

    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Get employees

exports.getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


// remove employee
exports.removeEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const removedEmployee = await Employee.findByIdAndRemove(id);
    if (!removedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee removed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
