import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IServiceType } from "../domain/IServiceType";
import { axiosInstance } from "../services/axios";
import useGet from "./common/useGet";

const baseServiceType : IServiceType = {
    name: '',
    is_active: true
};


function useServiceType() {
    const navigate = useNavigate();
    

    const { data: serviceTypes } = useGet<IServiceType[]>('service_types');

    const [current, setCurrent] = useState<IServiceType>(baseServiceType);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);


    const resetForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        setCurrent((prev) => prev = baseServiceType);
    },[]);

    const handleSubmit = useCallback(async (e: FormEvent) => {

        e.preventDefault();

        try{
            if(current.id){
                await axiosInstance(true).patch(`service_types/${current.id}/`, current );
                alert('Tipo de serviço alterado com sucesso');
                navigate('/services/register');
                window.location.reload();
            }else{
                await axiosInstance(true).post('service_types/', { 
                    name: current.name, 
                });
                alert('Tipo de serviço cadastrado com sucesso');
                navigate('/services/register');
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

export default useServiceType;