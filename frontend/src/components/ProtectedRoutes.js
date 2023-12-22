import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem('token');
     const adminEmail = localStorage.getItem('adminEmail');

    return(
        token && adminEmail ? <Outlet /> : <Navigate to='/Login' />
    );
}
export default ProtectedRoutes;