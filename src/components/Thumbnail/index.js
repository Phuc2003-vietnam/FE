import React from 'react';
import ThumbItem from './Thumbitem';
const Thumbnail = () => {
    return (
        <div className="w-full  flex flex-col h-full">
            <div className="flex justify-center h-1/2">
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4">
                    <ThumbItem />
                </div>
            </div>
            <div className="flex justify-center h-1/2 my-6">
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4">
                    <ThumbItem />
                </div>
            </div>
            <div className="flex justify-center h-1/2 my-6">
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2">
                    <ThumbItem />
                </div>
                <div className="w-1/4">
                    <ThumbItem />
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;
