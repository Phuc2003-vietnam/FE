import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SearchInput from './Header';
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <Link to="/">
                    <div className="text-3xl cursor-pointer">
                        <AiFillHome />
                    </div>
                </Link>
                <div className="mx-4">
                    <SearchInput />
                </div>
                <Link to="/cart">
                    <div className="text-3xl cursor-pointer">
                        <BsFillCartFill />
                    </div>
                </Link>
            </div>
            <div className="w-[1400px] m-[auto]">{children}</div>
        </div>
    );
};

export default DefaultLayout;
