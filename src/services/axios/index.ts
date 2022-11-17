import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthTokenError } from '../errors/AuthTokenError';

const BASE_URL = 'http://localhost:8000/api/';


export function axiosInstance(multipart?: boolean){

    let headers = {};

    if(multipart){
        headers = {
            Authorization:  localStorage.getItem('@token') ? `JWT ${localStorage.getItem('@token')}` : null,
            'Content-Type': 'multipart/form-data',
        };
    }else{
        headers = {
            Authorization: localStorage.getItem('@token') ? `JWT ${localStorage.getItem('@token')}` : null,
        };
    };

    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 4000,
        headers
    });

    instance.interceptors.response.use( (response : AxiosResponse) => {
        return response;
    }, (error : AxiosError) => {
        if(error.response?.status === 401){
            if(typeof window !== undefined){
                localStorage.removeItem('@token');
            }else{
                return Promise.reject( new AuthTokenError())
            }
        };

        return Promise.reject(error);
    });

    return instance;
};
