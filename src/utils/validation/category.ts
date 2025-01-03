import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string({
        required_error: 'Por favor digite um nome para categoria'
    })
    .min(2, 'O nome da categoria deve possuir mais que 2 letras'),
    description: z.string()
        .max(120, {message: 'A descrição deve ter menos que 120 caracteres'})
        .optional(),
    color_hex: z.string({
        required_error: 'Por favor selecione uma cor para categoria'
    })
})