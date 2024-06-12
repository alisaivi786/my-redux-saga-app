// src/Redux/Saga/employeeSaga.ts
import { call, put, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects';
import {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployeeSuccess,
  addEmployeeFailure,
  addEmployeeRequest

} from '../Reducer/employeeReducer';
import EmployeeService from '../../Services/EmployeeService';
import { AxiosResponse } from 'axios';
import { Employee } from '../../Models/EmployeeDTO/Employee';

// Correctly type the generator function
function* fetchEmployees(): Generator<any, void, AxiosResponse<Employee[]>> {
    try {
      const response: AxiosResponse<Employee[]> = yield call(EmployeeService.getAllEmployees);
      yield put(fetchEmployeesSuccess(response.data));
    } catch (error: any) {
      yield put(fetchEmployeesFailure(error.message));
    }
  }
  

  function* addEmployee(action: any): Generator<any, void, AxiosResponse<Employee>> {
    try {
      const response: AxiosResponse<Employee> = yield call(EmployeeService.createEmployee, action.payload);
      yield put(addEmployeeSuccess(response.data));
    } catch (error: any) {
      yield put(addEmployeeFailure(error.message));
    }
  }

  function* employeeSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(fetchEmployeesRequest.type, fetchEmployees);
    yield takeLatest(addEmployeeRequest.type, addEmployee);
  }
  
  export default employeeSaga;