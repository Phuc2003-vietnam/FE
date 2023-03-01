import React from 'react';

const Cart = () => {
    return (
        <div className="container flex flex-row justify-between items-center">
            <div className="flex-auto">Thumnail</div>

            <div className="flex-1 flex flex-col">
                <div>Name</div>
                <div>Price</div>
            </div>

            <div className="flex-1 flex flex-col">
                <div>checkbox</div>

                <div>count</div>

                <div>remove</div>
            </div>
        </div>
    );
};

export default Cart;
