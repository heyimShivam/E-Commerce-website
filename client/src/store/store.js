import {configureStore} from "@reduxjs/toolkit";
import UserDetailsReducer from "./userDetailsSlice";

export const store = configureStore({
    reducer: {
        user: UserDetailsReducer
    },

})