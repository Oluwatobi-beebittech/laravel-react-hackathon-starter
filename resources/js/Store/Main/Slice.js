import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./InitialState";

const MainSlice = createSlice({
    name: 'MainSlice',
    initialState,
    reducers: {
        setState(state, action) {
            return { ...state, ...action.payload };
        },
    }
});

const {
    setState: _setState,
} = MainSlice.actions;


export const { reducer: MainReducer } = MainSlice;