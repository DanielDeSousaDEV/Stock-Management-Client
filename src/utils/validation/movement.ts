"use client"
import { z } from 'zod'

export const createMovementSchema = z.object({
    product: z.number({
        message: "meu fi coloque um número pfv"
    }).positive({
        message: "meu fi coloque um número positivo pfv"
    })
})