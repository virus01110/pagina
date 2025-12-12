import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/fat.png';

function About() {
  return (
    <Container 
      className="my-5" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: '30%', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        minHeight: '80vh',
        padding: '2rem',
        borderRadius: '8px'
      }}
    >
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una clínica líder en el sector de la rehabilitación, con más de 20 años de experiencia. Nuestra misión es proporcionar atención personalizada y de alta calidad para facilitar una recuperación rápida y efectiva.
      </p>
      <p>
        Nuestro equipo está formado por fisioterapeutas, terapeutas ocupacionales y otros especialistas certificados con una profunda pasión por ayudar a los demás.
      </p>
    </Container>
  );
}

export default About;
