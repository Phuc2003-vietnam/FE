import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
import HomePage from '~/pages/HomePage';
import CartPage from '~/pages/CartPage';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import ProductDetail from '~/pages/ProductDetail';
import SearchResult from '~/pages/SearchResult';
import PurchaseHistoryPage from '~/pages/PurchaseHistoryPage';
export const publicRoute = [
    { path: '/login', page: LoginPage, layout: null },
    { path: '/register', page: RegisterPage, layout: null },
    { path: '/', page: HomePage, layout: DefaultLayout },
    { path: '/product', page: ProductDetail, layout: DefaultLayout },
    { path: 'search-result', page: SearchResult, layout: DefaultLayout },
];

export const privateRoute = [
    { path: '/cart', page: CartPage, layout: DefaultLayout },
    { path: '/purchase-history', page: PurchaseHistoryPage, layout: DefaultLayout },
];
