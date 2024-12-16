import { HomeLayout } from "@/Layouts/HomeLayout";
import { Home } from "@Pages/Home";
import { Perfil } from "@Pages/Perfil";
import { Routes, Route } from "react-router";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />}/>
                <Route path="gab" element={<Perfil />}/>
            </Route>
        </Routes>
    )
}