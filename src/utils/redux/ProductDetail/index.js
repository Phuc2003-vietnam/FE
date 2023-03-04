import { createSlice } from '@reduxjs/toolkit';

const Cart = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addCart(state, action) {
            state.push(action.payload);
        },
    },
});
const { actions, reducer } = Cart;

export const { addCart } = actions;
export default reducer;
