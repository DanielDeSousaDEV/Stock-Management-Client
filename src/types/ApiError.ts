export type ApiError = {
    error: boolean,
    message: string,
    errors?: ValidationError[]
}

export type ValidationError = {
    [key: string]: string[]
}