import { CreateMovementDialog } from "@/components/CreateMovementDialog";
import { MovementAccordion } from "@Components/MovementAccordion";
import { Accordion } from "@Components/ui/accordion";
import { Button } from "@Components/ui/button";
import { useState } from "react";

const obj = {
    Type: 'adjustment',
    ProductName: "sabão",
    LocationName: "rua dom joão",
    Quantity: 12,
    State: 'BH',
}

export function Movements() {
    const [isCreateMovementDialogOpen, setIsCreateMovementDialogOpen] = useState<boolean>(false)

    const openCreateMovementDialog = () => {
        setIsCreateMovementDialogOpen(true)
    }
    const closeCreateMovementDialog = () => {
        setIsCreateMovementDialogOpen(false)
    }
    
    return (
        <div> 
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Movimentações</h3>
                <Button onClick={openCreateMovementDialog}>Fazer uma Movimentação</Button>
            </div>
            
            <div>
                <Accordion type="multiple">
                    <MovementAccordion id="12" LocationName={obj.LocationName} ProductName={obj.ProductName} Quantity={obj.Quantity} State={obj.State} Type="entry" />
                    <MovementAccordion id="13" LocationName={obj.LocationName} ProductName={obj.ProductName} Quantity={obj.Quantity} State={obj.State} Type="output" />
                    <MovementAccordion id="14" LocationName={obj.LocationName} ProductName={obj.ProductName} Quantity={obj.Quantity} State={obj.State} Type="adjustment" />
                    <MovementAccordion id="15" LocationName={obj.LocationName} ProductName={obj.ProductName} Quantity={obj.Quantity} State={obj.State} Type="entry" />
                </Accordion>
            </div>

            <CreateMovementDialog open={isCreateMovementDialogOpen} onOpenChange={setIsCreateMovementDialogOpen}/>
        </div>
    )
}