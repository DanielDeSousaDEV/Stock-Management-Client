import { CreateLocationDialog } from "@/components/CreateLocationDialog";
import { LocationCard } from "@/components/LocationCard";
import { LocationDetailsDialog } from "@/components/LocationDetailsDialog";
import { Button } from "@/components/ui/button";
import { useApi } from "@/hooks/use-api";
import { toast } from "@/hooks/use-toast";
import { ApiErrorResponse } from "@/types/ApiResponses";
import { Location } from "@/types/Location";
import { AxiosError, AxiosResponse } from "axios";
import { SyntheticEvent, useEffect, useState } from "react";

export function Locations() {
    const api = useApi()

    const [locations, setLocations] = useState<Location[]>([]);
    
    useEffect(()=>{
        api.get('/locations').then((response: AxiosResponse<Location[]>)=>{
            console.log(response.data);
            setLocations(response.data)
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro!',
                description: errorMessage
            })
        });
    }, [])

    const [isCreateLocationDialogOpen, setIsCreateLocationDialogOpen] = useState<boolean>(false)

    const openCreateLocationDialog = () => {
        setIsCreateLocationDialogOpen(true)
    }
    const closeCreateLocationDialog = () => {
        setIsCreateLocationDialogOpen(false)
    }
    
    const [isLocationDetailsDialogOpen, setIsLocationDetailsDialogOpen] = useState<boolean>(false)
    const [locationSelected, setLocationSelected] = useState<Location>({} as Location)
    
    const openLocationDetailsDialog = (Location: Location) => {
        setLocationSelected(Location)
        setIsLocationDetailsDialogOpen(true)
    }
    const closeLocationDetailsDialog = (e: SyntheticEvent) => {
        setIsLocationDetailsDialogOpen(false)
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold capitalize">Localizações</h3>
                <Button onClick={openCreateLocationDialog}>Fazer uma Movimentação</Button>
            </div>

            <div className="grid grid-cols-4 gap-1">
                {locations.map((location)=>(
                    <LocationCard handlerOpenDetails={openLocationDetailsDialog} key={location.id} Location={location}/>
                ))}
            </div>

            {isLocationDetailsDialogOpen && locationSelected && (
                <LocationDetailsDialog
                    Location={locationSelected} 
                    open={isLocationDetailsDialogOpen} 
                    onOpenChange={setIsLocationDetailsDialogOpen}
                />
            )}

            <CreateLocationDialog
                open={isCreateLocationDialogOpen} 
                onOpenChange={setIsCreateLocationDialogOpen}                
            />
        </div>
    )
}