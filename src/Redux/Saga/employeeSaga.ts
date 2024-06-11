// src/Redux/Saga/employeeSaga.ts
import { call, put, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects';
import {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure
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
  
  function* employeeSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(fetchEmployeesRequest.type, fetchEmployees);
  }
  
  export default employeeSaga;