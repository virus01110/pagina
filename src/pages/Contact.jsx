import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/fat.png';

function Contact() {
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
      <h1>Contacto</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Su mensaje" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Información de Contacto</h2>
          <p><strong>Dirección:</strong> Calle justo sierra #3 el campesino, 45597 san pedro tlaquepaque,jal.</p>
          <p><strong>Teléfono:</strong> 3347934981</p>
          <p><strong>Email:</strong> fraternidadcampesino@gmail.com</p>
          <p><strong>Horario:</strong> Lunes a Domingo 24/7</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
