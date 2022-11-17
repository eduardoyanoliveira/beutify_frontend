import { IServiceType } from "./IServiceType"

export interface IService {
    id?: number,
    name: string,
    cost: number,
    price: number,
    type: IServiceType | null,
    created_at?: Date,
    updated_at?: Date,
    is_active: boolean
};
