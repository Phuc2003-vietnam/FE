import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cartProducts } from '~/utils/redux/selectors/cartSelector';
import { fetchAllCarts } from '~/utils/redux/slices/cartSlice';

import Cart from '~/components/Cart';

const CartPage = () => {
    const dispatch = useDispatch();

    const products = useSelector(cartProducts);

    console.log('products: ', products);

    useEffect(() => {
        dispatch(fetchAllCarts());
    }, []);

    return (
        <div className="container flex flex-roww justify-start items-start flex-wrap">
            {products.map((value) => (
                <Cart
                    key={value.productID}
                    name={value.productName}
                    count={value.count}
                    price={value.price}
                    thumnailURL={value.thumnail}
                    isCheck={value.isCheck}
                />
            ))}
        </div>
    );
};

export default CartPage;
