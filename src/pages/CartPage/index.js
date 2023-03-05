import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { formatCurrency } from '~/utils/formats';

import {
    cartProducts,
    stateCartPage,
} from '~/utils/redux/selectors/cartSelector';
import { tokenSelector } from '~/utils/redux/selectors/userSelector'; 
import { fetchCarts } from '~/utils/redux/slices/cartSlice';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Cart from '~/components/Cart';

const CartPage = () => {
    const dispatch = useDispatch();

    const products = useSelector(cartProducts);
    const state = useSelector(stateCartPage);
    const token = useSelector(tokenSelector);

    const handleChangeCheckbox = (cartID) => {
        const cart = products.find(value => value.cartId)

    };

    const handleClickInc = (cartID) => {};

    const handleClickDec = (cartID) => {};

    const handleChangeNumber = (cartID) => {};

    const handleClickRemove = (cartID) => {};

    const handleClickPayment = () => {};

    useEffect(() => {
        dispatch(fetchCarts(token.accessToken));
    }, []);

    const sumPrice = useMemo(
        () =>
            products.reduce((total, value) => {
                if (value.isCheck) {
                    return total + value.price * value.count;
                }

                return total;
            }, 0),
        [products],
    );

    if (state.isLoading)
        return (
            <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
                <Spin
                    indicator={<LoadingOutlined style={{ fontSize: 100 }} />}
                    spin
                />
            </div>
        );
    else
        return (
            <div className="w-full overflow-auto">
                <div className="w-full flex flex-roww justify-evenly items-start flex-wrap">
                    {products.map((value) => (
                        <Cart
                            key={value.cartId}
                            name={value.productName}
                            count={value.count}
                            price={value.price}
                            thumnailURL={value.thumnail}
                            isCheck={value.isCheck}
                            onChangeCheckbox={() => {
                                handleChangeCheckbox(value.cartID);
                            }}
                            onClickInc={() => {
                                handleClickInc(value.cartID);
                            }}
                            onClickDec={() => {
                                handleClickDec(value.cartID);
                            }}
                            onChangeNumber={() => {
                                handleChangeNumber(value.cartID);
                            }}
                            onClickRemove={() => {
                                handleClickRemove(
                                    handleClickRemove(value.cartID),
                                );
                            }}
                        />
                    ))}
                </div>

                <div className="h-16 w-1"></div>

                <div className="fixed left-1/2 -translate-x-1/2 bottom-4 h-16 w-1/3 mx-auto bg-[#FFE196] rounded-lg shadow-xl flex flex-row items-center justify-between">
                    <div className="m-2 h-full flex flex-col">
                        <label className="mt-1 font-bold">Tổng số tiền: </label>
                        <div className="text-2xl ml-10">
                            {formatCurrency.format(sumPrice)}
                        </div>
                    </div>
                    <button
                        className="m-2 primary-color fifth-bg-color p-3 border-black border hover:p-4"
                        onClick={handleClickPayment}
                    >
                        Thanh toán
                    </button>
                </div>
            </div>
        );
};

export default CartPage;
