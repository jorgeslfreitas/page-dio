import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { MdEmail, MdLock } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header'; 
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { 
    Column,
    Container,
    CreateText,
    ForgotText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
} from './styles';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha${formData.password}`);
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name="email"
                                errorMessage={errors?.email?.message}
                                control={control} 
                                type='email' 
                                placeholder='E-mail' 
                                leftIcon={<MdEmail />} 
                            />
                            <Input 
                                name="password" 
                                errorMessage={errors?.password?.message}
                                control={control} 
                                type='password' 
                                placeholder='Password' 
                                leftIcon={<MdLock />} 
                            />
                            <Button title='Entrar' variant='secondary' type='submit' />
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText>Criar Conta</CreateText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login };