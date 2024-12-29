import { RiErrorWarningLine } from "react-icons/ri";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@Components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@Components/ui/popover";
import { Badge } from "@Components/ui/badge";

export interface ProductCardProps {
    name: string
    quantity: number
    minQuantity: number
    category: string
    price: number
    imgURL?: string
}

export function ProductCard({name, quantity, minQuantity, category, price, imgURL}:ProductCardProps) {
    const withLowStock = quantity < minQuantity;

    return (
        <Card>
            <CardContent className="p-6 flex flex-row gap-2">
                <img src={imgURL ?? "https://pbs.twimg.com/profile_images/1781410431753396224/KWDTBdz4_400x400.jpg"} loading="lazy" className="aspect-square h-32 rounded-lg object-cover object-center" />
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <CardHeader className="p-0 flex flex-row items-center justify-between">
                            <CardTitle className="text-xl w-fit inline">
                                {name}
                            </CardTitle>
                            {withLowStock && (
                                <Popover>
                                    <PopoverTrigger>
                                        <RiErrorWarningLine className="size-5"/>
                                    </PopoverTrigger>
                                    <PopoverContent side="right">
                                        <p><strong>Estoque baixo: </strong>o produto {name} Abaixo da quantidade mínima.</p>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </CardHeader>
                        <Badge>{category}</Badge>
                    </div>
                    <CardFooter className="p-0 flex items-center justify-between gap-4">
                        <p><span className="font-semibold">Qtd: </span>{quantity}</p>
                        <p><span className="font-semibold">R$ </span>{price}</p>
                    </CardFooter>
                </div>
            </CardContent>
        </Card>
    )
}