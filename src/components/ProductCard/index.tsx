import { RiErrorWarningLine } from "react-icons/ri";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/Product";

export interface ProductCardProps {
    Product: Product
}

export function ProductCard({Product}:ProductCardProps) {
    const withLowStock = Product.quantity < Product.minimum_quantity;

    function defineCategoryColor() {
        if (!Product.category) {
            return '#BFBAFF'
        }

        return Product.category.hex_color 
    }

    const bgCategoryColor = defineCategoryColor()

    return (
        <Card>
            <CardContent className="p-6 flex flex-row gap-2">
                <img src={Product.image ?? "https://pbs.twimg.com/profile_images/1781410431753396224/KWDTBdz4_400x400.jpg"} loading="lazy" className="aspect-square h-32 rounded-lg object-cover object-center" draggable='false'/>
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <CardHeader className="p-0 flex flex-row items-center justify-between">
                            <CardTitle className="text-xl w-fit inline">
                                {Product.name}
                            </CardTitle>
                            {withLowStock && (
                                <Popover>
                                    <PopoverTrigger>
                                        <RiErrorWarningLine className="size-5"/>
                                    </PopoverTrigger>
                                    <PopoverContent side="right">
                                        <p><strong>Estoque baixo: </strong>o produto {Product.name} Abaixo da quantidade mínima.</p>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </CardHeader>
                        <Badge 
                            className="text-zinc-800 hover:saturate-[350%] hover:brightness-90 transition-all"
                            style={{
                                backgroundColor: bgCategoryColor
                            }}
                        >
                                {Product.category?.name || 'Sem categoria'}
                        </Badge>
                    </div>
                    <CardFooter className="p-0 flex items-center justify-between gap-4">
                        <p><span className="font-semibold">Qtd: </span>{Product.quantity}</p>
                        <p><span className="font-semibold">R$ </span>{Product.price}</p>
                    </CardFooter>
                </div>
            </CardContent>
        </Card>
    )
}