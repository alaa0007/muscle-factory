import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    name: "users",
    initialState: {
        user: null,
        login: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogin: (state, action) => {
            state.login = action.payload;
        },
    },
});


export const { setUser,setLogin } = users.actions;
export default users.reducer;