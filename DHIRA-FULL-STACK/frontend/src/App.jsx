import React, { useState, useEffect } from 'react';
import AddEmployeeForm from './Components/AddEmployeeForm';
import EmployeeList from './Components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5000/employee/get');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      } else {
        console.error('Failed to fetch employees');
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      const response = await fetch('http://localhost:5000/employee/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      if (response.ok) {
        const newEmployee = await response.json();
        setEmployees([...employees, newEmployee]);
      } else {
        console.error('Failed to add employee');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };



  return (
    <div>
      <AddEmployeeForm onAddEmployee={addEmployee} />
      <EmployeeList employees={employees}  />
    </div>
  );
};

export default App;
