import { useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: ''
  });

  const [showData, setShowData] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formState });
    setShowData(true);
  };

  return (
    <>
      <h1>Formulario de Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Matrícula"
          name="matricula"
          value={matricula}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Apellidos"
          name="apellidos"
          value={apellidos}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Edad"
          name="edad"
          value={edad}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Universidad"
          name="universidad"
          value={universidad}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Carrera"
          name="carrera"
          value={carrera}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Enviar
        </button>
      </form>

      {showData && (
        <div className="mt-4">
          <h2>Datos Ingresados:</h2>
          <p><strong>Matrícula:</strong> {submittedData?.matricula}</p>
          <p><strong>Nombre:</strong> {submittedData?.nombre}</p>
          <p><strong>Apellidos:</strong> {submittedData?.apellidos}</p>
          <p><strong>Edad:</strong> {submittedData?.edad}</p>
          <p><strong>Universidad:</strong> {submittedData?.universidad}</p>
          <p><strong>Carrera:</strong> {submittedData?.carrera}</p>
        </div>
      )}
    </>
  );
};