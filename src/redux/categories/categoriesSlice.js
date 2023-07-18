import { createSlice } from '@reduxjs/toolkit';
// import books from '../../components/BookItem';

const initialstate = {
    category: [],
    status: false
};

const categoriesSlice = createSlice({
    name: 'category',
    initialState: initialstate,
    reducers: {
        status: (state) => {
            if (!state.status) {
                return 'underconstruction'
            }
            return null
        },
    }
});

export const {status } = categoriesSlice.actions

export default categoriesSlice.reducer