import { createSelector } from "@reduxjs/toolkit";

export const allStateCart = state => state.cart;
export const cartProducts = state => state.cart.products;
export const stateCartPage = createSelector(allStateCart, cart => ({
    isLoading: cart.isLoading,
    isError: cart.isError
}));