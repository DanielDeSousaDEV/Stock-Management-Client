import { Location } from "@/types/Location";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export interface LocationCardProps {
    Location: Location,
    handlerOpenDetails: (Location: Location) => void 
}

export function LocationCard ({Location, handlerOpenDetails}: LocationCardProps) {
    return (
        <Card>
            <CardContent>
                <CardHeader className="flex flex-row items-center justify-between px-0">
                    <CardTitle className="text-xl w-fit inline">{Location.name}</CardTitle>
                    <Badge className="text-sm" variant="outline">{Location.CEP}</Badge>
                </CardHeader>
                <p className="truncate">{Location.street_name} Nº:{Location.number}</p>
                <p className="truncate">{Location.neighborhood}</p>
                <p className="truncate">{Location.city}</p>
                <CardFooter className="flex justify-end p-0 py-2">
                    <Button size="sm" onClick={() => handlerOpenDetails(Location)}>Detalhes</Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}