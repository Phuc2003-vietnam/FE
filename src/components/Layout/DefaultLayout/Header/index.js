import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const SearchInput = () => {
    const navigate = useNavigate();

    const onSearch = (value) => {
        navigate('/search-result');
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
