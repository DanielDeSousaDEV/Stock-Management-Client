import { Category } from "./Category"

export type Product = {
    Id: number,
    Name: string,
    Description: string,
    ImgUrl: string,
    Price: number,
    Quantity: number,
    MinimumQuantity: number,
    Category: Category
}