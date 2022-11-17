export interface ICustomer {
    id?: number,
    name: string,
    cpf: string,
    email: string,
    phone: string,
    address: string,
    created_at?: Date,
    updated_at?: Date,
    is_active: boolean
};
