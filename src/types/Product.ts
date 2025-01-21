import { Category } from "./Category"

export type Product = {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    quantity: number,
    minimum_quantity: number,
    category: Category
}