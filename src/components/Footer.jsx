import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Fraternidad del espiritu santa maria modulo tapatio. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ por byvirus</p>
      </Container>
    </footer>
  );
}

export default Footer;
