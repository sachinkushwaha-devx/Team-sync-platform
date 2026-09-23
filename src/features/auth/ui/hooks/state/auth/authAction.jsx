import { createAsyncThunk } from "@reduxjs/toolkit";

let loginEmployee = createAsyncThunk('auth/login',
    async (credentials, thunkApi)=>{
        try {
            let res = await axiosInstance.post('/auth/login', credentials);
            return res.data;
        }catch(error){
            return thunkApi.rejectWithValue(error);
        }
        

})