import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";

import { tokenSelector, isModifiedSelector } from "~/utils/redux/selectors/userSelector";
import userSlice from "~/utils/redux/slices/userSlice";
import { getCurrentToken } from "~/utils/axios/auth";

const AuthContainer = ({ children, admin }) => {
    const token = useSelector(tokenSelector);
    const isModified = useSelector(isModifiedSelector);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            const localToken = getCurrentToken();
            if (!localToken) {
                navigate('/login');
                return;
            }
            
            dispatch(userSlice.actions.changeUserData({ token: localToken }));
        }
    
    }, [token]);

    useEffect(() => {
        if (isModified) {
            navigate('/login');
        }
    }, [isModified])
    
    return (
        <>
            {children}
        </>
    );
}
 
export default AuthContainer;