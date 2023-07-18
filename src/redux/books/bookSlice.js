import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import books from '../../components/BookItem';
import axios from 'axios';
const initialstate = {
    books: [],
    isLoading: false
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MA8LDI7XTdsA1MzOxq3n/books'
export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (name, thunkAPI) => {
        try {
            const resp = await axios.get(url);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

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
    },
    extraReducers: (builder) => {
        builder
        .addCase(getBooks.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
        })
        
            .addCase(getBooks.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
        })
    }
});

export const { removeItem, addItem } = bookSlice.actions

export default bookSlice.reducer