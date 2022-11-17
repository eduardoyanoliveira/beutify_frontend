import { 
    ListContainer,
    Row,
    Title,
    Label, 
    Value, 
    EditIconContainer 
} from '../styles';

import { ICustomer } from '../../../domain/ICustomer';
import { MdOutlineEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface ICustomersListprops {
    customers: ICustomer[]
};

const CustomersList: React.FC<ICustomersListprops> = ({ customers }) => {

    const navigate = useNavigate();

    return (
        <ListContainer>
            {
                customers?.map((item) => {
                    return (
                        <Row 
                            key={item.id} 
                            isActive={item.is_active} 
                            screenOverflow={customers.length > 6}
                            minWidth={'670px'}
                        >
                            <Title isActive={item.is_active}> 
                                {item.name} 
                            </Title>
                            <Label>
                                CPF:
                                <Value>
                                    {item.cpf}
                                </Value>
                            </Label>

                            <Label>
                                Email:
                                <Value>
                                    {item.email}
                                </Value>
                            </Label>
                            <EditIconContainer 
                                onClick={() => { navigate(`/customers/register/${item.id}`) }}
                            >
                                <MdOutlineEdit/>
                            </EditIconContainer>
                        </Row>
                    );
                })
            }
        </ListContainer>
    );
};

export default CustomersList;