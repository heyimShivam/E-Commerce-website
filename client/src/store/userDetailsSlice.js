import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

export const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {setUserDetails} = UserDetailsSlice.actions;

export default UserDetailsSlice.reducer;