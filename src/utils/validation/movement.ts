"use client"
import { z } from 'zod'

export const createMovementSchema = z.object({
    product: z.string({
        required_error: 'Por favor selecione um produto'
    })
})