import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/utils/validation/product";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Category } from "@/types/Category";
import { useApi } from "@/hooks/use-api";
import { AxiosError, AxiosResponse } from "axios";
import { ApiErrorResponse, ApiResponse } from "@/types/ApiResponses";
import { Product } from "@/types/Product";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";


/**
 * Quantidade consegue ser menor que qtd minima
 */

export interface CreateProductDialogProps extends DialogProps {
    Categories: Category[]
}

export function CreateProductDialog({Categories, ...Props}:CreateProductDialogProps) {
    const api = useApi()

    const form = useForm<z.infer<typeof createProductSchema>>({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            name: '',
            price: 0,
            quantity: 0,
            minimum_quantity: 0,
        }
    })

    function handleReload() {
        window.location.reload()
    }

    function onSubmit(data: z.infer<typeof createProductSchema>) {
        console.log(data);
        
        api.post('products', data).then((response: AxiosResponse<Product>)=>{
            console.log(response.data);
            
            toast({
                title: 'Produto criado com sucesso!!',
                description: 'O produto ' + response.data.name + ' foi criado com sucesso.',
                action: <ToastAction altText="reload page" onClick={handleReload}>recarregar pagina</ToastAction> 
            })
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro',
                description: errorMessage //podia colocar em form error
            })

            console.log(error.response?.data);            
        })
    }

    function logger() {
        console.log(form.getValues());
        console.log(form);
        
    }

    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle onClick={logger}>
                        Criar um Produto
                    </DialogTitle>
                    <DialogDescription>
                        Preencha os dados abaixo:
                    </DialogDescription>
                </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
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
                                                <Textarea className="h-[78%] resize-none" {...field}/>
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
                                                        onChange={(e) => {
                                                            form.clearErrors('image')
                                                            form.setValue("image", e.target.files![0] as File)
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField 
                                    control={form.control}
                                    name="category_id"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Categoria<span className="text-red-400">*</span>:</FormLabel>
                                                <Select onValueChange={field.onChange}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder='Selecione uma categoria'/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {Categories.map((Category)=>(
                                                            <SelectItem value={Category.id.toString()}>{Category.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
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