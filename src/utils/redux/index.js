import { configureStore } from '@reduxjs/toolkit';
import logger from './logger';

import cartSlice from './slices/cartSlice';
import purchaseHistorySlice from './slices/purchaseHistorySlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        purchaseHistory: purchaseHistorySlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
