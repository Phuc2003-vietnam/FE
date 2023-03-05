import { createSlice } from '@reduxjs/toolkit';

const SearchProduct = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        searchProduct(state, action) {
            const newState = []
            newState.push(action.payload)
            return newState
        },
    },
});
const { actions, reducer } = SearchProduct;

export const { searchProduct } = actions;
export default reducer;
