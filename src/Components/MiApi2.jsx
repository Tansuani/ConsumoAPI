import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Buscador from "./Buscador";


const MiApi2 = () => {
  const [nombre, setNombre] = useState([]);

    const searchPersonaje = async () => {
      const Url="https://apisimpsons.fly.dev/api/personajes/";
      
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
    .sort((a, b) => b.id.localeCompare(a.id));
    setNombre(documento);

  };

  useEffect(() => {
    searchPersonaje();
  }, []);

  const busqueda = (e) => {
    e.preventDefault(name)
    setNombre(name)
  }

  return (
    <>      
        <h1>Personajes de Los Simpson</h1>
        <div>
          <Buscador onSubmit={busqueda} />
        </div>
        <div className="mt-5">
          {nombre.length > 0 ? (
            nombre.map((personaje, e) => (
            <Card key={e} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={personaje.image} />
              <Card.Body className="tarjeta">
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
          ))
        ) : <h1>No Existe</h1>
        }
        </div>
    </>
  );
};

    export default MiApi2;