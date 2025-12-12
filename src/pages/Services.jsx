import { Container, Card, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/fat.png';

function Services() {
  const services = [
    { 
      title: 'Evaluacion Medica Profesional', 
      description: 'Objetivo: Determinar el estado fisico y mental del paciente, identificar sustancias consumidas, nivel de dependencia y presencia de comorbilidades que puedan influir en el tratamiento.' 
    },
    { 
      title: 'Desintoxicacion segura y supervisada', 
      description: 'Manejo medico y psicologico de los sintomas de abstinencia para minimizar riesgos y malestar evitando complicaciones medicas, monitorizacion continua (signos vitales, estado mental), uso de medicamentos cuando están indicados, equipo médico 24/7, apoyo psicológico y social, duración de 3 a 5 días.' 
    },
    { 
      title: 'Terapias individuales y grupales', 
      description: 'Evaluacion psicológica continua y consejerías individuales, consejerías grupales. Tenemos como objetivo trabajar la motivación, habilidades de afrontamiento, control de impulsos, resolución de problemas y metas personales.' 
    },
    { 
      title: 'Programas de rehabilitacion integral', 
      description: 'Tratar la adicción en su dimensión bio-psico-social, no solo de abstinencia. Tenemos como meta lograr una abstinencia sostenida, restauración del funcionamiento familiar y social, prevención de recaídas, reinserción social y laboral.' 
    },
    {
      title: 'acompañamiento post-tratamiento(aftercare)',
      description: 'Es un conjunto de acciones planificadas y coordinadas para apoyar al paciente desde el alta o fin de la intervencion terapeutica, hasta su reintegracion social y funcional, maximizando la recuperacion de funciones, la independencia en actividades de la vida diaria(ADV) y la calidad de vida.'
    }
  ];

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
      <h1>Nuestros Servicios</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
