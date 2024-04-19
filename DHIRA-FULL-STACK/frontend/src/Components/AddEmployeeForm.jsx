import React, { useState } from 'react';
import './css/AddEmployeeForm.css'

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !salary || !department) return;
    onAddEmployee({ name, salary, department });
    setName('');
    setSalary('');
    setDepartment('');
  };

  return (
    <div className='container'>
    <h1>Employee Management System</h1>
    <form className='add-employee-form' onSubmit={handleSubmit}>
        
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
    </div>
  );
};

export default AddEmployeeForm;
