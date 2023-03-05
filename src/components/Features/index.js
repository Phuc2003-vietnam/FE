import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
const Feature = (props) => {
    const { heading, feature1, feature2, feature3, feature4 } = props;
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className="w-full text-start mb-8 px-4">
            <div
                className="mb-2 flex items-center cursor-pointer"
                onClick={handleToggle}
            >
                <h3 className="text-3xl font-bold text-black">{heading}</h3>
                {toggle ? (
                    <AiOutlineArrowDown className="text-lg text-black" />
                ) : (
                    <AiOutlineArrowUp className="text-lg text-black" />
                )}
            </div>
            {!toggle ? (
                <ul className="h-[0px] overflow-hidden text-black">
                    <li>{feature1}</li>
                    <li>{feature2}</li>
                    <li>{feature3}</li>
                    <li>{feature4}</li>
                </ul>
            ) : (
                <ul className="">
                    <li className="font-bold  rounded-md hover:text-[#293956] cursor-pointer text-md py-2 hover:bg-[var(--bg-feature)] text-[var(--color-feature)]">
                        {feature1}
                    </li>
                    <li className="font-bold  rounded-md hover:text-[#293956] cursor-pointer text-md py-2 hover:bg-[var(--bg-feature)] text-[var(--color-feature)]">
                        {feature2}
                    </li>
                    <li className="font-bold  rounded-md hover:text-[#293956] cursor-pointer text-md py-2 hover:bg-[var(--bg-feature)] text-[var(--color-feature)]">
                        {feature3}
                    </li>
                    <li className="font-bold  rounded-md hover:text-[#293956] cursor-pointer text-md py-2 hover:bg-[var(--bg-feature)] text-[var(--color-feature)]">
                        {feature4}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Feature;
