import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogProps } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { Button } from "@Components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@Components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@Components/ui/select";
import { Textarea } from "@Components/ui/textarea";
import { createMovementSchema } from "@Utils/validation/movement";
import { api } from "@/lib/api";
import { AxiosError, AxiosResponse } from "axios";
import { Movement } from "@/types/Movement";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { ApiError } from "@/types/ApiResponses";

export function CreateMovementDialog ({...Props}: DialogProps) {
    const form = useForm<z.infer<typeof createMovementSchema>>({
        resolver: zodResolver(createMovementSchema),
        defaultValues: {
            quantity: 1
        }
    })

    function handleReload() {
        window.location.reload()
    }

    function onSubmit(data: z.infer<typeof createMovementSchema>) {
        console.log(data);
        api.post('/stockMovements', data).then((response: AxiosResponse<Movement>)=>{
            console.log(response.data);
            
            toast({
                title: 'Movimentação feita com sucesso!',
                description: 'O produto ' + response.data.product.name + ' foi movimentado no(a) ' + response.data.location.name + '.',
                action: <ToastAction altText="reload page" onClick={handleReload}>recarregar pagina</ToastAction> 
            })
        }).catch((error: AxiosError<ApiError>)=>{
            toast({
                title: 'Ocorreu um erro',
                description: error.message //podia colocar em form error
            })

            console.log(error.response?.data);            
        })
    }

    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar uma Movimentação</DialogTitle>
                    <DialogDescription>Preencha os dados abaixo:</DialogDescription>
                </DialogHeader>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2 gap-2">
                                        <FormField 
                                            control={form.control}
                                            name="product_id"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Produto<span className="text-red-400">*</span>:</FormLabel>
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
                                            name="location_id"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Localização<span className="text-red-400">*</span>:</FormLabel>
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
                                                    <FormLabel>Quantidade<span className="text-red-400">*</span>:</FormLabel>
                                                        <Input type="number" {...field}/>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField 
                                            control={form.control}
                                            name="type"
                                            render={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Tipo da movimentação<span className="text-red-400">*</span>:</FormLabel>
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
                                <div className="mb-2">
                                    <FormField
                                        control={form.control}
                                        name="reason"
                                        render={({field})=>(
                                            <FormItem>
                                                <FormLabel>Razão:</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field}/>
                                                </FormControl>
                                                <FormDescription>Descreva o motivo da movimentação</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <DialogFooter>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose>
                                            <Button type="button" variant="destructive">
                                                Cancelar
                                            </Button>
                                        </DialogClose>
                                        <Button type="submit">
                                            Criar Movimentação
                                        </Button>
                                    </div>
                                </DialogFooter>
                            </form>
                        </Form>
                    </div>
            </DialogContent>
        </Dialog>
    )
}