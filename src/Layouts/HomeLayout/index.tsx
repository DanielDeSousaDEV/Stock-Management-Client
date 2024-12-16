import { Outlet } from "react-router";

export function HomeLayout() {
    return (
        <>
            <h1 className="font-serif text-teal-800 text-lg">Texto em todas as rotas</h1>
            <div className="bg-slate-200 flex flex-col items-center justify-center flex-wrap h-40 m-4 rounded-lg">
                <Outlet />
            </div>
        </>
    )
}