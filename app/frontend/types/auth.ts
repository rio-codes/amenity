// include authentication state, user, login credentials, register credentials, and auth response

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
export interface Apartment {
    id: number;
    name: string;
    address: string;
    // add number of bedrooms and bathrooms (can be 1.5, 2.5, etc.)
    bedrooms: number;
    bathrooms: number;
    // add rent, fees and security deposit
    rent: number;
    fees: number;
    deposit: number;
    // pets allowed can be cats, dogs, or both and may include a fee and number of pets allowed
    pets: string;
    pet_fee: number;
    pet_deposit: number;
    available: boolean;
    //add
}
export interface ApartmentState {
    apartments: Apartment[];
    apartment: Apartment | null;
}
export interface ApartmentResponse {
    apartment: Apartment;
}
export interface ApartmentQuery {
    name?: string;
    address?: string;
    bedrooms?: number;
    bathrooms?: number;
    rent?: number;
    fees?: number;
    deposit?: number;
    pets?: string;
    pet_fee?: number;
    pet_deposit?: number;
    available?: boolean;
}
export interface ApartmentCreate {
    name: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    rent: number;
    fees: number;
    deposit: number;
    pets: string;
    pet_fee: number;
    pet_deposit: number;
    available: boolean;
}
export interface ApartmentUpdate {
    id: number;
    name?: string;
    address?: string;
    bedrooms?: number;
    bathrooms?: number;
    rent?: number;
    fees?: number;
    deposit?: number;
    pets?: string;
    pet_fee?: number;
    pet_deposit?: number;
    available?: boolean;
}
export interface ApartmentDelete {
    id: number;
}
export interface ApartmentFilter {
    name?: string;
    address?: string;
    bedrooms?: number;
    bathrooms?: number;
    rent?: number;
    fees?: number;
    deposit?: number;
    pets?: string;
    pet_fee?: number;
    pet_deposit?: number;
    available?: boolean;
}
export interface ApartmentSort {
    by: string;
    desc: boolean;
}
export interface ApartmentPaginate {
    page: number;
    limit: number;
}
export interface ApartmentList {
    filter: ApartmentFilter;
    sort: ApartmentSort;
    paginate: ApartmentPaginate;
}
export interface ApartmentModule {
    apartments: Apartment[];
    apartment: Apartment | null;
    list: ApartmentList;
}
export interface RootState {
    apartment: ApartmentModule;
    auth: AuthState;
}
export interface AuthModule {
    user: User | null;
    token: string | null;
}
