import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export const PublicRoute = ({children}) => {
    const {isLoggedIn, isAuthReady} = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const backTo = searchParams.get('backTo')
    useEffect(() => {
        const logged = isLoggedIn();
        if(logged  && isAuthReady) {
            navigate(backTo || '/', {replace: true})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[backTo, isAuthReady])
    
    return children
}