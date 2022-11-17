import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import IconButton from "../../components/Buttons/IconButton";
import Form from "../../components/FormComponents/Form";
import { Header } from "../../components/FormComponents/FormHeader/styles";
import SearchInputComponent from "../../components/Inputs/SearchInput";
import CustomersList from "../../components/Lists/CustomersList/CustomersList";
import { ICustomer } from "../../domain/ICustomer";
import useGet from "../../hooks/common/useGet";
import useFilter from "../../hooks/useFilter";


const CustomerHome = () => {
    const navigate = useNavigate();

    const { data, isFetching, error } = useGet<ICustomer[]>('customers');

    const { 
        search, 
        setSearch, 
        filteredData 
    } = useFilter<ICustomer>(data!, 'name');
    
    function handlePlusClick(){
        navigate('/customers/register');
    };

    return (
        <Form title='Clientes'>
          
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
            <CustomersList customers={filteredData || []}/>
        </Form>
  
    );
};

export  default CustomerHome;