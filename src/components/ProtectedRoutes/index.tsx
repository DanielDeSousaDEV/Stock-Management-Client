import { ReactNode } from "react";
import { Navigate } from "react-router";

export function ProtectedRoutes ({children}: {children: ReactNode}) {
    const isAuthenticated = localStorage.getItem('ApiToken');
    return isAuthenticated ? children : <Navigate to='/login' />;
}