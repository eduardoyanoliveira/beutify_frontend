import AutoComplete from '../../components/AutoComplete';
import Button from '../../components/Buttons/Button';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import Form from '../../components/FormComponents/Form';
import FormContainer from '../../components/FormComponents/FormContainer';
import FormDateLabel from '../../components/FormComponents/FormDateLabel';
import FormToggle from '../../components/FormComponents/FormToggle';
import InputComponent from '../../components/Inputs/Input';
import { IServiceType } from '../../domain/IServiceType';
import useServiceType from '../../hooks/useServiceTypes';


function ServiceTypeRegisterPage() {
    
    const {
       current,
       serviceTypes,
       setCurrent,
       handleChange,
       handleSubmit,
       resetForm
    } = useServiceType();


    return (
        <Form title='Tipos de Serviço'>
            <FormContainer>
                <AutoComplete
                    name='serviceTypes'
                    data={serviceTypes || []}
                    getItem={
                        (value: IServiceType) => setCurrent(
                            (prev : IServiceType) => prev = value
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
                getValue={(value: boolean) => setCurrent((prev: IServiceType) => prev = { ...prev, is_active: value })}
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

export default ServiceTypeRegisterPage;