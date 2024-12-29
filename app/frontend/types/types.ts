export interface User {
    id: number
    name: string
    email: string
    moveInDate: string // Add this line
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    email: string
    password: string
}

export interface RegisterCredentials extends LoginCredentials {
    password_confirmation?: string;
}