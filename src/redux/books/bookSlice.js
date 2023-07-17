import { createSlice } from '@reduxjs/toolkit';
import books from '../../components/BookItem';

const initialstate = {
    books: books
};

const bookSlice = createSlice({
    name: 'book',
    initialState: initialstate,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.books = state.books.filter((item) => item.id !== itemId);
        }
    }
});

export const {removeItem} = bookSlice.actions

export default bookSlice.reducer