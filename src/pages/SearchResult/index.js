import React from 'react';
import { useSelector } from 'react-redux';
import ThumbItem from '~/components/Thumbnail/Thumbitem';

const SearchResult = () => {
    const searchData = useSelector(state => state.search.flat())
    console.log(searchData)
    return (
        <div className="">
            <div className="flex justify-center mt-8">
                <h2 className="text-3xl font-bold">
                    Tìm thấy được {searchData.length} sản phẩm.
                </h2>
            </div>
            <div className="border-solid border-b border-black w-screen mt-12"></div>
            <div className="flex justify-center flex-wrap">
                {searchData.map(element => 
                <div className="w-1/4 mr-2 mt-12" key = {element.id}>
                    <ThumbItem  element = {element}/>
                </div>)}
            </div>
        </div>
    );
};

export default SearchResult;
