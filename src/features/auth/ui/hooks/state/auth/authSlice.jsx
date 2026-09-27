import { createSlice } from '@reduxjs/toolkit';
import { currentLoggedEmployee, loginEmployee } from './authAction';

const getStoredEmployee = () => {
  try {
    const savedEmployee = localStorage.getItem('employee');
    return savedEmployee ? JSON.parse(savedEmployee) : null;
  } catch (error) {
    console.error('Error reading employee from storage:', error);
    return null;
  }
};

const saveEmployee = (employee) => {
  if (employee) {
    localStorage.setItem('employee', JSON.stringify(employee));
  } else {
    localStorage.removeItem('employee');
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    employee: getStoredEmployee(),
    isLoading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
      state.error = null;
      saveEmployee(action.payload);
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
      state.error = null;
      saveEmployee(null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const employee = action.payload?.employee ?? action.payload?.data?.employee ?? action.payload?.data ?? action.payload;
        state.employee = employee;
        state.error = null;
        saveEmployee(employee);
      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || action.error?.message || 'Login failed';
      })
      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const employee = action.payload?.employee ?? action.payload?.data?.employee ?? action.payload?.data ?? action.payload;
        state.employee = employee;
        saveEmployee(employee);
      })
      .addCase(currentLoggedEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || action.error?.message || 'Session check failed';
        state.employee = null;
        saveEmployee(null);
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;

