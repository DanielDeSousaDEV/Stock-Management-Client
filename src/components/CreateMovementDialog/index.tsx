import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@Components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMovementSchema } from "@Utils/validation/movement";
    

export function CreateMovementDialog ({...Props}: DialogProps) {
    const form = useForm<z.infer<typeof createMovementSchema>>({
        resolver: zodResolver(createMovementSchema),
        defaultValues: {
            product: 1
        }
    })

    function onSubmit(data: z.infer<typeof createMovementSchema>) {
        console.log(data);
        
    }

    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar uma Movimentação</DialogTitle>
                    <DialogDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis </DialogDescription>
                </DialogHeader>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField 
                                    control={form.control}
                                    name="product"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Produto</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Selecione o produto" {...field}/>
                                            </FormControl>
                                            <FormDescription>Produto da Movimentação</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
            </DialogContent>
        </Dialog>
    )
}