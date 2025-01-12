import { Category } from "./Category"

export type Product = {
    id: number,
    name: string,
    description: string,
    imgUrl: string,
    price: number,
    quantity: number,
    minimumQuantity: number,
    category: Category
}