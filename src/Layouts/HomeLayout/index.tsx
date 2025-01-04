import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@Components/ui/navigation-menu";
import { Link, Outlet } from "react-router";

export function HomeLayout() {
    return (
        <>
            <div className="flex flex-col">
                <header className="sticky py-4 top-0 bg-white">
                    <div className="container mx-auto flex flex-row justify-between items-center content-center">
                        <h2 className="font-semibold text-2xl capitalize">Stock Manager System</h2>

                        <nav>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link to='/Products'>
                                            <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize">Produtos</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link to='/Locations'>
                                            <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize">Localizações</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link to='/'>
                                            <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100 capitalize">Movimentações</NavigationMenuLink>
                                        </Link>
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