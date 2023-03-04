import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';

import CartPage from '~/pages/CartPage';
import PurchaseHistoryPage from '~/pages/PurchaseHistoryPage';

export const publicRoute = [
    { path: '/login', page: LoginPage, layout: null },
    { path: '/register', page: RegisterPage, layout: null },
];

export const privateRoute = [
    { path: '/cart', page: CartPage, layout: null },
    { path: '/purchase-history', page: PurchaseHistoryPage, layout: null },
];
