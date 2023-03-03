import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartService } from '../../axios';

/**
 * @type {{
 *      productID: string,
 *      productName: string,
 *      count: number,
 *      isCheck: boolean,
 *      thumnail: string
 * }[]}
 */
const initProducts = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: initProducts,
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCarts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllCarts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchAllCarts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default cartSlice;

export const fetchAllCarts = createAsyncThunk('cart/getAllCarts', async () => {
    const data = await cartService.getAllCarts();

    console.log('Data: ', data);

    return data;
});
