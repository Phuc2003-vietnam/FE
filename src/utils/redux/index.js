import { configureStore } from '@reduxjs/toolkit';
import logger from './logger';

import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: logger(cartSlice.reducer),
    },
});

export default store;
