import { 
    ListContainer,
    Row,
    Title,
    Label, 
    Value, 
    EditIconContainer 
} from '../styles';

import { IService } from '../../../domain/IService';
import { MdOutlineEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface IServicesListprops {
    services: IService[]
};

const ServicesList: React.FC<IServicesListprops> = ({ services }) => {

    const navigate = useNavigate();

    return (
        <ListContainer>
            {
                services?.map((item) => {
                    return (
                        <Row key={item.id} isActive={item.is_active} screenOverflow={services.length > 6}>
                            <Title isActive={item.is_active}> 
                                {item.name} 
                            </Title>
                            <Label>
                                Preço:
                                <Value>
                                    R${item.price}
                                </Value>
                            </Label>
                            <EditIconContainer 
                                onClick={() => { navigate(`/services/register/${item.id}`) }}
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

export default ServicesList;