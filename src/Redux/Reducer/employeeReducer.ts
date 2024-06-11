// src/Redux/Reducer/employeeReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../Models/EmployeeDTO/Employee';

interface EmployeeState {
  data: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  data: [],
  loading: false,
  error: null
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    fetchEmployeesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess(state, action: PayloadAction<Employee[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchEmployeesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure
} = employeeSlice.actions;

export default employeeSlice.reducer;
