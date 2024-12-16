import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@Components/ui/navigation-menu";
import { Outlet } from "react-router";

export function HomeLayout() {
    return (
        <div className="container mx-auto py-4">
            <div className="flex flex-col">
                <header className="flex flex-row justify-between items-center justify-center">
                    <h2 className="font-semibold text-2xl">Stock Manager System</h2>

                    <nav>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-1xl">Produtos</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="bg-zinc-300 p-2 truncate">
                                            Cradastre e Gerencie seus produtos
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-1xl">Localizações</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="bg-zinc-300 p-2 truncate">
                                            Cradastre e Gerencie suas Localizações
                                        </div>
                                    </NavigationMenuContent>
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