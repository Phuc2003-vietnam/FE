import { createSelector } from '@reduxjs/toolkit';

export const allStatePurchaseHistory = (state) => state.purchaseHistory;
export const orders = (state) => state.purchaseHistory.orders;
export const statePurchaseHistoryPage = createSelector(
    allStatePurchaseHistory,
    (state) => ({
        isLoading: state.isLoading,
        isError: state.isError,
    }),
);
