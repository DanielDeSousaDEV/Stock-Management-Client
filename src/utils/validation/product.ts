import z from 'zod'

const MAX_FILE_SIZE = 8000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const createProductSchema = z.object({
    name: z.string({required_error: 'Por favor informe o nome do produto'})
        .min(2, {message: 'O nome do produto deve possui no minimo dois caracteres'}),
    image: z.any()
        .refine((file: File) => {
            console.log(file);
            
            return file?.size > MAX_FILE_SIZE //ta dando erro aqui
        }, 'A imagem deve ser menor que 8MB')
        .refine((file: File) => {
            return ACCEPTED_IMAGE_TYPES.includes(file?.type)
        }, 'Unicos formatos suportados .jpg, .jpeg, .png e .webp'),
    price: z.preprocess(value=> parseFloat(value as string),
        z.number({
            required_error: 'Por favor informe o preço unitario do produto',
            message: 'Por favor digite um número'
        })
        .positive({message: 'Digite um valor positivo'})
        .int({message: 'Por favor digite um valor inteiro'})),
    description: z.string()
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'})
        .optional(),
    quantity: z.preprocess(value=> parseFloat(value as string),
        z.number({required_error: 'Por favor digite a quatidade atual do produto no estoque'})
        .positive({message: 'A quantidade deve ser maior que zero'})
        .int({message: 'A quatidade deve ser um número inteiro'})),
    minimum_quantity: z.preprocess(value=> parseFloat(value as string),
        z.number({required_error: 'Por favor digite a quatidade atual do produto no estoque'})
        .positive({message: 'A quantidade deve ser maior que zero'})
        .int({message: 'A quatidade deve ser um número inteiro'})),
    category: z.number({required_error: 'Por favor informe a qual categoria esse produto pertence'})
        .positive()
        .int()
})