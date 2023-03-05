import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartService } from '../../axios';

/**
 * @type {{
 *      cartID: string,
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
            .addCase(fetchCarts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCarts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchCarts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default cartSlice;

export const fetchCarts = createAsyncThunk('cart/getCarts', async (accessToken) => {
    const data = await cartService.getCarts(accessToken);

    return data;
});

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async (cartID) => {},
);
