import { z } from "zod";

export const createLocationSchema = z.object({
    name: z.string({required_error: 'Por favor informe o nome da localização'})
        .min(2, {message: 'O nome da localização deve possuir mais que 2 letras'}),
    description: z.string()
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'})
        .optional(),
    street_name: z.string({required_error: 'Por favor informe o nome da rua da localização'})
        .min(2, {message: 'O nome da rua localização deve possuir mais que 2 letras'}),
    number: z.preprocess(value => parseFloat(value as string), 
        z.number({
            required_error: 'Por favor informe o numero referente á localização',
            message: 'Por favor informe o numero referente á localização'
        })
        .int({message: 'Por favor informe um numero inteiro'})
        .positive('Por favor informe maior que zero')),
    complement: z.string({required_error: 'Por favor informe um completo para a localização'})
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'}),
    neighborhood: z.string({required_error: 'Por favor informe o bairro da localização'})
        .min(2, {message: 'O nome do bairro deve possuir 2 letras'}),
    // state: z.string({required_error: 'Por favor informe o estado da localização'})
    //     .min(2, {message: 'O nome do estado deve possuir mais que 2 letras'})           
    //     .max(2, {message: 'O nome do bairro deve possuir 2 letras'}),
    city: z.string({required_error: 'Por favor informe a cidade da localização'})
        .min(2, {message: 'O nome da cidade deve possuir mais que 2 letras'}),
    CEP: z.string({required_error: 'Por favor informe o CEP da localização'})
        .regex(/^\d{5}-\d{3}$/, {message: 'O CEP não possui um formato valido'})
})