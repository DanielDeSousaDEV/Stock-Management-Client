import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogProps } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createLocationSchema } from "@/utils/validation/location";

import { useForm } from "react-hook-form";
import { useMask } from '@react-input/mask';
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export function CreateLocationDialog(Props: DialogProps) {

    const form = useForm<z.infer<typeof createLocationSchema>>({
        resolver: zodResolver(createLocationSchema),
        defaultValues: {
            name: '',
            city: '',
            CEP: '',
            neighborhood: '',
            street_name: '',
            number: 0,
            description: '',
            complement: ''
        }
    })

    const refInputCEP = useMask({
        mask: 'ddddd-ddd',
        replacement: {
            d: /[0-9]/
        }
    })

    const [isEditable, setIsEditable] = useState<boolean>(false)
    
    // const [possibleStates, setPossibleStates] = useState<AxiosResponse>()
    // useEffect(()=>{
    //     axios.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response: AxiosResponse<State[]>)=>{
    //         console.log(response);
    //         setPossibleStates(response);
    //     })
    // }, [])

    function onSubmit (data: z.infer<typeof createLocationSchema>) {
        toast({
            title: 'Deu submit',
            duration: 1000,
            description: (
                <pre>
                    <code>
                        {JSON.stringify(form.getValues(), null, 4)}
                    </code>
                </pre>
            )
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
                            <div className="grid grid-cols-2 gap-2 mb-2">
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
                                            <FormDescription>Descreva o Local</FormDescription>
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
                                            <FormDescription>Exemplo: Perto do posto de saúde</FormDescription>
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