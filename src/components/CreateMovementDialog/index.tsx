import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@Components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMovementSchema } from "@Utils/validation/movement";
import { Button } from "@Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@Components/ui/select";
    

export function CreateMovementDialog ({...Props}: DialogProps) {
    const form = useForm<z.infer<typeof createMovementSchema>>({
        resolver: zodResolver(createMovementSchema),
        defaultValues: {
            product: '1'
        }
    })

    function onSubmit(data: z.infer<typeof createMovementSchema>) {
        console.log('dan');
        console.log(data);
    }

    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar uma Movimentação</DialogTitle>
                    <DialogDescription>Preença os dados abaixo:</DialogDescription>
                </DialogHeader>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2 gap-2">
                                        <FormField 
                                            control={form.control}
                                            name="product"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Produto</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Escolha um produto" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="1">
                                                                    cotonete
                                                                </SelectItem>
                                                                <SelectItem value="2">
                                                                    cotonete
                                                                </SelectItem>
                                                                <SelectItem value="3">
                                                                    cotonete
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <DialogClose>
                                        <Button variant="destructive">
                                            Cancelar
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit">
                                        Criar
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
            </DialogContent>
        </Dialog>
    )
}