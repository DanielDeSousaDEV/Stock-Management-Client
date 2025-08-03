import { PopoverContent } from "@Components/ui/popover";
import { BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "@Components/ui/button";
import { Popover, PopoverTrigger } from "@Components/ui/popover";
import { Checkbox } from "@Components/ui/checkbox";
import { Category } from "@/types/Category";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { useContext } from "react";
import { filter } from "@/contexts/filterContext";
import { useApi } from "@/hooks/use-api";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { ApiErrorResponse } from "@/types/ApiResponses";

export interface CategoryListItemProps extends CheckboxProps {
    Category: Category
}

export function CategoryListItem({Category, ...Props}:CategoryListItemProps) {
    const api = useApi()

    const [categoryFilterList, setCategoryFilterList] = useContext(filter)

    const isSelected = categoryFilterList.includes(Category.id.toString())

    function toggleFilterValue() {

        const indexOfCategory = categoryFilterList.indexOf(Category.id.toString())

        if (indexOfCategory === -1) {
            setCategoryFilterList((prev: string[])=>{
                prev.push(Category.id.toString())
                
                return [
                    ...prev
                ]
            })

            return;
        }

        setCategoryFilterList((prev: string[])=>{
            const deletedCategory = prev.splice(indexOfCategory, 1)

            return [
                ...prev
            ]
        })
    }

    function handleReload() {
        window.location.reload()
    }

    function handleDeleteCategory() {
        api.delete('categories/' + Category.id).then((response: AxiosResponse)=>{
            console.log(response.data);
            
            toast({
                title: 'A categoria foi deletada com sucesso!!',
                description: 'A categoria ' + Category.name + ' foi deletada com sucesso.',
                action: <ToastAction altText="reload page" onClick={handleReload}>recarregar pagina</ToastAction> 
            })
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro',
                description: errorMessage //podia colocar em form error
            })

            console.log(error.response?.data);            
        })
    }

    return (
        <div className="flex items-center justify-between p-2 bg-slate-300 min-h-10 rounded-lg">
            <div className="flex items-center flex-grow gap-2">
                <Checkbox id={Category.id + Category.name} {...Props} onClick={toggleFilterValue} checked={isSelected}/>
                <label htmlFor={Category.id + Category.name} className="w-full">{Category.name}</label>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="h-6 w-6" variant="ghost"><IoEllipsisHorizontal /></Button>
                </PopoverTrigger>
                <PopoverContent side="right" className="w-fit">
                    <div className="flex flex-col gap-1">
                        <Button size="sm" variant="outline" className="flex-shrink-0 text-left w-28"><BiSolidPencil />Editar</Button>
                        <Button size="sm" variant="outline" className="flex-shrink-0 text-left w-28" onClick={handleDeleteCategory}><BiSolidTrashAlt />Apagar</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>  
    )
}