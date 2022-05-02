import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../features/users";


export default configureStore({
    reducer: {
        users: usersReducers,
    },
});