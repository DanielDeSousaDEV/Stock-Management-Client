import { Location } from "@/types/Location";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export interface LocationCardProps {
    Location: Location
}

export function LocationCard ({Location}: LocationCardProps) {
    return (
        <Card>
            <CardContent>
                <CardHeader className="flex flex-row items-center justify-between px-0">
                    <CardTitle className="text-xl w-fit inline">{Location.Name}</CardTitle>
                    <Badge className="text-sm" variant="outline">{Location.State}</Badge>
                </CardHeader>
                <p className="truncate">{Location.StreetName} Nº:{Location.Number}</p>
                <p className="truncate">{Location.Neighborhood}</p>
                <p className="truncate">{Location.City}</p>
                <CardFooter className="flex justify-end p-0 py-2">
                    <Button size="sm">Detalhes</Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}