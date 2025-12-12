import { Container, Button } from 'react-bootstrap';
import logo from '../assets/fat.png';
import '../App.css'; 

function Home() {
  return (
    <Container className="my-5 text-center">
      <img src={logo} alt="Logo de la Fraternidad" className="logo-animation mb-4" style={{ maxWidth: '200px' }} />
      <h1>Bienvenido a Fraternidad Del Espiritu Santa Maria "Modulo el Tapatio"</h1>
      <p>
        Su salud y bienestar son nuestra prioridad. Ofrecemos una amplia gama de servicios de rehabilitación para ayudarle a recuperarse y mejorar su calidad de vida.
      </p>
      <Button variant="primary" href="/services">Ver Nuestros Servicios</Button>
    </Container>
  );
}

export default Home;
