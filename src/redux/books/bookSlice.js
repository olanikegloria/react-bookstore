import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import books from '../../components/BookItem';
import axios from 'axios';
const initialstate = {
    books: [],
    isLoading: false
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Pv07lkhuAJvBV0UHCald/books'
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

export const addBooks = createAsyncThunk('books/addBook',
    async (newBook) => {
        try {
            const response = await axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Pv07lkhuAJvBV0UHCald/books", newBook);
            console.log(response);
            return newBook
        } catch (error) {
            console.log(error);
        }
    });

const bookSlice = createSlice({
    name: 'book',
    initialState: initialstate,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.books = state.books.filter((item) => item.id !== itemId);
        },
        // addItem: (state, action) => {
        //     const item = action.payload;
        //     state.books = [...state.books, { ...item, id: state.books.length > 0 ? state.books[state.books.length - 1].id + 1 : 1 }]
        // }
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
            .addCase(addBooks.pending, (state) => {
                state.isLoading = true;
            })
            
            .addCase(addBooks.fulfilled, (state, action) => {
                console.log(state.books);
                let previousArr;
                previousArr = {
                    ...state.books, [action.payload.id]: [
                        {
                            author: action.payload.author,
                            title: action.payload.title,
                            category: action.payload.category
                        }
                    ]
                };

                state.isLoading = false;
                state.books = previousArr;

            })
            .addCase(addBooks.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
            })
    }
});

export const { removeItem, addItem } = bookSlice.actions

export default bookSlice.reducer
