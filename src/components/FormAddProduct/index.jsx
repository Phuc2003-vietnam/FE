import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { tokenSelector } from "~/utils/redux/selectors/userSelector";

import { ToastContainer, toast } from "react-toastify";

import { postShoe } from "~/utils/axios/product";

const FormAddProduct = () => {
    const [ProductName, setProductName] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState(0);  
    const [Image, setImage] = useState(null);
    const thumbnailRef = useRef();

    const token = useSelector(tokenSelector);

    const handleChangeProductName = e => {
        const value = e.target.value;
        setProductName(value);
    }
    const handleChangeDescription = e => {
        const value = e.target.value;
        setDescription(value);
    }
    const handleChangePrice = e => {
        const value = e.target.value;
        setPrice(value);
    }

    const handleChangeThumbnail = e => {
        if (Image) {
            URL.revokeObjectURL(Image);
            setImage(null);
        }

        if (!e.target.files || e.target.files.length === 0 ) {
            return;
        }

        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);

        setImage(objectUrl);
    }

    const handleSubmit = async () => {
        const image = thumbnailRef.current.files[0];

        if (ProductName === '') {
            toast.error('Product name is required');
            return;
        }
        if (Price <= 0 || Price === '') {
            toast.error('Price must be "> 0"');
            return;
        }
        if (Description === '') {
            toast.error('Description is required');
            return;
        }

        if (!image) {
            toast.error('Thumbnail is required');
            return;
        }
        try {
            await postShoe(token.accessToken, ProductName, Price, thumbnailRef.current.files[0], Description);
            toast.info('Submit new shoe success');
            setProductName('');
            setPrice(0);
            setDescription('');
            URL.revokeObjectURL(Image);
            setImage(null)
        } catch (err) {
            toast.error('Submit new shoe fail');
        }

    }

    return ( 
        <div className="overflow-auto w-1/2 flex flex-col m-3 px-20 py-10 border shadow">
            <div className="flex flex-col mb-10">
                <label className="text-2xl font-bold">
                    NEW SHOES
                </label>
                <label className="text-gray-700">
                    Information of new shoes
                </label>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-xs font-bold mb-2">PRODUCT NAME</label>
                <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                    <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                        <i className="fa fa-at" />
                    </div>
                    <input
                        className="bg-transparent flex-1 pl-1 focus:outline-none"
                        name="product name"
                        type="text"
                        value={ProductName}
                        onChange={handleChangeProductName}
                    />
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-xs font-bold mb-2">PRICE</label>
                <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                    <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                        <i className="fa fa-at" />
                    </div>
                    <input
                        className="bg-transparent flex-1 pl-1 focus:outline-none"
                        name="price"
                        type="number"
                        value={Price}
                        onChange={handleChangePrice}
                    />
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-xs font-bold mb-2">DESCRIPTION</label>
                <div className="flex flex-row h-auto bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                    <div className="flex items-center justify-center secondary-bg-color flex-grow-0 w-10 rounded-l-sm">
                        <i className="fa fa-at" />
                    </div>
                    <textarea
                        className="bg-transparent flex-1 pl-1 focus:outline-none"
                        name="description"
                        value={Description}
                        onChange={handleChangeDescription}
                    />
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-xs font-bold mb-2">THUMBNAIL</label>
            {
                Image && <img className="w-1/4 mb-1" src={Image}/>
            }
                <div className="flex flex-row bg-gray-300 rounded-sm border border-transparent hover:border-[#1db9ce]">
                    <div className="flex items-center justify-center secondary-bg-color w-10 h-10 rounded-l-sm">
                        <i className="fa fa-at" />
                    </div>
                    <input
                        className="bg-transparent flex-1 pl-1 focus:outline-none"
                        ref={thumbnailRef}
                        name="thumbnail"
                        type="file"
                        onChange={handleChangeThumbnail}
                    />
                </div>
            </div>

            <button
                className="text-sm h-8 w-full secondary-bg-color primary-color rounded-sm my-1"
                onClick={handleSubmit}
            >
                SUBMIT
            </button>

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
}
 
export default FormAddProduct;