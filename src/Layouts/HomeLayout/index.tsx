import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@Components/ui/navigation-menu";
import { Outlet } from "react-router";

export function HomeLayout() {
    return (
        <div className="container mx-auto py-4">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center justify-center">
                    <div className="font-semibold text-xl">Home</div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="bg-zinc-300 p-2 truncate">
                                        Cradastre e Gerencie seus produtos
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Localizações</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="bg-zinc-300 p-2 truncate">
                                        Cradastre e Gerencie suas Localizações
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="bg-slate-200 flex flex-col items-center justify-center flex-wrap h-40 my-4 rounded-lg">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}