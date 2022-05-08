import { createSlice } from "@reduxjs/toolkit";

export const Filters = createSlice({
    name: "filters",
    initialState: {
        filters: [],
    },
    reducers: {
        setFilter: (state, action) => {
            state.filters = action.payload;
        },
    },
});


export const { setFilter } = Filters.actions;
export default Filters.reducer;