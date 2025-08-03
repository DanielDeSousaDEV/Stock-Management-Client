import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Circle from "@uiw/react-color-circle";
import { DialogProps } from "@radix-ui/react-dialog";
import { createCategorySchema } from "@/utils/validation/category";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useApi } from "@/hooks/use-api";
import { AxiosError, AxiosResponse } from "axios";
import { ApiErrorResponse } from "@/types/ApiResponses";
import { ToastAction } from "../ui/toast";
import { toast } from "@/hooks/use-toast";
import { Category } from "@/types/Category";

export function CreateCategoryDialog ({...Props}: DialogProps) {
    const api = useApi()

    const form = useForm<z.infer<typeof createCategorySchema>>({
        resolver: zodResolver(createCategorySchema),
        defaultValues: {
            name: ''
        }
    })

    const availableColors = [
        '#EBBAFF',
        '#BFBAFF',
        '#BADFFF',
        '#BAFDFF',
        '#BAFFDF',
        '#BFFFBA',
        '#F8FFBA',
        '#FFE4BA',
        '#FFBCBA',
        '#FFBADF',
        '#FFBAEE',
    ]

    function handleReload() {
        window.location.reload()
    }

    function onSubmit(data: z.infer<typeof createCategorySchema>) {
        api.post('categories', data).then((response: AxiosResponse<Category>)=>{
            console.log(response);
            
            toast({
                title: 'Categoria criada com sucesso!',
                description: 'A categoria ' + response.data.name + ' foi criada.',
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
    
    return (
        <Dialog {...Props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar uma Categoria</DialogTitle>
                    <DialogDescription>Preencha os dados abaixo:</DialogDescription>
                </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2 mb-2">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Nome<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field}/>
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
                                                <Textarea rows={5} className="resize-none" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="hex_color"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Selecione uma cor:<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Circle 
                                                    colors={availableColors}
                                                    color={field.value}
                                                    onChange={(color)=>{
                                                        form.clearErrors('hex_color')
                                                        form.setValue('hex_color', color.hex)
                                                    }}
                                                />
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
                                        Criar Categoria
                                    </Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </Form>

            </DialogContent>
        </Dialog>
    )
}