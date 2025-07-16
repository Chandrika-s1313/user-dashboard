import { Navigate } from "react-router-dom";
import React from "react";

function PrivateRouter({isLoggedIn , children}){
    if(!isLoggedIn){
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default PrivateRouter;