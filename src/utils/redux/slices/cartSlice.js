import { createSlice } from '@reduxjs/toolkit';
import { buildQueries } from '@testing-library/react';

/**
 * @type {{
 *      id: string,
 *      name: string,
 *      count: number
 * }[]}
 */
const initProducts = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: initProducts,
    },
    reducers: {
        // removeItem: (state, action) => {
        //     const productID = action.payload;
        //     const products = state.products.filter(product => product.id !== productID);
        //     return products;
        // },
        // changeCountItem: (state, action) => {
        //     const productID = action.payload.productID;
        //     const count = action.payload.count;
        // }
    },
    extraReducers: (builder) => {},
});
