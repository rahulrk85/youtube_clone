import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
    reducer : {
        user : userSlice,
        videos : videoSlice,
    },
});

export default appStore;