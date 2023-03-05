import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";

import { tokenSelector } from "~/utils/redux/selectors/userSelector";

const AuthContainer = ({ children, admin }) => {
    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        
    }, []);
    
    return (
        <>
            {children}
        </>
    );
}
 
export default AuthContainer;