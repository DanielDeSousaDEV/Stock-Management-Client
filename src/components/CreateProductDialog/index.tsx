import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/utils/validation/product";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function CreateProductDialog({...Props}:DialogProps) {
    const form = useForm<z.infer<typeof createProductSchema>>({
        resolver: zodResolver(createProductSchema),
        defaultValues: {

        }
    })

    function onSubmit(data: z.infer<typeof createProductSchema>) {
        console.log(data);
        
    }

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
                                    name="price"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Preço unitário<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input type="number" min={0} step={0.01} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="description"
                                    render={({field})=>(
                                        <FormItem className="row-span-2">
                                            <FormLabel>Descrição:</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
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
                                            <FormControl>
                                                <Input type="number" min={0} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="minimum_quantity"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Quantidade minima<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input type="number" min={0} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="image"
                                    render={({field})=>{
                                        const {value, ...rest} = field

                                        return (
                                            <FormItem>
                                                <FormLabel>Imagem<span className="text-red-400">*</span>:</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="file" 
                                                        {...rest}
                                                        onChange={(e) => form.setValue("image", e.target.files as FileList)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                    
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
                        </form>    
                    </Form>    
            </DialogContent>
        </Dialog>
    )
}