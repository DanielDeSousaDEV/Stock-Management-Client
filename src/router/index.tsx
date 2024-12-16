import { Home } from "@/pages/Home";
import { Perfil } from "@/pages/Perfil";
import { Routes, Route } from "react-router";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gab" element={<Perfil/>}/>
        </Routes>
    )
}