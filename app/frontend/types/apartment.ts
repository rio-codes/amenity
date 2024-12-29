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