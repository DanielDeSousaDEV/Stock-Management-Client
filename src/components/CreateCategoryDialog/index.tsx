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

export function CreateCategoryDialog ({...Props}: DialogProps) {
    const form = useForm<z.infer<typeof createCategorySchema>>({
        resolver: zodResolver(createCategorySchema),
        defaultValues: {
            name: ''
        }
    })

    function onSubmit(data: z.infer<typeof createCategorySchema>) {
        console.log('deu certo');
        console.log(data);
    }

    function logger() {
        console.log(form.getValues());
        console.log(form.getFieldState("name"))
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
                                    name="color_hex"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Selecione uma cor:<span className="text-red-400">*</span>:</FormLabel>
                                            <FormControl>
                                                <Circle 
                                                    colors={[
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
                                                    ]}
                                                    color={field.value}
                                                    onChange={(color)=>{
                                                        form.clearErrors('color_hex')
                                                        form.setValue('color_hex', color.hex)
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