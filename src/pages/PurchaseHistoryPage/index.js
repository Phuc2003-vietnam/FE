import React from 'react';

import Cart from '~/components/Cart';

const PurchaseHistoryPage = () => {
    return (
        <div className="w-screen h-screen primary-bg-color flex flex-col items-center">
            <Cart
                className="hover:border-b-4 hover:scale-105 hover:shadow-lg"
                readonly
            />
            <Cart
                className="hover:border-b-4 hover:scale-105 hover:shadow-lg"
                readonly
            />
        </div>
    );
};

export default PurchaseHistoryPage;
