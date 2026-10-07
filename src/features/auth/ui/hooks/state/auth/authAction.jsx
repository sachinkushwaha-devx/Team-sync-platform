import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../../../config/Axiosinstance";

export const loginEmployee = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post('/auth/login', credentials);
      return res.data?.data ?? res.data;
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message, error.code);
      return thunkApi.rejectWithValue(
        error.response?.data || {
          message: error.message,
          code: error.code,
        }
      );
    }
  }
);

export const registerEmployee = createAsyncThunk(
  'auth/register',
  async (employeeData, thunkApi) => {
    try {
      const res = await axiosInstance.post('/auth/register', employeeData);
      return res.data?.data ?? res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data || {
          message: error.message,
          code: error.code,
        }
      );
    }
  }
);

export const currentLoggedEmployee = createAsyncThunk(
  'auth/me',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get('/auth/me');
      console.log(res)
      return res.data?.data ?? res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data || {
          message: error.message,
          code: error.code,
        }
      );
    }
  }
);
