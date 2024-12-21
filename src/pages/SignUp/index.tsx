import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@Utils/validation/signUp"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { z } from "zod"

export function SignUp() {

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            name: '',
            password: '',
        }
    })

    function onSubmit(data: z.infer<typeof signUpSchema>) {
        console.log('deu certo');
        console.log(data);
    }

    return (
        <div className="bg-slate-50 rounded-lg p-4 lg:min-w-[450px] min-w-96 text-center">
            <h2 className="font-bold text-2xl mb-6">Cadastro</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
                    <div className="space-y-1 mb-6">
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Nome:</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Senha:</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="block w-3/6 mx-auto mb-2">Cadastrar</Button>
                    <p className="text-center text-sm leading-none">
                        Já Possui uma conta!
                        <Link to="/Login">
                            <p className="text-blue-800 hover:underline">
                                Logar-se
                            </p>
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    )
}