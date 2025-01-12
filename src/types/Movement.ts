import { Location } from "./Location"
import { Product } from "./Product"
import { User } from "./User"

export type Movement = {
    id: number,
    product: Product,
    location: Location,
    quantity: number,
    type: "entry" | "output" | "adjustment",
    reason: string,
    user: User
}