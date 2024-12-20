import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@Components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";

export function CreateMovementDialog ({...Props}: DialogProps) {
    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar uma Movimentação</DialogTitle>
                    <DialogDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis </DialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,<br/> dicta doloribus nesciunt beatae incidunt voluptatibus temporibus earum! Nemo, harum velit. Temporibus odio animi cum, dolores incidunt obcaecati fugiat expedita laboriosam.
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}