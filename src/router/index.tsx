import { HomeLayout } from "@Layouts/HomeLayout";
import { LoginLayout } from "@Layouts/LoginLayout";
import { Locations } from "@/pages/Locations";
import { Movements } from "@/pages/Movements";
import { Products } from "@/pages/Products";
import { Routes, Route } from "react-router";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/Login" element={<LoginLayout />}>
                <Route index />
                <Route path="SignUp" />
            </Route>

            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Movements />}/>
                <Route path="Locations" element={<Locations />}/>
                <Route path="Products" element={<Products />}/>
            </Route>
        </Routes>
    )
}