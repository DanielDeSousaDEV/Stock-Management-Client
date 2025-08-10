import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

export function LogeLayout() {
    return (
        <div className="relative flex justify-center items-center min-h-screen w-screen bg-[url('@/assets/stockBg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-black bg-opacity-20 backdrop-blur-sm min-h-screen w-screen"></div>

            <div className="z-10">
                <Outlet />
            </div>

            <Toaster /> 
        </div>
    )
}