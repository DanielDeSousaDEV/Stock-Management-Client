import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@Components/ui/navigation-menu";
import { Link, Outlet } from "react-router";

export function HomeLayout() {
    return (
        <div className="container mx-auto py-4">
            <div className="flex flex-col">
                <header className="flex flex-row justify-between items-center content-center">
                    <h2 className="font-semibold text-2xl">Stock Manager System</h2>

                    <nav>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link to=''>
                                        <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100">Produtos</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to=''>
                                        <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100">Localizações</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to=''>
                                        <NavigationMenuLink className="text-1xl px-4 py-2 rounded-md font-semibold hover:bg-slate-100">Movimentações</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                </header>
                
                <main className="bg-slate-200 flex flex-col items-center justify-center flex-wrap h-40 my-4 rounded-lg">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}