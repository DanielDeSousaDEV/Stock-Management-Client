import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@Components/ui/navigation-menu";
import { NavLink, Outlet } from "react-router";

export function HomeLayout() {
    return (
        <>
            <div className="flex flex-col">
                <header className="sticky py-4 top-0 bg-slate-100">
                    <div className="container mx-auto flex flex-row justify-between items-center content-center">
                        <h2 className="font-semibold text-2xl capitalize">Stock Manager System</h2>

                        <nav>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavLink to='/Products'>
                                            {({isActive}) => (
                                                <NavigationMenuLink className={`text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize ${isActive ? 'bg-slate-100' : ''}`}>Produtos</NavigationMenuLink>
                                            )}
                                        </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavLink to='/Locations'>
                                            {({isActive}) => (
                                                <NavigationMenuLink className={`text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize ${isActive ? 'bg-slate-100' : ''}`}>Localizações</NavigationMenuLink>
                                            )}
                                        </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavLink to='/'>
                                            {({isActive}) => (
                                                <NavigationMenuLink className={`text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize ${isActive ? 'bg-slate-100' : ''}`}>Movimentações</NavigationMenuLink>
                                            )}
                                        </NavLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>
                    </div>
                </header>
                
                <main className="bg-slate-100 my-4 container mx-auto p-2 rounded-lg">
                    <Outlet />
                </main>

                <Toaster />
            </div>
        </>
    )
}