import { createSlice } from '@reduxjs/toolkit';
// import books from '../../components/BookItem';

const initialstate = {
    books: []
};

const bookSlice = createSlice({
    name: 'book',
    initialState: initialstate,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.books = state.books.filter((item) => item.id !== itemId);
        },
        addItem: (state, action) => {
            const item = action.payload;
            state.books = [...state.books, { ...item, id: state.books.length > 0 ? state.books[state.books.length - 1].id + 1 : 1 }]
        }
    }
});

export const { removeItem, addItem } = bookSlice.actions

export default bookSlice.reducer