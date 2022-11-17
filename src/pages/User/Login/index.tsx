import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import FormContainer from "../../../components/FormComponents/FormContainer";
import InputComponent from "../../../components/Inputs/Input";
import LinkComponent from "../../../components/Link";
import useLogin from "../../../hooks/useLogin";


function LoginPage() {

    const { current, handleChange, handleSubmit } = useLogin(); 

    return (
        <Form title="Login">
            <FormContainer>
                <InputComponent 
                    name="email"
                    label="Email"
                    type={'email'}
                    value={current.email || ''}
                    onChange={handleChange}
                />
            </FormContainer>
            <FormContainer>
                <InputComponent 
                    name="password"
                    label="Senha"
                    type={'password'}
                    value={current.password || ''}
                    onChange={handleChange}
                />
            </FormContainer>
            <FormContainer>
                <Button
                    text="Logar"
                    backgroundColor={ButtonColors.success}
                    onClick={handleSubmit}
                />
            </FormContainer>
            <LinkComponent 
                to={'/users/register'} 
                text={"Não possui uma conta? Crie uma por aqui!"}
            />
        </Form>
    );
};

export default LoginPage;