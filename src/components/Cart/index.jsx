import React from 'react';
import propTypes from 'prop-types';
import './cart.css';
import classNames from 'classnames';

import { formatCurrency } from '~/utils/formats';

import { Checkbox } from 'antd';
import Count from '../Count';

const fakeUrlImage =
    'https://media.discordapp.net/attachments/897851164245246043/1080386555144835152/manameunity_Information_technology_Infrastructure_icon_simple_c_329d08af-3822-4233-bcd6-65abebbd69e4.png?width=606&height=606';

const Cart = ({
    name = 'Unknown',
    price = 0,
    thumnailURL = fakeUrlImage,
    count = 0,
    isCheck = false,
    onChangeCheckbox,
    onClickInc,
    onClickDec,
    onChangeNumber,
    onClickRemove,
    readonly,
    className,
}) => {
    return (
        <div
            className={classNames('flex flex-row p-2 cart-width', className, {
                'rounded-lg tertiary-bg-color shadow-lg  m-2': !readonly,
                'border-b-2 border-gray-500': readonly,
            })}
        >
            <div className="mr-4">
                <img className="thumnail" src={thumnailURL} />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div className="text-2xl flex-initial font-bold overflow-auto">
                    {name}
                </div>
                <div className="flex-initial font-mono">
                    {formatCurrency.format(price)}/sản phẩm
                </div>
            </div>

            {!readonly ? (
                <div className="flex flex-col justify-between items-end cart-height">
                    <div className="container flex justify-end">
                        <Checkbox
                            checked={isCheck}
                            onChange={(e) => {
                                onChangeCheckbox(e.target.value);
                            }}
                        />
                    </div>

                    <Count
                        number={count}
                        onChangeNumber={onChangeNumber}
                        onClickDec={onClickDec}
                        onClickInc={onClickInc}
                    />

                    <div>
                        <button
                            className="flex items-center cancel-bg-color p-1 rounded primary-color"
                            onClick={onClickRemove}
                        >
                            <i className="fa fa-close m-1"></i>
                            <label className="text-xs cursor-pointer">
                                Remove
                            </label>
                        </button>
                    </div>
                </div>
            ) : (
                <Count
                    number={count}
                    onChangeNumber={onChangeNumber}
                    onClickDec={onClickDec}
                    onClickInc={onClickInc}
                    readonly
                />
            )}
        </div>
    );
};

Cart.propTypes = {
    name: propTypes.string,
    price: propTypes.oneOfType([propTypes.number, propTypes.string]),
    thumnailURL: propTypes.string,
    count: propTypes.number,
    isCheck: propTypes.bool,
    onChangeCheckbox: propTypes.func,
    onClickInc: propTypes.func,
    onClickDec: propTypes.func,
    onChangeNumber: propTypes.func,
    onClickRemove: propTypes.func,
    readonly: propTypes.bool,
    className: propTypes.string,
};

export default Cart;
