import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import IconButton from "../../components/Buttons/IconButton";
import Form from "../../components/FormComponents/Form";
import { Header } from "../../components/FormComponents/FormHeader/styles";
import SearchInputComponent from "../../components/Inputs/SearchInput";
import LinkComponent from "../../components/Link";
import ServicesList from "../../components/Lists/ServiceList/ServicesList";
import { IService } from "../../domain/IService";
import useGet from "../../hooks/common/useGet";
import useFilter from "../../hooks/useFilter";


const ServiceHome = () => {
    const navigate = useNavigate();

    const { data, isFetching, error } = useGet<IService[]>('services');

    const { 
        search, 
        setSearch, 
        filteredData 
    } = useFilter<IService>(data!, 'name');
    
    function handlePlusClick(){
        navigate('/services/register');
    };

    return (
        <Form title='Serviços'>
          
            <Header>
                <SearchInputComponent  
                    value={search || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    margin='0 25px 0 0'
                /> 
                <IconButton 
                    icon={<FaPlus/>} 
                    maxWidth={'50px'} 
                    backgroundColor={ButtonColors.primary}
                    onClick={handlePlusClick}
                />
            </Header>
            <ServicesList services={filteredData || []}/>
            <LinkComponent 
                to={"/service_types/register"}
                text={'Cadastrar tipo de serviço'}
            />
        </Form>
  
    );
};

export  default ServiceHome;