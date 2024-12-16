import { Home } from "@/pages/Home";
import { HomeLayout } from "@/Layouts/HomeLayout";
import { Perfil } from "@/pages/Perfil";
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