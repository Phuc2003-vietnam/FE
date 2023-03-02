import React from 'react';

import Cart from '../../components/Cart';

const CartPage = () => {
    return (
        <div className="container flex flex-roww justify-start items-start flex-wrap">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart thumnailURL="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/lol-t1-1.jpg" />
        </div>
    );
};

export default CartPage;
