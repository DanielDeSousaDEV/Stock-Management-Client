import { CreateMovementDialog } from "@/components/CreateMovementDialog";
import { useApi } from "@/hooks/use-api";
import { toast } from "@/hooks/use-toast";
import { ApiErrorResponse, ApiResponse } from "@/types/ApiResponses";
import { Movement } from "@/types/Movement";
import { MovementAccordion } from "@Components/MovementAccordion";
import { Accordion } from "@Components/ui/accordion";
import { Button } from "@Components/ui/button";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export function Movements() {
    const api = useApi();

    const [isCreateMovementDialogOpen, setIsCreateMovementDialogOpen] = useState<boolean>(false)

    const openCreateMovementDialog = () => {
        setIsCreateMovementDialogOpen(true)
    }
    const closeCreateMovementDialog = () => {
        setIsCreateMovementDialogOpen(false)
    }

    const [movements, setMovements] = useState<Movement[]>([]);

    useEffect(()=>{
        api.get('/stockMovements').then((response: AxiosResponse<Movement[]>)=>{
            setMovements(response.data)
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro',
                description: errorMessage
            })
        })  
    }, [])
    
    return (
        <div> 
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold capitalize">Movimentações</h3>
                <Button onClick={openCreateMovementDialog}>Fazer uma Movimentação</Button>
            </div>
            
            <div>
                <Accordion type="multiple" className="space-y-1">
                    {movements.map((movement)=>(
                        <MovementAccordion key={movement.id} Movement={movement}/>
                    ))}
                </Accordion>
            </div>

            <CreateMovementDialog open={isCreateMovementDialogOpen} onOpenChange={setIsCreateMovementDialogOpen}/>
        </div>
    )
}