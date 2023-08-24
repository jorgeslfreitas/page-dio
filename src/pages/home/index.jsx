import { useNavigate } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header'; 

import { Container, TextContent, Title, TitleHighLight } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSigIn = () => {
        navigate('/login');
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        Implemente
                        <br />
                        <TitleHighLight>
                            o seu futuro global agora!
                        </TitleHighLight>
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts
                    </TextContent>
                    <Button title='Começar agora' variant='secondary' onClick={(handleClickSigIn)} />
                </div>
                <div>
                    <img src={bannerImage} alt='Imagem principal' />
                </div>
            </Container>
        </>
    )
}

export { Home };