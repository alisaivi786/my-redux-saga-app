// src/components/AddEmployee.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployeeRequest, addEmployeeSuccess } from '../Redux/Reducer/employeeReducer';
import { Employee } from '../Models/EmployeeDTO/Employee';

const AddEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action to add employee
    const newEmployee : Employee = {id : 0, name:name, position: position};
    dispatch(addEmployeeSuccess(newEmployee));
    // Reset form fields after submission
    setName('');
    setPosition('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
    
  );
};

export default AddEmployee;
