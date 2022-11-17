import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import ServiceRegisterPage from "./pages/Product/Register";
import LoginPage from "./pages/User/Login";
import UserRegisterPage from "./pages/User/Register";
import HomePage from './pages/home';
import ServiceHome from "./pages/Product";
import ServiceTypeRegisterPage from "./pages/ServiceType";
import CustomerHome from "./pages/Customer";
import CustomerRegisterPage from "./pages/Customer/Register";
import OrderRegisterPage from "./pages/Order/Register";

export function Router(){

    return(

        <>
            {
                localStorage.getItem('@token') ? (
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>

                        <Route path='/service_types/register' element={<ServiceTypeRegisterPage/>}></Route>
                        
                        <Route path='/services/register' element={<ServiceRegisterPage/>}></Route>
                        <Route path="/services/register/:id" element={<ServiceRegisterPage/>}></Route>
                        <Route path="/services" element={<ServiceHome/>}/>

                        <Route path='/customers/register' element={<CustomerRegisterPage/>}></Route>
                        <Route path="/customers/register/:id" element={<CustomerRegisterPage/>}></Route>
                        <Route path="/customers" element={<CustomerHome/>}/>

                        <Route path='/orders/register' element={<OrderRegisterPage/>}></Route>

                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes> 
                   
                ):(
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/users/register" element={<UserRegisterPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                )
            }
        </>
    );
};