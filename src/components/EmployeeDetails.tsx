// src/App.tsx
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/Redux-Store/store';
import { fetchEmployeesRequest } from '../Redux/Reducer/employeeReducer';
import { Employee } from '../Models/EmployeeDTO/Employee';

const EmployeeDetails= () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
  }, [dispatch]);

  const handleFetchLatest = () => {
    dispatch(fetchEmployeesRequest());
  };

  return (
    <div>
      <h1>Employees</h1>
      <button onClick={handleFetchLatest}>Get Latest Records</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((employee: Employee) => (
          <li key={employee.id}>{employee.name} - {employee.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;
