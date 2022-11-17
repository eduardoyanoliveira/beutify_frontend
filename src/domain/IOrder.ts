import { IService } from "./IService";
import { ICustomer } from './ICustomer';

export interface IOrder {
    id?: number,
    customer: ICustomer | null,
    service: IService | null,
    schedule_date: Date | null,
    processing_date?: Date | null,
    created_at?: Date,
    updated_at?: Date,
};
