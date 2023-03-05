import React, {useState, useEffect} from 'react';
import ThumbItem from './Thumbitem';
import axios from 'axios';
const Thumbnail = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://wds-sell-shoes.onrender.com/v1/shoes/all-shoes')
        .then(res => setData(res.data))
    }, [])
    return (
        <div className="w-full  flex flex-col h-full">
            <div className="flex h-full flex-wrap justify-center">
                {data.map(element => {
                    return (
                        <div className="w-1/4 mr-2 h-[400px]" key = {element.id}>
                            <ThumbItem element={element}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Thumbnail;
