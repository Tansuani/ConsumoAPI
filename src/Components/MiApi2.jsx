import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const MiApi2 = () => {
  const [personaje, setPersonaje] = useState("Lisa"); // Estado para el término de búsqueda
  const [personajeData, setPersonajeData] = useState([]); // Estado para los datos de la API

  const searchPersonaje = () => {
    const apiUrl = `https://apisimpsons.fly.dev/api/personajes/${personaje}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Datos de la API:", response.docs);
        setPersonajeData(response.docs);
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };
  // Usar useEffect para realizar la búsqueda cuando searchTerm cambie
  useEffect(() => {
    searchPersonaje();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personaje]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonaje(e.target[0].value);
  };

  return (
    <>
      <Container>
        <h1>Super Hero API</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Personaje</Form.Label>
            <Form.Control type="text" placeholder="Los Simpson" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
        <div className="mt-5 d-flex justify-content-center gap-3">
          {personajeData ? personajeData.map((docs) => (
            <Card key={docs.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={docs.Imagen.url} />
              <Card.Body>
                <Card.Title>{docs.Nombre}</Card.Title>
                <Card.Text>
                  <span className="skills">Nombre: </span>
                  {docs.Nombre["Nombre"]} <br />
                  <span className="skills">Genero: </span>
                  {docs.Genero["Genero"]} <br />
                  <span className="skills">Estado: </span>
                  {docs.Estado["Estado"]} <br />
                  <span className="skills">Ocupación: </span>
                  {docs.Ocupacion["Ocupacion"]}
                </Card.Text>
              </Card.Body>
            </Card>
          )): <h1>Not found</h1>}
        </div>
      </Container>
    </>
  );
};
    
    export default MiApi2;