import { useForm } from "react-hook-form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLocationSchema } from "@/utils/validation/location";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { DialogProps } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function LocationDetailsDialog(Props: DialogProps) {
    const form = useForm<z.infer<typeof createLocationSchema>>({
        resolver: zodResolver(createLocationSchema),
        defaultValues: {

        }
    })

    function onSubmit (data: z.infer<typeof createLocationSchema>) {
        toast({
            title: 'deu submit',
            description: 'oskey',
            variant: 'primary',
            content: JSON.stringify(form.getValues(), null, 4)
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
                                {/* <div className="bg-red-200">name</div> */}
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

                                {/* <div className="bg-red-200">city</div> */}
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
                                
                                {/* <div className="bg-red-200">streetname</div> */}
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

                                {/* <div className="bg-red-200">number</div> */}
                                <FormField
                                    control={form.control}
                                    name="number"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Número<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input type="number" min={0} step={0} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <div className="bg-red-200">bairro</div> */}
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

                                {/* <div className="bg-red-200">CEP</div> */}
                                <FormField 
                                    control={form.control}
                                    name="CEP"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>CEP<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input {...field}/> 
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <div className="bg-red-200 row-span-2 h-full">description</div> */}
                                <FormField 
                                    control={form.control}
                                    name="description"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Descrição<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <div className="bg-red-200 row-span-2 h-full">Complement</div>perto do posto */}
                                <FormField 
                                    control={form.control}
                                    name="complement"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Complemento<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
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