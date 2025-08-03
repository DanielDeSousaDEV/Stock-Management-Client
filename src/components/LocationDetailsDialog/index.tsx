import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogProps } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateLocationSchema } from "@/utils/validation/location";

import { useForm } from "react-hook-form";
import { useMask } from '@react-input/mask';
import { toast } from "@/hooks/use-toast";
import { SyntheticEvent, useState } from "react";
import { Location } from "@/types/Location";
import { useApi } from "@/hooks/use-api";
import { AxiosError, AxiosResponse } from "axios";
import { ApiResponse } from "@/types/ApiResponses";
import { ToastAction } from "../ui/toast";

interface LocationDetailsDialogProps extends DialogProps{
    Location: Location
}

export function LocationDetailsDialog({Location, ...Props}: LocationDetailsDialogProps) {
    const api = useApi()
    const [isEditable, setIsEditable] = useState<boolean>(false)

    function setEditableForm (e: SyntheticEvent) {
        e.preventDefault()
        setIsEditable(true)
    } 

    function setDisabledForm () {
        setIsEditable(false)
        form.reset()
    } 
    
    const form = useForm<z.infer<typeof updateLocationSchema>>({
        resolver: zodResolver(updateLocationSchema),
        disabled: !isEditable,
        defaultValues: {
            name: Location.name,
            city: Location.city,
            CEP: Location.CEP,
            neighborhood: Location.neighborhood,
            street_name: Location.street_name,
            number: Location.number,
            description: Location.description ?? "",
            complement: Location.complement
        }
    })

    const refInputCEP = useMask({
        mask: 'ddddd-ddd',
        replacement: {
            d: /[0-9]/
        }
    })

    function handleReload() {
        window.location.reload()
    }

    function onSubmit (data: z.infer<typeof updateLocationSchema>) {

        console.log(data);
        
        api.patch(`/locations/${Location.id}`, data, {
            headers: {
                "Content-Type" : 'application/json'
            }
        }).then((response: AxiosResponse<ApiResponse>) => {
            console.log(response.data);
            
            toast({
                title: 'Localização atualizada com sucesso!!',
                description: 'A localização ' + Location.name + ' foi atualizada com sucesso.',
                action: <ToastAction altText="reload page" onClick={handleReload}>recarregar pagina</ToastAction> 
            })

        }).catch((error: AxiosError<ApiResponse>)=>{
            
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro',
                description: errorMessage //podia colocar em form error
            })

            console.log(error.response?.data);            
        })
    }

    return (
        <Dialog {...Props}>
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
                            <div className="grid md:grid-cols-2 gap-2 mb-2">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Nome<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="city"
                                    render={({field})=>(
                                        <FormItem>
                                             <FormLabel>Cidade<span className="text-red-400">*</span>:</FormLabel>
                                             <FormControl>
                                                <Input {...field}/>
                                             </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                
                                <FormField 
                                    control={form.control}
                                    name="street_name"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Nome da Rua<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="number"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Número<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input type="number" step={0} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="neighborhood"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Bairro<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="CEP"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>CEP<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input {...field} ref={refInputCEP}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="description"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Descrição:</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
                                            <FormDescription>
                                                {isEditable && (
                                                    'Descreva o Local'
                                                )}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="complement"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Complemento<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
                                            <FormDescription>
                                                {isEditable && (
                                                    'Exemplo: Perto do posto de saúde'
                                                )}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            
                            <DialogFooter>
                                {isEditable && (
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" variant="destructive" onClick={setDisabledForm}>
                                            Cancelar Edição
                                        </Button>
                                        <Button type="submit">
                                            Concluir Edição
                                        </Button>
                                    </div>
                                ) || (
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" variant="destructive">
                                            Deletar
                                        </Button>
                                        <Button type="button" onClick={setEditableForm}>
                                            Editar
                                        </Button>
                                    </div>
                                )}
                            </DialogFooter>
                        </form>
                    </Form>
            </DialogContent>
        </Dialog>
    )
}