import { MdEmail, MdLock } from "react-icons/md";

import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
    SpanGreen
} from './styles';

const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo Obrigatório'),
}).required();

const Cadastro = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

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
                        <TitleLogin>
                            Comece agora grátis
                        </TitleLogin>
                        <SubtitleLogin>
                            Crie sua conta e make the change.
                        </SubtitleLogin>
                        <form>
                        <Input 
                                name="name"
                                errorMessage={errors?.name?.message}
                                control={control} 
                                type='text' 
                                placeholder='Nome completo' 
                                leftIcon={<MdEmail />} 
                            />  
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
                            <Button title='Criar minha conta' variant='secondary' type='submit' />
                        </form>
                        <SubtitleLogin>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleLogin>
                        <Row>
                            <Link to={'/login'}>
                                <CreateText>Já tenho conta. <SpanGreen>Fazer login</SpanGreen></CreateText>
                            </Link>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )

}

export { Cadastro };