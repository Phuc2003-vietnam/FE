import React from 'react';
import { Link } from 'react-router-dom';
import './thumbitem.scss';
const ThumbItem = (props) => {
    return (
            <div className="w-full h-full text-center cursor-pointer" id="poster">
            <div className="relative h-2/3">
                <img
                    src = {props.element.image === '' ? 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg' : props.element.image}
                    alt="giay"
                    className='w-full h-full object-cover'
                />
                <div className="btn absolute bottom-0 left-0 w-full invisible  opacity-0">
                    <Link to={`/product/${props.element.id}`}>
                        <button
                            type="button"
                            className="mb-4 w-1/2 focus:outline-none text-white bg-yellow-40font-medium rounded-lg text-sm px-5 py-5 bg-[#1B47A5]"
                        >
                            Thanh toán
                        </button>
                    </Link>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-xl font-bold mb-4'>{props.element.name}</p>
                <span>{props.element.price}</span>
            </div>
        </div>
        
    );
};

export default ThumbItem;
