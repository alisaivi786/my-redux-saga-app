// src/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employees: employeeReducer
});

export default rootReducer;
