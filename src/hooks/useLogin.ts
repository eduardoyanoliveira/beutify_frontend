import jwtDecode from 'jwt-decode';
import React, { useState, FormEvent } from 'react'
import { axiosInstance } from '../services/axios';

interface IUserCredentials {
    email: string,
    password: string,
}; 

interface IToken  {
    exp: number,
    iat: number,
    jti: string,
    token_type: string
    user_id: number
};


function useLogin() {

    const [current, setCurrent] = useState<IUserCredentials>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        const { email, password } = current;

        if(!email || !password){
            alert('Todos os campos deste formulário são obrigatórios!');
            return;
        };

        try{
            const { data } = await axiosInstance().post('token/', current);
            localStorage.setItem('@token', data.access);

            // Get The user from the user_id of the token and stores the user on the localstorage
            const tokenData : IToken = jwtDecode(data.access);
            const { data: user } = await axiosInstance().get('users/' + tokenData.user_id);

            localStorage.setItem('@user',JSON.stringify(user));
            window.location.reload();

        }catch(err){
            alert('Não foi possível realizar o login, confira os dados! ');
            console.log(err);
        };
        
        
    };

    return { 
        current, 
        handleChange,
        handleSubmit
    };
};

export default useLogin;