{/*
import { useState, useEffect } from "react";

const MiAPI = () => {

    const [indicador, setIndicador] = useState([]);

    useEffect(() => {
        buscarIndicador();
      }, []);
    
      const buscarIndicador = async () => {
        const url = `https://mindicador.cl/api`;
        const response = await fetch(url);
        const data = await response.json();
        setIndicador(`${data.utm.codigo}-${data.utm.nombre}-
        ${data.utm.unidad_medida}-${data.utm.fecha}-${data.utm.nombre}`);
      };

  return (
    <>
       {indicador}       
    </>
  )
}

export default MiAPI
*/}