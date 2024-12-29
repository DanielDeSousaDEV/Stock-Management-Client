import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export function CreateProductDialog({...Props}:DialogProps) {
    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Criar um Produto
                    </DialogTitle>
                    <DialogDescription>
                        Preença os dados abaixo:
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2">
                        
                </div>

                <DialogFooter>
                    <div className="flex justify-end gap-2">
                        <DialogClose>
                            <Button variant="destructive">
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="submit">
                            Criar Produto
                        </Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}