import { Routes, Route } from "react-router";
import { Locations } from "@/pages/Locations";
import { Movements } from "@/pages/Movements";
import { Products } from "@/pages/Products";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { LoginLayout } from "@/layouts/LoginLayout";
import { HomeLayout } from "@/layouts/HomerLayout";

export function MyRoutes() {
    return (
        <Routes>
            {/* Rotas de Login/Cadastro */}
            <Route path="/" element={<LoginLayout />}>
                <Route path="Login" element={<Login />}/>
                <Route path="SignUp" element={<SignUp/>}/>
            </Route>

            {/* Rotas das funcionalidades principais */}
            <Route path="/" element={
                <ProtectedRoutes>
                    <HomeLayout />                    
                </ProtectedRoutes>
            }>
                <Route index element={<Movements />}/>
                <Route path="Locations" element={<Locations />}/>
                <Route path="Products" element={<Products />}/>
            </Route>
            {/* <Route path="/">
                <Route index element={<Movements />}/>
                <Route path="Locations" element={<Locations />}/>
                <Route path="Products" element={<Products />}/>
            </Route> */}
        </Routes>
    )
}