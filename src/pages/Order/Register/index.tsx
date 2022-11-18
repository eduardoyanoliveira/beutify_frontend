import AutoComplete from '../../../components/AutoComplete';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import InputComponent from '../../../components/Inputs/Input';
import { ICustomer } from '../../../domain/ICustomer';
import { IOrder } from '../../../domain/IOrder';
import { IService } from '../../../domain/IService';
import useGet from '../../../hooks/common/useGet';
import { getByUrlId } from '../../../hooks/GetByUrlId/getByUrlId';
import useOrder from '../../../hooks/useOrder';


function OrderRegisterPage() {
    
    const { data: orders, isFetching } = useGet<IOrder[]>('orders');

    const  { item: order } = getByUrlId(orders as IOrder[]);

    const {
       current,
       services,
       customers,
       setCurrent,
       handleChange,
       handleSubmit,
       resetForm
    } = useOrder(order as IOrder);

    return (
        <Form title='Ordem de Serviço'>
            <FormContainer>
                <AutoComplete
                    name='orders'
                    data={orders || []}
                    getItem={
                        (value: IOrder) => setCurrent(
                            (prev : IOrder) => prev = value
                        )
                    }
                    fieldToDisplay={'id'}
                />
            </FormContainer>

            <FormContainer 
            justifyContent={current.customer ? 'space-between' : 'flex-end'}
            padding={'0 15px'}
            >
                {
                    current.customer && (
                    <FormDateLabel
                        dateLabel='Data de Cadastro'
                        date= {current.created_at 
                        ? new Date((current.created_at as Date)).toLocaleString('pt-BR')
                        : new Date().toLocaleString('pt-BR')
                        }
                    />
                    )
                }
            </FormContainer>

            <FormContainer>
                <AutoComplete 
                    name="customer" 
                    label="Cliente"
                    initialValue={current.customer ? current.customer.name : ''}
                    data={customers || []} 
                    fieldToDisplay='name'
                    getItem={(value: ICustomer) => setCurrent((prev) => prev = { ...prev, customer: value})}
                    placeholder={'Cliente'}
                    displayIcon={false}
                />
            </FormContainer>

            <FormContainer>
                <AutoComplete 
                    name="service" 
                    label="Serviço"
                    initialValue={current.service ? current.service.name : ''}
                    data={services || []} 
                    fieldToDisplay='name'
                    getItem={(value: IService) => setCurrent((prev) => prev = { ...prev, service: value})}
                    placeholder={'Serviço'}
                    displayIcon={false}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='schedule_date'
                    label='Data de Agendamento'
                    onChange={handleChange}
                    value={
                        current.schedule_date 
                        ? (current.schedule_date as Date).toLocaleString('pt-BR')
                        : ''
                    }
                    type={'datetime-local'}
                />
            </FormContainer>

            <FormContainer>
                {
                    current.customer && (
                        <>
                            <Button 
                                text="Gravar" 
                                backgroundColor={ButtonColors.success} 
                                margin='0 20px 0 0'
                                onClick={handleSubmit}
                            />
                            <Button 
                                text="Cancelar" 
                                backgroundColor={ButtonColors.secondary} 
                                onClick={resetForm}
                            />
                        </>
                    )
                }
            </FormContainer>
        </Form>
    );
};

export default OrderRegisterPage;