import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICustomer } from "../domain/ICustomer";
import { IOrder } from "../domain/IOrder";
import { IService } from "../domain/IService";
import { axiosInstance } from "../services/axios";
import useGet from "./common/useGet";

const baseOrder : IOrder = {
    customer: null,
    service: null,
    schedule_date: null,
    processing_date: null
};


function useOrder(order: IOrder) {
    const navigate = useNavigate();
    

    const { data: services } = useGet<IService[]>('services');
    const { data: customers } = useGet<ICustomer[]>('customers');

    const [current, setCurrent] = useState<IOrder>(
        order 
        || baseOrder
    );

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);


    const resetForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        setCurrent((prev) => prev = baseOrder);
    },[]);

    const handleSubmit = useCallback(async (e: FormEvent) => {

        e.preventDefault();

        if(!current.customer){
            alert('Cliente é obrigatório');
            return;
        };

        if(!current.service){
            alert('Serviço é obrigatório');
            return;
        };

        if(!current.schedule_date){
            alert('Agendamento obrigatório');
            return;
        };

        const newOrder = {
            id: current.id,
            customer: current.customer,
            service: current.service,
            schedule_date: current.schedule_date
        }

        try{
            if(current.id){
                await axiosInstance().patch(`orders/${current.id}/`, newOrder );
                alert('Ordem de serviço alterada com sucesso');
                window.location.reload();
            }else{
                await axiosInstance().post('orders/', { 
                    newOrder
                });
                alert('Ordem de serviço cadastrada com sucesso');
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
        services,
        customers,
        setCurrent,
        handleChange,
        handleSubmit,
        resetForm
    };

};

export default useOrder;