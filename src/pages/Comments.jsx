import { useState } from 'react';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';
import backgroundImage from '../assets/fat.png';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '' && author.trim() !== '') {
      setComments([...comments, { author, text: newComment }]);
      setNewComment('');
      setAuthor('');
    }
  };

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
      <h1>Comentarios</h1>
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Label>Tu Nombre</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingresa tu nombre" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formComment">
              <Form.Label>Tu Comentario</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Escribe tu comentario aquí" 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Comentario
            </Button>
          </Form>
        </Card.Body>
      </Card>
      
      <h2>Comentarios Recientes</h2>
      <ListGroup>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <ListGroup.Item key={index}>
              <strong>{comment.author}:</strong> {comment.text}
            </ListGroup.Item>
          ))
        ) : (
          <p>Aún no hay comentarios. ¡Sé el primero en comentar!</p>
        )}
      </ListGroup>
    </Container>
  );
}

export default Comments;
