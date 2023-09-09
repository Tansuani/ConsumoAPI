

const Buscador = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  setNombre(e.target[0].value);

  return (
    <>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Personaje</Form.Label>
            <Form.Control type="text" placeholder="Los Simpson" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
    </>
  )
}
}

export default Buscador