import { Category } from "./Category"

export type Product = {
    id: number,
    name: string,
    description: string,
    img_url: string,
    price: number,
    quantity: number,
    minimum_quantity: number,
    category: Category
}