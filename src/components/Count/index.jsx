import React from 'react';

const Count = ({ number = 0, onClickInc, onClickDec, onChangeNumber }) => {
    const handleChangeNumber = (e) => {
        let value = Number(e.target.value);

        if (Number.isNaN(value)) {
            value = 0;
        }

        onChangeNumber(value);
    };

    return (
        <div className='flex items-center'>
            <button
                className="text-center h-10 w-7 border-2 cancel-border-color rounded-l-md primary-bg-color cancel-color hover:bg-zinc-400 hover:border-zinc-400 hover:text-white"
                onClick={onClickDec}
            >
                <i className="fa fa-minus"></i>
            </button>
            <input
                className="text-center text-lg m-0 h-10 w-16 border border-black"
                type={'text'}
                value={number}
                onChange={handleChangeNumber}
            />
            <button
                className="text-center h-10 w-7 border fifth-border-color rounded-r-md fifth-bg-color primary-color hover:bg-zinc-400 hover:border-zinc-400"
                onClick={onClickInc}
            >
                <i className="fa fa-plus"></i>
            </button>
        </div>
    );
};

export default Count;
