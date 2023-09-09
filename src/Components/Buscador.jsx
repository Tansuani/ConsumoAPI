import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Buscador = ({ onSubmit}) => {
  const [valor, setValor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(valor)
  };

  return (
    <Form className='buscador' onSubmit={handleSubmit}>
      <Form.Group controlId="">
        <Form.Label>Personaje</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Los Simpson"
          value={valor}
          onChange={(e) => setValor(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
            Buscar
      </Button>
    </Form>
  );
};

export default Buscador;