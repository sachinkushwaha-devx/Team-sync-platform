import { createSlice } from "@reduxjs/toolkit";

export let ThemeSlice = createSlice({
    name: "theme",
    initialState: {

        mode: localStorage.getItem("theme")|| 'dark'
    },
    reducers:{
        toggleTheme: (state)=>{
            state.mode = state.mode === 'dark'? 'light' : 'dark';
            localStorage.setItem("theme", state.mode)
        },
    },
});
export let {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
    