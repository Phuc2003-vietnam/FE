import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '~/utils/redux/ProductDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddCart = () => {
        const data = {
            img: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_1.jpeg',
            name: 'VINTAS JAZICO - HIGH TOP - ROYAL WHITE',
            productCode: 'AV00174',
            state: 'New Arrival',
            price: '780.000',
            size,
            quantity,
        };
        const addCartAction = addCart(data);
        dispatch(addCartAction);
        toast.success('Bạn đã thêm sản phẩm vào giỏ hàng thành công', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const handleSetSize = (e) => {
        setSize(e.target.value);
    };

    const handleSetQuantity = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="bg-[#fafafa]">
            <div>
                <ToastContainer />
            </div>
            <div className="px-[50px] h-[640px] flex items-center justify-center">
                <div className="w-[640px] h-full">
                    <img
                        className="w-full h-full"
                        src="https://ananas.vn/wp-content/uploads/Pro_AV00174_1.jpeg"
                        alt="giay"
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col p-16">
                    <h2 className="text-4xl font-bold mb-12">
                        VINTAS JAZICO - HIGH TOP - ROYAL WHITE
                    </h2>
                    <div className="flex justify-between mb-12">
                        <span>
                            Mã sản phẩm: <strong>AV00174</strong>
                        </span>
                        <span>
                            Tình trạng: <strong>New Arrival</strong>
                        </span>
                    </div>
                    <p className="text-[#5F7AB7] font-bold text-lg mb-12">
                        780.000 VND
                    </p>
                    <div className="flex">
                        <div className="flex flex-col mr-8">
                            <span className="text-lg font-bold">SIZE</span>
                            <input
                                onChange={handleSetSize}
                                type="text"
                                value={size}
                                id="default-input"
                                className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
                                maxLength={2}
                                placeholder="Enter your size..."
                            ></input>
                        </div>
                        <div>
                            <span className="text-lg font-bold">SỐ LƯỢNG</span>
                            <input
                                onChange={handleSetQuantity}
                                type="text"
                                value={quantity}
                                id="default-input"
                                className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
                                maxLength={3}
                                placeholder="Enter your quantity..."
                            ></input>
                        </div>
                    </div>
                    <button
                        onClick={handleAddCart}
                        type="button"
                        className="mt-12 w-full focus:outline-none text-white bg-yellow-40font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 bg-[#f91a46]"
                    >
                        Thêm vào giỏ hàng
                    </button>
                    <button
                        type="button"
                        className="mt-9 w-full focus:outline-none text-white bg-yellow-40font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 bg-[#1B47A5]"
                    >
                        Thanh toán
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
