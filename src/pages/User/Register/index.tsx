import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import FormContainer from "../../../components/FormComponents/FormContainer";
import FileInput from "../../../components/Inputs/FileInput";
import InputComponent from "../../../components/Inputs/Input";
import LinkComponent from "../../../components/Link";
import useCreateUser from "../../../hooks/useCreateUser";

function UserRegisterPage() {

    const { current, 
        handleChange,
        handleSubmit,
        url, 
        handleFile 
    } = useCreateUser();

    return (
        <Form title={'Cadastre-se'}>

            <FormContainer>
                <FileInput
                    alt={current?.username}
                    url={url}
                    handleChange={handleFile}
                />
            </FormContainer>
                
            <FormContainer>
                <InputComponent 
                    label="Username"
                    name="username"
                    type={'text'}
                    value={current.username || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Email"
                    name="email"
                    type={'email'}
                    value={current.email || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Senha"
                    name="password"
                    type={'password'}
                    value={current.password || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Confirme sua Senha"
                    name="passwordConfirm"
                    type={'password'}
                    value={current.passwordConfirm || ''}
                    onChange={handleChange}
                />
            </FormContainer>
            
            <FormContainer>
                <Button 
                    text="Enviar"
                    backgroundColor={ButtonColors.success}
                    onClick={handleSubmit}
                />
            </FormContainer>
            <LinkComponent 
                to={'/'}
                text={'Já possui uma conta? Faça login por aqui!'}
            />
        </Form>
    );
};

export default UserRegisterPage;