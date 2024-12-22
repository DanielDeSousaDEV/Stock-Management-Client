import { PopoverContent } from "@Components/ui/popover";
import { BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "@Components/ui/button";
import { Popover, PopoverTrigger } from "@Components/ui/popover";
import { Checkbox } from "@Components/ui/checkbox";

interface CategoryListItemPropsFake {
    id: number
    name: string
    // handlerEditar: () => void//fazer o dialog aqui
    // handlerApagar: () => void//pode ser resolvido aqui dentro
}

export function CategoryListItem({id, name}:CategoryListItemPropsFake) {
    return (
        <div className="flex items-center justify-between p-2 bg-slate-300 min-h-10 rounded-lg">
            <div className="flex items-center flex-grow gap-2">
                <Checkbox id={id + name}/>
                <label htmlFor={id + name} className="w-full">{name}</label>
            </div>
            <Popover>
                <PopoverTrigger>
                    <Button className="h-6 w-6" variant="ghost"><IoEllipsisHorizontal /></Button>
                </PopoverTrigger>
                <PopoverContent side="right" className="w-fit">
                    <div className="flex flex-col gap-1">
                        <Button size="sm" variant="outline" className="flex-shrink-0 text-left w-28"><BiSolidPencil />Editar</Button>
                        <Button size="sm" variant="outline" className="flex-shrink-0 text-left w-28"><BiSolidTrashAlt />Apagar</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>  
    )
}