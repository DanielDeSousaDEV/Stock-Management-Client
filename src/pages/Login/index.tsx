import { toast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { ApiAuthResponse, ApiErrorResponse, ApiResponse } from "@/types/ApiResponses";
import { Button } from "@Components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { loginSchema } from "@Utils/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";

export function Login() {
    const navigate = useNavigate()

    useEffect(()=>{//tira o api do inicio
        // api.get('/sanctum/csrf-cookie',{
        //     baseURL: 'http://127.0.0.1:8000/',
        //     url: 'sanctum/csrf-cookie',
        //     withCredentials: true,
        //     withXSRFToken: true
        // }).then((response: AxiosResponse)=>{
        //     console.log('deu certo o csrf');
        //     console.log(response);
        // }).catch((error: AxiosError)=>{
        //     console.log('deu errado o csrf');
        //     console.log(error);
        // })
    }, [])

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
                description: 'Aguarde o redirecionamento'
            })
            
            setTimeout(()=>{
                navigate('/')
            }, 3000)    
            
        }).catch((error: AxiosError<ApiErrorResponse>)=>{
            console.log('erro');
            console.log(error.response?.data);
        })
    }

    function logger() {
        api.post('/logout', { email: 'daniel@teste.com', password: 'dandan' }, {withCredentials: true}).then((response: AxiosResponse<ApiAuthResponse>)=>{
            // localStorage.setItem('ApiToken', response.data.token)
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