import React from 'react';
import ThumbItem from '~/components/Thumbnail/Thumbitem';

const SearchResult = () => {
    return (
        <div className="">
            <div className="flex justify-center mt-8">
                <h2 className="text-3xl font-bold">
                    Tìm thấy được 13 sản phẩm cho kết quả: "Track 6"{' '}
                </h2>
            </div>
            <div className="border-solid border-b border-black w-screen mt-12"></div>
            <div className="flex justify-center flex-wrap">
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
                <div className="w-1/4 mr-2 mt-12">
                    <ThumbItem />
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
