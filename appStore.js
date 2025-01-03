import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer:{ // This is the main reducer which contains small reducers of diff slices of the app..
        cart : cartReducer,
    },
});

export default appStore;