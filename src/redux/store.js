import {configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/bookSlice';

export const store = configureStore({
    reducer: {
        book: bookReducer,
    }
});