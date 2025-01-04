import { useForm } from "react-hook-form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form } from "../ui/form";
import { Button } from "../ui/button";

export function LocationDetailsDialog() {
    const form = useForm()

    function onSubmit () {

    }

    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Detalhes da Localização
                    </DialogTitle>
                    <DialogDescription>
                        Confira os detalhes da localização abaixo
                    </DialogDescription>
                </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <div className="bg-red-200">name</div>
                                <div className="bg-red-200">city</div>
                                <div className="bg-red-200">streetname</div>
                                <div className="bg-red-200">number</div>
                                <div className="bg-red-200">bairro</div>
                                <div className="bg-red-200">CEP</div>
                                <div className="bg-red-200 row-span-2 h-full">description</div>
                                <div className="bg-red-200 row-span-2 h-full">Complement</div>{/* perto do posto */}
                            </div>
                            
                            <DialogFooter>
                                <div className="flex justify-end gap-2">
                                    <DialogClose>
                                        <Button type="button" variant="destructive">
                                            Cancelar
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit">
                                        Criar Produto
                                    </Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </Form>
            </DialogContent>
        </Dialog>
    )
}