import { 
    ListContainer,
    Row,
    Title,
    Label, 
    Value, 
} from '../styles';


import { IOrder } from '../../../domain/IOrder';

interface IOrdersListprops {
    orders: IOrder[]
};

const OrdersList: React.FC<IOrdersListprops> = ({ orders }) => {


    return (
        <ListContainer>
            {
                orders?.map((item) => {
                    const date = new Date(item.schedule_date || '');
                    const isLate = date < new Date();
                    return (
                        <Row 
                            key={item.id} 
                            isActive={!item.processing_date} 
                            screenOverflow={orders.length > 6}
                            minWidth={'670px'}
                        >
                            <Label>
                                <Value>
                                    {item.customer?.name } 
                                </Value>
                            </Label>

                            <Label>
                                <Value>
                                    { item.service?.name } 
                                </Value>
                            </Label>

                            <Label>
                                <Value warning={isLate}>
                                    {new Date(item.schedule_date || '').toLocaleString('pt-BR') } 
                                </Value>
                            </Label>
                        </Row>
                    );
                })
            }
        </ListContainer>
    );
};

export default OrdersList;