import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../features/users";
import filtersReducers from "../features/FilterProduct";


export default configureStore({
    reducer: {
        users: usersReducers,
        filters: filtersReducers,
    },
});