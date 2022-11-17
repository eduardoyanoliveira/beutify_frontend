import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IService } from "../domain/IService";
import { IServiceType } from "../domain/IServiceType";
import { axiosInstance } from "../services/axios";
import useGet from "./common/useGet";

const baseService : IService = {
    name: '',
    cost: 0,
    price: 0,
    type: null,
    is_active: true
};


function useService(service: IService) {
    const navigate = useNavigate();
    

    const { data: serviceTypes } = useGet<IServiceType[]>('service_types');

    const [current, setCurrent] = useState<IService>(
        service 
        || baseService
    );

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);


    const resetForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        setCurrent((prev) => prev = baseService);
    },[]);

    const handleSubmit = useCallback(async (e: FormEvent) => {

        e.preventDefault();

        if(!current.cost){
            alert('Custo do serviço é obrigatório');
            return;
        };

        if(!current.price){
            alert('Preço do serviço é obrigatório');
            return;
        };

        try{
            if(current.id){
                await axiosInstance(true).patch(`services/${current.id}/`, current );
                alert('Serviço alterado com sucesso');
                navigate('/services');
                window.location.reload();
            }else{
                await axiosInstance(true).post('services/', { 
                    name: current.name, 
                    is_active: current.is_active,
                    cost: current.cost,
                    price: current.price,
                    type: current.type?.id
                });
                alert('Serviço cadastrado com sucesso');
                navigate('/services');
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
        serviceTypes,
        setCurrent,
        handleChange,
        handleSubmit,
        resetForm
    };

};


export default useService;