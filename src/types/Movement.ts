import { Location } from "./Location"
import { Product } from "./Product"
import { User } from "./User"

export type Movement = {
    id: number,
    Product: Product,
    Location: Location,
    Quantity: number,
    Type: "entry" | "output" | "adjustment",
    Reason: string,
    User: User
}