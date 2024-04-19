import React from 'react';
import './css/EmployeeList.css'

const EmployeeList = ({ employees }) => {
  return (
    <>
    
    <hr />
    <div className='employee-list'>
      <h2>Employee List</h2>
      <div style={{color:"black",fontWeight:'600'}} className='employee-list-inner'><p>Name</p>  <p>Salary</p> <p>Department</p></div>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <div>{employee.name}</div>
            <div>{employee.salary}</div>
            <div>{employee.department}</div>
            
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default EmployeeList;
