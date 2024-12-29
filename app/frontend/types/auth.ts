export interface User {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    password_confirmation?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}