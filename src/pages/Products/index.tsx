import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { RiAddLine } from "react-icons/ri";
import { CategoryListItem } from "@/components/CategoryListItem";
import { ProductCard } from "@/components/ProductCard";
import { CreateProductDialog } from "@/components/CreateProductDialog";
import { useState } from "react";

export function Products() {
    const { toast } = useToast()

    function logger () {
        toast({
            title: 'deu certo',
            description: 'mouthwasinhg',
            variant: 'primary'
        });
    }

    const [isCreateProductDialogOpen, setIsCreateProductDialogOpen] = useState<boolean>(false)

    const openCreateProductDialog = () => {
        setIsCreateProductDialogOpen(true)
    }
    const closeCreateProductDialog = () => {
        setIsCreateProductDialogOpen(false)
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

            <div className="col-span-2 bg-slate-200 rounded-lg p-2">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Produtos</h3>
                </div>
                <div className="flex w-full items-center gap-2 mb-2">
                    <Input className="bg-slate-50 flex-1"/>
                    <Button className="flex-shrink-0" title="Adicionar uma categoria" size="icon" onClick={openCreateProductDialog}><RiAddLine /></Button>
                    <CreateProductDialog open={isCreateProductDialogOpen} onOpenChange={setIsCreateProductDialogOpen} />
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <ProductCard category="Higiene" minQuantity={200} name="Cotonete" price={20} quantity={900} />
                    <ProductCard category="Militar" minQuantity={200} name="Casapete" price={20} quantity={100} imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQbDu8r2APmKlXic6yzmrQRcMJSZDTOF74Q&s" />
                    <ProductCard category="Magica" minQuantity={200} name="Cajado" price={20} quantity={150} imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcrzGE4ixAsMrlGNXU73Xcspq1mzzpROnuA&s" />
                    <ProductCard category="Mdicina" minQuantity={200} name="Agulha" price={20} quantity={100} />
                </div>
            </div>
        </div>
    )
}