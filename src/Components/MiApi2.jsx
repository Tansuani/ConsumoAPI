import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


const MiApi2 = () => {
    const [indicador, setIndicador] = useState("uf");
    const [indicadorData, setIndicadorData] = useState([]); // Estado para los datos de la API
  
    const searchIndicador = () => {
      const apiUrl = `https://mindicador.cl/api${indicador}`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log("Datos de la API:", response.data.results);
          setIndicadorData(response.data.results);
        })
        .catch((err) => {
          console.log("Error al obtener datos de la API:", err);
        });
    };
   
    useEffect(() => {
        searchIndicador();    
    }, [indicador]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIndicador(e.target[0].value);
    };

    return (
        <>
        <Container>
          <h1>INDICADORES</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Busca el Indicador</Form.Label>
              <Form.Control type="text" placeholder="indique indicador" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <div className="mt-5 d-flex justify-content-center gap-3">
            {indicadorData ? indicadorData.map((item) => (
              <Card key={item.id} style={{ width: "18rem" }}>
                
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <span className="codigo">Name: </span>
                    {item.biography["nombre"]} <br />
                    <span className="unidad_medida">Biography: </span>
                    {item.biography["fecha"]}
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