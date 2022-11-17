import Form from "../../components/FormComponents/Form";
import OrdersList from "../../components/Lists/OrdersList/OrdersList";
import { IOrder } from "../../domain/IOrder";
import useGet from "../../hooks/common/useGet";

function Home() {

    const { data: orders, isFetching } = useGet<IOrder[]>('orders');
    return (
        <Form title={'Agendamentos em Aberto'}>
           <OrdersList orders={orders as IOrder[]}/>
        </Form>
    );
};

export default Home;