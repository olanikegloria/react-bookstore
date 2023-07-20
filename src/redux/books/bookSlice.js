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
            console.log(response)
            return newBook
        } catch (error) {
            console.log(error);
        }
    });

export const deleteBook = createAsyncThunk('books/deleteBook', async (book, { getState }) => {
    const deleteurl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Pv07lkhuAJvBV0UHCald/books/${book.id}`;
    try {
        const response = await axios.delete(deleteurl, {
            item_id: book.id,
        });

        return { book, response: response.data, state: getState().books }
    } catch (error) {
        throw new Error('Failed to delete book');
    }
});


const bookSlice = createSlice({
    name: 'book',
    initialState: initialstate,
    reducers: {
        
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
            .addCase(deleteBook.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(deleteBook.fulfilled, (state) => {
                // state.books = state.books.filter((item) => item.book !== id);
                state.isLoading = false;
            })

            .addCase(deleteBook.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
            })
    }
});

export const { removeItem, addItem } = bookSlice.actions

export default bookSlice.reducer
