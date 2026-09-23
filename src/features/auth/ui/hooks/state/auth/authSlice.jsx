import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload
      state.isLoading = false
    },
    removeEmployee: (state) => {
      state.employee = null
    },
  },
})

export const { addEmployee, removeEmployee } = authSlice.actions
export default authSlice.reducer

