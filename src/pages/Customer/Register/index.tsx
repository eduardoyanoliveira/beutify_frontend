import { useNavigate } from 'react-router-dom';
import AutoComplete from '../../../components/AutoComplete';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FormToggle from '../../../components/FormComponents/FormToggle';
import InputComponent from '../../../components/Inputs/Input';
import { ICustomer } from '../../../domain/ICustomer';
import useGet from '../../../hooks/common/useGet';
import { getByUrlId } from '../../../hooks/GetByUrlId/getByUrlId';
import useCustomer from '../../../hooks/useCustomer';


function CustomerRegisterPage() {
    
    const navigate = useNavigate();

    const { data: customers, isFetching } = useGet<ICustomer[]>('customers');

    const  { item: customer } = getByUrlId(customers as ICustomer[]);

    const {
       current,
       setCurrent,
       handleChange,
       handleSubmit,
       resetForm
    } = useCustomer(customer as ICustomer);

    return (
        <Form title='Clientes'>
            <FormContainer>
                <AutoComplete
                    name='services'
                    data={customers || []}
                    getItem={
                        (value: ICustomer) => setCurrent(
                            (prev : ICustomer) => prev = value
                        )
                    }
                    fieldToDisplay={'name'}
                />
            </FormContainer>

        <FormContainer 
          justifyContent={current.name ? 'space-between' : 'flex-end'}
          padding={'0 15px'}
        >
            {
                current.name && (
                <FormDateLabel
                    dateLabel='Data de Cadastro'
                    date= {current.created_at 
                    ? new Date((current.created_at as Date)).toLocaleString('pt-BR')
                    : new Date().toLocaleString('pt-BR')
                    }
                />
                )
            }
            <FormToggle 
                id='toggle' 
                toggleLabel='Ativo?' 
                initialValue={current?.is_active} 
                getValue={(value: boolean) => setCurrent((prev: ICustomer) => prev = { ...prev, is_active: value })}
            />
      </FormContainer>

            <FormContainer>
                <InputComponent
                    name='name'
                    label='Nome'
                    onChange={handleChange}
                    value={current.name || ''}
                    type={'text'}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='cpf'
                    label='CPF'
                    onChange={handleChange}
                    value={current.cpf || ''}
                    type={'text'}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='email'
                    label='Email'
                    onChange={handleChange}
                    value={current.email || ''}
                    type={'email'}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='phone'
                    label='Telefone'
                    onChange={handleChange}
                    value={current.phone || ''}
                    type={'phone'}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='address'
                    label='Endereço'
                    onChange={handleChange}
                    value={current.address || ''}
                    type={'text'}
                />
            </FormContainer>

            <FormContainer>
                {
                    current.name && (
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

export default CustomerRegisterPage;