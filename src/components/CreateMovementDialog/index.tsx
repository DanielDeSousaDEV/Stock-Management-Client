import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@Components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMovementSchema } from "@Utils/validation/movement";
import { Button } from "@Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@Components/ui/select";
import { Textarea } from "@Components/ui/textarea";
    

export function CreateMovementDialog ({...Props}: DialogProps) {
    const form = useForm<z.infer<typeof createMovementSchema>>({
        resolver: zodResolver(createMovementSchema),
        defaultValues: {
            quantity: 1
        }
    })

    function onSubmit(data: z.infer<typeof createMovementSchema>) {
        console.log('dan');
        console.log(data);
    }

    function logger() {
        console.log(form.getValues());
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
                                        <FormField 
                                            control={form.control}
                                            name="localization"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Localização</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Escolha uma localização" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="1">
                                                                    rua irmã alzira
                                                                </SelectItem>
                                                                <SelectItem value="2">
                                                                    rua aldeido
                                                                </SelectItem>
                                                                <SelectItem value="3">
                                                                    rua eter
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField 
                                            control={form.control}
                                            name="quantity"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Quantidade</FormLabel>
                                                        <Input type="number" {...field}/>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField 
                                            control={form.control}
                                            name="movementType"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Localização</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Escolha um tipo de movimentação" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="entry">
                                                                    Entrada
                                                                </SelectItem>
                                                                <SelectItem value="output">
                                                                    Saída
                                                                </SelectItem>
                                                                <SelectItem value="adjustment">
                                                                    Ajuste
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={(field)=>(
                                            <FormItem>
                                                <FormLabel>Descrição</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field}/>
                                                </FormControl>
                                                <FormDescription>Descreva o motivo da movimentação</FormDescription>
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
                                    <Button onClick={logger}>
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