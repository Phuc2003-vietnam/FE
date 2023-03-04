import React from 'react';
import { Link } from 'react-router-dom';
import './thumbitem.scss';
const ThumbItem = () => {
    return (
        <div className="w-full h-full text-center cursor-pointer" id="poster">
            <div className="relative">
                <img
                    src="https://ananas.vn/wp-content/uploads/Pro_AV00174_2-500x500.jpeg"
                    alt="giay"
                />
                <div className="btn absolute bottom-0 left-0 w-full invisible  opacity-0">
                    <Link to="/product">
                        <button
                            type="button"
                            className="mb-4 w-1/2 focus:outline-none text-white bg-yellow-40font-medium rounded-lg text-sm px-5 py-5 bg-[#1B47A5]"
                        >
                            Thanh toán
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <p href="facebook.com">Vintas Jazico - High Top</p>
                <p className="py-2">Royal White</p>
                <span>780.000 VND</span>
            </div>
        </div>
    );
};

export default ThumbItem;
