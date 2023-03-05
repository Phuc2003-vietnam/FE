import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 

import { register } from '~/utils/axios/auth';
import userSlice from '~/utils/redux/slices/userSlice';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';

const RegisterPage = () => {
    const [Email, setEmail] = useState(sessionStorage.getItem('email') || '');
    const [Fullname, setFullname] = useState(sessionStorage.getItem('fullname') || '');
    const [Phone, setPhone] = useState(sessionStorage.getItem('phone') || '');
    const [Address, setAddress] = useState(sessionStorage.getItem('address') || '');
    const [Password, setPassword] = useState(sessionStorage.getItem('password') || '');
    const [RePassword, setRePassword] = useState(sessionStorage.getItem('re-password') || '');
    const [HiddenPassword, setHiddenPassword] = useState(true);
    const [HiddenRePassword, setHiddenRePassword] = useState(true);
    const [IsLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('email', value);
        setEmail(value);
    };

    const handleChangeFullname = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('fullname', value);
        setFullname(value);
    };
    const handleChangePhone = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('phone', value);
        setPhone(value);
    };
    const handleChangeAddress = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('address', value);
        setAddress(value);
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('password', value);
        setPassword(value);
    };

    const handleChangeRePassword = (e) => {
        const value = e.target.value;
        sessionStorage.setItem('re-password', value);
        setRePassword(value);
    };

    const toggleHiddenPassword = () => {
        setHiddenPassword((preState) => !preState);
    };

    const toggleHiddenRePassword = () => {
        setHiddenRePassword((preState) => !preState);
    };

    const handleRegister = async () => {
        if (Password !== RePassword) {
            toast.error('RePassword is different from Password');
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Post Email and Password to BE
            const data = await register(Email, Password, Fullname, Phone, Address);

            toast.info('Register success');
            setIsLoading(false);
            // TODO: get token (or userID) to userSlice
            dispatch(userSlice.actions.changeUserData(data))
            // TODO: navigate to HomePage (or another page)
            // const page = params.page || '/';
            navigate(-1, {
                replace: true
            });
        } catch (err) {
            // TODO: handle Login fail
            toast.error('Register error');
            setIsLoading(false);
        }
    };

    return (
        <div className="overflow-auto min-h-screen w-full flex items-center justify-center secondary-bg-color">
            <div className="relative mt-1 w-1/4 primary-bg-color shadow-2xl">
                <div className="flex flex-col mx-10 mb-5 mt-5">
                    <div className="flex flex-col mb-5">
                        <label className="text-2xl font-bold">Register</label>
                        <label className="text-gray-700">
                            Welcome to Webdev Sellshoes
                        </label>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">EMAIL</label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-at" />
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
                        <label className="text-xs font-bold mb-2">FULLNAME</label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-id-card-o" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="fullname"
                                type="text"
                                value={Fullname}
                                onChange={handleChangeFullname}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">PHONE</label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-phone" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="phone"
                                type="tel"
                                value={Phone}
                                onChange={handleChangePhone}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">ADDRESS</label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-building-o" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="address"
                                type="text"
                                value={Address}
                                onChange={handleChangeAddress}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">
                            PASSWORD
                        </label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
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

                    <div className="flex flex-col mb-6">
                        <label className="text-xs font-bold mb-2">
                            RE-PASSWORD
                        </label>
                        <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                            <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                                <i className="fa fa-key" />
                            </div>
                            <input
                                className="bg-transparent flex-1 pl-1 focus:outline-none"
                                name="password"
                                type={HiddenRePassword ? 'password' : 'text'}
                                value={RePassword}
                                onChange={handleChangeRePassword}
                            />

                            <button
                                className="bg-transparent h-10 w-10"
                                onClick={toggleHiddenRePassword}
                            >
                                <i className="fa fa-eye-slash" />
                            </button>
                        </div>
                    </div>

                    <button
                        className="text-sm h-8 w-full secondary-bg-color primary-color rounded-sm my-1"
                        onClick={handleRegister}
                    >
                        SIGN UP
                    </button>
                    <div className="mt-1 text-sm w-full flex flex-row items-center justify-center">
                        <Link to={'/login'}>
                            <label className="text-blue-600 hover:font-bold cursor-pointer">
                                Login now
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

            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default RegisterPage;
