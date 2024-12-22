import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { RiAddLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi";
import { CategoryListItem } from "@/components/CategoryListItem";

export function Products() {
    const { toast } = useToast()

    function logger () {
        toast({
            title: 'deu certo',
            description: 'mouthwasinhg',
            variant: 'primary'
        });
    }

    return (
        <div className="grid grid-cols-3 gap-2"> 
            <div className="col-span-1 bg-slate-200 rounded-lg p-2">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Categorias</h3>
                </div>
                <div className="flex w-full items-center gap-2 mb-2">
                    <Input className="bg-slate-50 flex-1"/>
                    <Button className="flex-shrink-0" title="Adicionar uma categoria" size="icon" onClick={logger}><RiAddLine /></Button>
                </div>
                <div className="space-y-1">
                    <CategoryListItem id={23} name="cozinha"/>
                    <CategoryListItem id={23} name="cozinha"/>
                    <CategoryListItem id={23} name="cozinha"/>
                </div>
            </div>

            <div className="mb-4 col-span-2 bg-slate-200 rounded-lg p-2">
                <h3 className="text-lg font-semibold">Produtos</h3>
            </div>
        </div>
    )
}