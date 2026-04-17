import { createSlice } from "@reduxjs/toolkit";

    const requestSlice = createSlice({
        name: "requests",
        initialState: null,
        reducers: {
            addRequests: (state ,action) => action.payload,
            removeRequest: (state,action) => {
                const newArrat = state.filter((request) => request._id !== action.payload);
                return newArrat;
            }
    }
    });

export const { addRequests , removeRequest} = requestSlice.actions;
export default requestSlice.reducer;