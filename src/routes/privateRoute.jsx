import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/organisms/NavBar";

import { useAuth } from "../context/AuthContext";


export const PrivateRoute = ({children}) => {
    const {isAuthReady, isLoggedIn,} = useAuth();
    const navigate = useNavigate();
    const {pathname} = useLocation()
    useEffect(() => {
        const logged = isLoggedIn();
        if((!logged && isAuthReady) || (!isAuthReady)) {
            navigate(`/login?backTo=${pathname}`, {replace: true})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return <NavBar>{children}</NavBar>
}