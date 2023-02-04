import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BaseColaboradores } from "./colaboradoresdatos/BaseColaboradores";

function App() {
  const [input_nombre, setInput_nombre] = useState("");
  const [input_correo, setInput_correo] = useState("");
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [input_filter, setInput_filter] = useState("");

  const handleInputNombre = (e) => {
    setInput_nombre(e.target.value);
  };

  const handleInputCorreo = (e) => {
    setInput_correo(e.target.value);
    console.log(input_correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColaboradores([
      ...colaboradores,
      { nombre: input_nombre, correo: input_correo },
    ]);
    setInput_nombre("");
    setInput_correo("");
  };

  const handleInputFilter = (e) => {
    setInput_filter(e.target.value);
  };

  return (
    <div className="App">
      <div className="container-fluid bg-dark text-light d-flex py-3">
        <h3 className="ms-5">Buscador de Colaboradores</h3>
        <input
          className="ms-auto"
          placeholder="Busca un colaborador"
          onChange={handleInputFilter}
        ></input>
      </div>
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <label>Nombre del colaborador</label>
          <input
            className="form-control"
            placeholder="Ingresa el nombre del colaborador"
            onChange={handleInputNombre}
            value={input_nombre}
          ></input>
          <br></br>
          <label>Correo del colaborador</label>
          <input
            className="form-control"
            placeholder="Ingresa el correo del colaborador"
            onChange={handleInputCorreo}
            value={input_correo}
          ></input>
          <br></br>
          <button className="btn btn-primary">Agregar el colaborador</button>
        </form>
      </div>
      <hr></hr>
      <div className="container">
        <h2>Listado de colaboradores</h2>
        <ul>
          {colaboradores
            .filter((colaborador) => {
              if (input_filter === "") {
                return colaborador;
              } else if (
                colaborador.nombre
                  .toLocaleLowerCase()
                  .includes(input_filter.toLocaleLowerCase())
              ) {
                return colaborador;
              } else {
                return "";
              }
            })
            .map((colaborador, index) => {
              return (
                <li key={index}>
                  {colaborador.nombre} - {colaborador.correo}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;