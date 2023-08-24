import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import { Link } from 'react-router-dom';

import { 
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to={'/'}>
                        <img src={logo} alt='logo da dio' />
                    </Link>
                    {autenticado ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder='Buscar...' />
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/95453910?v=4' />
                    ) : 
                        <>
                            <Link to={'/login'}>
                                <Button title='Entrar'/>
                            </Link>
                            <Link to={'/cadastro'}>
                                <Button title='Cadastrar' />
                            </Link>
                        </>
                    }
                </Row>
            </Container>
        </Wrapper>        
    )
}

export { Header };