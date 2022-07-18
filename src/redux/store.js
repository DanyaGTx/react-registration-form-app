import { configureStore } from "@reduxjs/toolkit";
import usersDataReducer from './userDataSlice';

export const store = configureStore({
    reducer: {
        users: usersDataReducer,
       
    }
})
