import React from 'react';

import { Input } from 'antd';

const LoginPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center secondary-bg-color">
            <div className="w-1/4 primary-bg-color">
                <div className="flex flex-col m-10">
                    <div className="flex flex-col mb-10">
                        <label className="text-2xl font-bold">LOGIN</label>
                        <label className="text-gray-700">
                            Welcome to Webdev Sellshoes
                        </label>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="text-xs">EMAIL</label>
                        <div className="flex flex-row bg-gray-300">
                            <div className="flex items-center justify-center secondary-bg-color w-8 h-8">
                                <i className="fa fa-envelope-o" />
                            </div>
                            <input className="bg-transparent flex-1 pl-1 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs">PASSWORD</label>
                        <div className="flex flex-row bg-gray-300">
                            <div className="flex items-center justify-center secondary-bg-color w-8 h-8">
                                <i className="fa fa-key" />
                            </div>
                            <input className="bg-transparent flex-1 pl-1 focus:outline-none" />

                            <button className="bg-transparent h-8 w-8">
                                <i className="fa fa-eye-slash" />
                            </button>
                        </div>
                    </div>
                    <button>Login</button>
                    <div>
                        <label>Forgot password</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
