import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { RiAddLine } from "react-icons/ri";
import { CategoryListItem } from "@/components/CategoryListItem";
import { ProductCard } from "@/components/ProductCard";
import { CreateProductDialog } from "@/components/CreateProductDialog";
import { CreateCategoryDialog } from "@/components/CreateCategoryDialog";
import { useEffect, useState } from "react"; 
import { useApi } from "@/hooks/use-api";
import { Product } from "@/types/Product";
import { Category } from "@/types/Category";
import { AxiosError, AxiosResponse } from "axios";
import { ApiErrorResponse } from "@/types/ApiResponses";
import { filter } from "@/contexts/filterContext";

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [filterOfCategoriesName , setFilterOfCategoriesName] = useState<string>('');
    const [filterOfProductsName , setFilterOfProductsName] = useState<string>('');

    const api = useApi();

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    useEffect(()=>{
        api.get('/products').then((response: AxiosResponse<Product[]>)=>{
            console.log(response.data);
            setProducts(response.data)
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro!',
                description: errorMessage
            })
        });

        api.get('/categories').then((response: AxiosResponse<Category[]>)=>{
            console.log(response.data);
            setCategories(response.data)
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro!',
                description: errorMessage
            })
        });
    }, [])

    useEffect(()=>{
        const categoriesIdList = categories.map(category => category.id.toString())

        setSelectedCategories(categoriesIdList)
    }, [categories])

    function logger () {
        // toast({
        //     title: 'deu certo',
        //     description: JSON.stringify(SelectedCategories, null, 2),
        //     variant: 'primary'
        // });

        console.log(filteredProducts);
        
    }

    const [isCreateProductDialogOpen, setIsCreateProductDialogOpen] = useState<boolean>(false)

    const openCreateProductDialog = () => {
        setIsCreateProductDialogOpen(true)
    }
    const closeCreateProductDialog = () => {
        setIsCreateProductDialogOpen(false)
    }

    const [isCreateCategoryDialogOpen, setIsCreateCategoryDialogOpen] = useState<boolean>(false)

    const openCreateCategoryDialog = () => {
        setIsCreateCategoryDialogOpen(true)
    }
    const closeCreateCategoryDialog = () => {
        setIsCreateCategoryDialogOpen(false)
    }

    const filteredCategories = categories.filter(category => {
        if (!filterOfCategoriesName) {
            return category
        }

        const regex = new RegExp(`${filterOfCategoriesName}.{0,}`)
        const categoryName = category.name
        
        if(regex.test(categoryName)){
            return category
        }
    }) 

    const filteredProducts = products.filter(product => {
        if (!filterOfProductsName) {
            return product
        }

        const regex = new RegExp(`${filterOfProductsName}.{0,}`)
        const productName = product.name
        
        if(regex.test(productName)){
            return product 
        }
    }).filter(product => {
        if (!product.category) {
            return product
        }

        return selectedCategories.includes(product.category.id.toString())
    });

    return (
        <div className="grid grid-cols-3 gap-2">
            <filter.Provider value={[selectedCategories, setSelectedCategories]}>
                <div className="col-span-1 bg-slate-200 rounded-lg p-2">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold capitalize" onClick={logger}>Categorias</h3>
                    </div>
                    <div className="flex w-full items-center gap-2 mb-2">
                        <Input 
                            className="bg-slate-50 flex-1" 
                            value={filterOfCategoriesName}
                            onChange={(e)=>{setFilterOfCategoriesName(e.target.value)}}
                        />
                        <Button className="flex-shrink-0" title="Adicionar uma categoria" size="icon" onClick={openCreateCategoryDialog}><RiAddLine /></Button>
                    </div>
                    <div className="space-y-1">
                        {filteredCategories.map((category)=>(
                            <CategoryListItem key={category.id} Category={category}/>
                        ))}
                    </div>
                </div>

                <div className="col-span-2 bg-slate-200 rounded-lg p-2">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold capitalize">Produtos</h3>
                    </div>
                    <div className="flex w-full items-center gap-2 mb-2">
                        <Input 
                            className="bg-slate-50 flex-1"
                            value={filterOfProductsName}
                            onChange={(e)=>{setFilterOfProductsName(e.target.value)}}
                        />
                        <Button className="flex-shrink-0" title="Adicionar uma categoria" size="icon" onClick={openCreateProductDialog}><RiAddLine /></Button>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        {filteredProducts.map((product)=>(
                            <ProductCard key={product.id} Product={product}/>
                        ))}
                    </div>
                </div>
            </filter.Provider>

            <CreateProductDialog open={isCreateProductDialogOpen} onOpenChange={setIsCreateProductDialogOpen} Categories={categories}/>
            <CreateCategoryDialog open={isCreateCategoryDialogOpen} onOpenChange={setIsCreateCategoryDialogOpen} />

        </div>
    )
}