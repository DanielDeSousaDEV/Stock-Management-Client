import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string({required_error: 'Por favor insira seu nome'})
        .min(2,{message: 'O nome deve possui pelos menos duas letras'})
        .max(120, {message: 'O nome deve conter no máximo 120 caracteres'}),
    email: z.string({required_error: 'Por favor informe seu Email'})
        .email({message: 'Por favor informe um Email Valido'}),
    password: z.string({required_error: 'Por favor crie uma senha para utilizar o sistema'})
        .min(5, {message: 'Sua senha deve ter pelo menos 5 caracteres'})
})