import { Outlet } from "react-router";

export function LoginLayout() {
    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen bg-[url('@Assets/stockBg.jpg')]">
            <div className="bg-red-100">
                <Outlet />ad
            </div>
        </div>
    )
}