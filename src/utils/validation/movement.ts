import { z } from 'zod'

export const createMovementSchema = z.object({
    product: z.string({required_error: 'Por favor selecione um produto'}),
    localization: z.string({required_error: 'Por favor selecione uma localização'}),
    quantity: z.preprocess(value=> parseFloat(value as string),
        z.number({
            required_error: 'Por favor informe a quantidade',
            message: 'Por favor digite um número'
        })
        .positive({message: 'Digite um valor inteiro'})),
    movementType: z.enum([
        'entry',
        'output',
        'adjustment'
    ], {message: 'Por favor selecione um valor valido'}),
    description: z.string()
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'})
        .optional()
})