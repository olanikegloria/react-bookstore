import {configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/bookSlice';
import categoriesReducer from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        book: bookReducer,
        category: categoriesReducer,
    }
});