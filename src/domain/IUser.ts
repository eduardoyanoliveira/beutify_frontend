export interface IUser {
    id?: number,
    email: string,
    username: string,
    image?: string | File,
    created_at?: Date,
    updated_at?: Date,
    is_active: boolean
};