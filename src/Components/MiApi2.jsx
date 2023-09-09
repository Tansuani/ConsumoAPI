import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const MiApi2 = () => {
  const [nombre, setNombre] = useState([]);

    const searchPersonaje = async () => {
      const Url="https://apisimpsons.fly.dev/api/personajes";
      
      const respuesta =await fetch (Url);
    
      const data = await respuesta.json();
      const documento = data.docs
      
    
        .map((solicitud) => {
      
          return {
            id: solicitud._id,
            name:solicitud.Nombre,
            image:solicitud.Imagen,
            genero:solicitud.Genero,
            estado:solicitud.Estado,
            ocupacion:solicitud.Ocupacion,
          };
      })
    .sort((a, b) => a.id.localeCompare(b.id));
    setNombre(documento);
  };

  useEffect(() => {
    searchPersonaje();
  }, []);

  {/*const handleSubmit = (e) => {
    e.preventDefault();
  setNombre(e.target[0].value);*/}
  

  return (
    <>
      
        <h1>Super Hero API</h1>
        {/*<Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Personaje</Form.Label>
            <Form.Control type="text" placeholder="Los Simpson" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
  </Form>*/}
        <div className="mt-5 d-flex justify-content-center gap-3">
          {nombre.map((personaje, e) => (
            <Card key={e} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={personaje.image} />
              <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Card.Text>
                  <span className="skills">Nombre: </span>
                  {personaje.name} <br />
                  <span className="skills">Genero: </span>
                  {personaje.genero} <br />
                  <span className="skills">Estado: </span>
                  {personaje.estado} <br />
                  <span className="skills">Ocupación: </span>
                  {personaje.ocupacion}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
    </>
  );
};

    export default MiApi2;