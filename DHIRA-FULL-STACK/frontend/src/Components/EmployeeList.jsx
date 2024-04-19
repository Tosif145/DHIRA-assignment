import React from 'react';
import './css/EmployeeList.css'

const EmployeeList = ({ employees }) => {
  return (
    <>
    
   
    <div className='employee-list'>
      <h2>Employee List</h2>
      <div style={{color:"black",fontWeight:'600'}} className='employee-list'><span>Name</span> - <span>Salary</span> - <span>Department</span></div>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.salary} - {employee.department}
            
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default EmployeeList;
