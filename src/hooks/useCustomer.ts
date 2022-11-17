import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICustomer } from "../domain/ICustomer";
import { axiosInstance } from "../services/axios";

const baseCustomer : ICustomer = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    address: '',
    is_active: true
};


function useCustomer(customer: ICustomer) {
    const navigate = useNavigate();
    

    const [current, setCurrent] = useState<ICustomer>(
        customer 
        || baseCustomer
    );


    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);


    const resetForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        setCurrent((prev) => prev = baseCustomer);
    },[]);

    const handleSubmit = useCallback(async (e: FormEvent) => {

        e.preventDefault();

        if(!current.cpf){
            alert('Campo CPF é obrigatório');
            return;
        };

        if(!current.phone){
            alert('Campo Telefone é obrigatório');
            return;
        };

        if(!current.address){
            alert('Campo Endereço é obrigatório');
            return;
        };

        try{
            if(current.id){
                await axiosInstance(true).patch(`customers/${current.id}/`, current );
                alert('Cliente alterado com sucesso');
                navigate('/customers');
                window.location.reload();
            }else{
                await axiosInstance(true).post('customers/', { 
                    name: current.name, 
                    is_active: current.is_active,
                    cpf: current.cpf,
                    address: current.address,
                    email: current.email,
                    phone: current.phone
                });
                alert('Cliente cadastrado com sucesso');
                navigate('/customers');
                window.location.reload();
            };
        }catch(err){
            alert('O seguinte erro ocorreu ao enviar a requisição:\n' + err);
            // navigate('/');
            // window.location.reload();
        };
        
    },[current, navigate]);

    return {
        current,
        setCurrent,
        handleChange,
        handleSubmit,
        resetForm
    };

};

export default useCustomer;