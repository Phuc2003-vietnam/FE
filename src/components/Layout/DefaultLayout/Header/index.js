
import axios from 'axios';
import { Input } from 'antd';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {searchProduct}  from '~/utils/redux/SearchProduct';
import { useEffect, useState } from 'react';
const { Search } = Input;

const SearchInput = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('https://wds-sell-shoes.onrender.com/v1/shoes/all-shoes')
        .then(res => setData(res.data))
    }, [])

    const onSearch = (value) => {
        navigate('/search-result');
        const newData = data.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
        const action = searchProduct(newData)
        console.log(action)
        dispatch(action)
    };
    return (
        <div className="py-3">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                className="w-full"
                size="large"
            />
        </div>
    );
};
export default SearchInput;
