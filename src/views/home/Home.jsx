import { Container, Row } from 'react-bootstrap'
import imgBanner from '../../assets/img/banner-inmobiliaria.jpg'
import Cards from '../../components/card/Cards'

const Home = () => {
    return (
        <>
            <Container className="w-100 ">
                <h1>Bienvenido a nuestra Inmobiliaria</h1>
                <img src={imgBanner} alt="Banner" className="img-fluid" />
            </Container>
            
            <Container className='mt-5'>
                <Row>
                    <Cards />
                </Row>
            </Container>

        </>
    )
}

export default Home