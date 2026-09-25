import { createSlice } from '@reduxjs/toolkit';
import { loginEmployee } from './authAction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    employee: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
      state.error = null;
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
        state.employee = action.payload?.employee ?? action.payload?.data ?? action.payload;
        state.error = null;
      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || action.error?.message || 'Login failed';
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;

