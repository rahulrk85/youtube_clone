import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        hamStatus : true,
    },
    reducers : {
        hamToggle : (state)=>{
            state.hamStatus=!state.hamStatus;
        },
        closeSideBar : (state)=>{
            state.hamStatus=false;
        },
    },
});

export const {hamToggle,closeSideBar} = userSlice.actions;

export default userSlice.reducer;