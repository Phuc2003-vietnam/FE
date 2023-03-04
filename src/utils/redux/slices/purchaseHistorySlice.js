import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const purchaseHistorySlice = createSlice({
    name: 'purchase-history',
    initialState: {
        orders: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {},
});

export default purchaseHistorySlice;

export const getOrders = createAsyncThunk(
    'purchase-history/getOrders',
    async (userID) => {},
);
