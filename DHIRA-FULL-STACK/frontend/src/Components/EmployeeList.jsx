import React from 'react';
import './css/EmployeeList.css'

const EmployeeList = ({ employees }) => {
  return (
    <>
    
    <hr />
    <div className='employee-list'>
      <h2>Employee List</h2>
      {/* <div style={{color:"black",fontWeight:'600'}} className='employee-list-inner'><p>Name</p>  <p>Salary</p> <p>Department</p></div> */}
      <ul className='column'>
       
          <li >
            <div className='ls-item'><p>Name</p></div>
            <div className='ls-item'><p>Salary</p></div>
            <div className='ls-item'><p>Department</p></div>
            
          </li>
        
      </ul>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <div className='ls-item'><p>{employee.name}</p></div>
            <div className='ls-item'><p>{employee.salary}</p></div>
            <div className='ls-item'><p>{employee.department}</p></div>
            
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default EmployeeList;
