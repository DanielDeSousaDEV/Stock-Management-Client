import { useApi } from "@/hooks/use-api";
import { toast } from "@/hooks/use-toast";
import { ApiAuthResponse, ApiErrorResponse, ApiResponse } from "@/types/ApiResponses";
import { Button } from "@Components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { loginSchema } from "@Utils/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, redirect, useNavigate } from "react-router";
import { z } from "zod";

export function Login() {
    const api = useApi();

    const navigate = useNavigate()

    //quando eu logo ele pegar o antigo api
    //quando eu vou e volto pelo o navigate ele perserva o api

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function onSubmit(data: z.infer<typeof loginSchema>) {
        console.log(data);
        api.post('/login', data).then((response: AxiosResponse<ApiAuthResponse>)=>{
            console.log('certo');
            console.log(response.data);
            localStorage.setItem('ApiToken', response.data.token)   

            toast({
                title: 'Logado com sucesso!',
                description: 'Aguarde o redirecionamento...'
            });
            
            setTimeout(()=>{
                navigate('/')
            }, 3000)
            
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            console.log('erro');
            
            const errorMessage = error.response?.data?.message || error.message || 'Erro desconhecido';

            toast({
                title: 'Ocorreu um erro',
                description: errorMessage
            })            
        })
    }

    function logger() {
        api.post('/logout', { email: 'daniel@teste.com', password: 'dandan' }, {withCredentials: true}).then((response: AxiosResponse<ApiAuthResponse>)=>{
            localStorage.removeItem('ApiToken')
            console.log(response);
            
        })
    }

    return (
        <div className="bg-slate-50 rounded-lg p-4 lg:min-w-[450px] min-w-96 text-center">
            <h2 className="font-bold text-2xl mb-6">Login</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
                    <div className="space-y-1 mb-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field}/>
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
                    <Button type="submit" className="block w-3/6 mx-auto mb-2">Logar</Button>
                    <p className="text-center text-sm leading-none">
                        Não Possui uma conta!
                        <Link to="/SignUp">
                            <p className="text-blue-800 hover:underline">
                                Cadastre-se
                            </p>
                        </Link>
                    </p>
                </form>
            </Form>
            <button onClick={logger}>teste logout</button>
        </div>
    )
}