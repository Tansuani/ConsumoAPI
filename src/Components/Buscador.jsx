

const Buscador = ({data, dataBuscador}) => {

    const inputTexto = (e) => {
      const tomaTexto = e.target.value.toLowerCase();
      const respuesta = data.buscador ((indicador) => 
      indicador.id.toLowerCase().includes(tomaTexto) ||
      indicador.indicador.toLowerCase().includes(tomaTexto) ||
      indicador.codigo.toLowerCase().includes(tomaTexto) ||
      indicador.nombre.toLowerCase().includes(tomaTexto) ||
      indicador.unidad_medida.toLowerCase().includes(tomaTexto) ||
      indicador.fecha.toLowerCase().includes(tomaTexto) ||
      indicador.valor.toLowerCase().includes(tomaTexto)
      );
      dataBuscador(respuesta);
    };

  return (
    <>
      
    </>
  )
}

export default Buscador