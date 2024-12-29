import z from 'zod'

export const createProductSchema = z.object({
    name: z.string({required_error: 'Por favor informe o nome do produto'})
        .min(2, {message: 'O nome do produto deve possui no minimo dois caracteres'}),
    // image: z.fi
    price: z.preprocess(value=> parseFloat(value as string),
            z.number({
                required_error: 'Por favor informe o preço unitario do produto',
                message: 'Por favor digite um número'
            })
            .int({message: 'Por favor digite um valor inteiro'})
            .positive({message: 'Digite um valor inteiro'})),
    description: z.string()
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'})
        .optional()
})