import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AutoComplete from '../../../components/AutoComplete';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import IconButton from '../../../components/Buttons/IconButton';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FormToggle from '../../../components/FormComponents/FormToggle';
import InputComponent from '../../../components/Inputs/Input';
import { IService } from '../../../domain/IService';
import { IServiceType } from '../../../domain/IServiceType';
import useGet from '../../../hooks/common/useGet';
import { getByUrlId } from '../../../hooks/GetByUrlId/getByUrlId';
import useService from '../../../hooks/useService';


function ServiceRegisterPage() {
    
    const navigate = useNavigate();

    const { data: services, isFetching } = useGet<IService[]>('services');

    const  { item: service} = getByUrlId(services as IService[]);

    const {
       current,
       serviceTypes,
       setCurrent,
       handleChange,
       handleSubmit,
       resetForm
    } = useService(service as IService);

    return (
        <Form title='Serviços'>
            <FormContainer>
                <AutoComplete
                    name='services'
                    data={services || []}
                    getItem={
                        (value: IService) => setCurrent(
                            (prev : IService) => prev = value
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
                getValue={(value: boolean) => setCurrent((prev: IService) => prev = { ...prev, is_active: value })}
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

            <FormContainer position='relative'>
                <AutoComplete 
                    name="service_types" 
                    label="Tipo de Serviço"
                    initialValue={current.type ? current.type.name : ''}
                    data={serviceTypes || []} 
                    fieldToDisplay='name'
                    getItem={(value: IServiceType) => setCurrent((prev) => prev = { ...prev, type: value})}
                    placeholder={'Tipo'}
                    displayIcon={false}
                />

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 
                    'column', 
                    justifyContent: 'flex-end',
                    width: '50px',
                    marginLeft: '10px'
                }}>
                    <IconButton 
                        icon={<FaPlus/>} 
                        maxWidth={'50px'} 
                        backgroundColor={ButtonColors.primary}
                        onClick={() =>  navigate('/service_types/register')}
                    />
                </div>

            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='cost'
                    label='Custo'
                    onChange={handleChange}
                    value={current.cost || ''}
                    type={'number'}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent
                    name='price'
                    label='Preço'
                    onChange={handleChange}
                    value={current.price || ''}
                    type={'number'}
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

export default ServiceRegisterPage;