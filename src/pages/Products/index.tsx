import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { RiAddLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";

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
                    <div className="flex items-center justify-between p-2 bg-slate-300 min-h-10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Checkbox id="limpeza"/>
                            <label htmlFor="limpeza">Limpeza</label>
                        </div>
                        <Button className="h-6 w-6" variant="ghost"><IoEllipsisHorizontal /></Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-300 min-h-10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Checkbox id="comida"/>
                            <label htmlFor="comida">Comida</label>
                        </div>
                        <Button className="h-6 w-6" variant="ghost"><IoEllipsisHorizontal /></Button>
                    </div>
                </div>
            </div>

            <div className="mb-4 col-span-2 bg-slate-200 rounded-lg p-2">
                <h3 className="text-lg font-semibold">Produtos</h3>
            </div>
        </div>
    )
}