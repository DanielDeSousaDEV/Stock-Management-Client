export type ApiResponse = {
    error: boolean,
    message: string,
}    
export type ApiErrorResponse = ApiResponse & {
    errors: ValidationError[],
}

export type ApiAuthResponse = ApiResponse & {
    token: string,
}

export type ValidationError = {
    [key: string]: string[]
}