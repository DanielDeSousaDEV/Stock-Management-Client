import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string()
        .email({message: 'Por favor informe um email valído'}),
    password: z.string()
        .min(5, {message: 'A senha deve conter mais que 5 caracteres'})
})