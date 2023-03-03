import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoginPage = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [HiddenPassword, setHiddenPassword] = useState(true);
    const [IsLoading, setIsLoading] = useState(false);

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const toggleHiddenPassword = () => {
        setHiddenPassword((preState) => !preState);
    };

    const handleLogin = async () => {
        setIsLoading(true);
        // TODO: Post Email and Password to BE

        // TODO: handle Login fail

        // TODO: get token (or userID) to userSlice

        // TODO: navigate to HomePage (or another page)
    };

    return (
        <div className="h-screen w-full flex items-center justify-center secondary-bg-color">
            <div className="relative w-1/4 primary-bg-color shadow-2xl">
                <div className="flex flex-col m-10">
                    <div className="flex flex-col mb-10">
                        <label className="text-2xl font-bold">LOGIN</label>
                        <label className="text-gray-700">
                            Welcome to Webdev Sellshoes
                        </label>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">EMAIL</label>
                        <div className="flex flex-row bg-gray-300 rounded-sm">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-envelope-o" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="email"
                                type="email"
                                value={Email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">
                            PASSWORD
                        </label>
                        <div className="flex flex-row bg-gray-300 rounded-sm">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-key" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="password"
                                type={HiddenPassword ? 'password' : 'text'}
                                value={Password}
                                onChange={handleChangePassword}
                            />

                            <button
                                className="bg-transparent h-10 w-10"
                                onClick={toggleHiddenPassword}
                            >
                                <i className="fa fa-eye-slash" />
                            </button>
                        </div>
                    </div>
                    <button
                        className="text-sm h-8 w-full secondary-bg-color primary-color rounded-sm my-1"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                    <div className="mt-1 text-sm w-full flex flex-row items-center justify-center">
                        <Link to={'#'}>
                            <label className="text-red-600 hover:font-bold cursor-pointer">
                                Forgot password
                            </label>
                        </Link>
                        <label className="mx-2 text-base">or</label>
                        <Link to={'/register'}>
                            <label className="text-blue-600 hover:font-bold cursor-pointer">
                                Register now
                            </label>
                        </Link>
                    </div>
                </div>

                {IsLoading && (
                    <div className="absolute w-full h-full top-0 bg-gray-600/50 flex items-center justify-center">
                        <Spin
                            indicator={
                                <LoadingOutlined style={{ fontSize: 50 }} />
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
