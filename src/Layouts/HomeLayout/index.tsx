// import { Toaster } from "@/components/ui/toaster";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
// import { ArrowLeftRight, MapPin, Package } from "lucide-react";
// import { NavLink, Outlet } from "react-router";
import { Outlet } from 'react-router'
// import { useMediaQuery } from 'usehooks-ts'

export function Homelayout() {
    // const isMobile = useMediaQuery('(max-width: 480px)')

    return (
        <div>
            {/* <div className="flex flex-col">
                <header className="sticky p-2 md:p-4 top-0 bg-slate-100">
                    <div className="container mx-auto flex flex-row justify-between items-center content-center">
                        <h2 className="font-semibold text-xl md:text-2xl capitalize">Stock Manager System</h2>

                        <nav>
                            <NavigationMenu>
                                <NavigationMenuList className="flex gap-2 md:gap-0">
                                    <NavigationMenuItem>
                                            <NavigationMenuLink asChild>
                                                <NavLink to='/Products' className={({isActive}) => `text-1xl px-4 py-2 rounded-md font-semibold md:hover:bg-slate-200 capitalize ${isActive ? 'md:bg-slate-200' : ''}`}>
                                                        {isMobile ? <Package /> : 'Produtos'}
                                                </NavLink>
                                            </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <NavLink to='/Locations' className={({isActive}) => `text-1xl px-4 py-2 rounded-md font-semibold md:hover:bg-slate-200 capitalize ${isActive ? 'md:bg-slate-200' : ''}`}>
                                                        {isMobile ? <MapPin /> : 'Localizações'}
                                            </NavLink>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <NavLink to='/' className={({isActive}) => `text-1xl px-4 py-2 rounded-md font-semibold md:hover:bg-slate-200 capitalize ${isActive ? 'md:bg-slate-200' : ''}`}>
                                                    {isMobile ? <ArrowLeftRight /> : 'Movimentações'}
                                            </NavLink>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>
                    </div>
                </header>

                <div className="container mx-auto p-2 md:p-4">
                    <main className="bg-slate-100 my-4 p-2 rounded-lg">
                        <Outlet />
                    </main>
                </div>
                

                <Toaster />
            </div> */}
            <h1>daniel</h1>
            <Outlet />
        </div>
    )
}