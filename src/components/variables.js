function Variables() {
  const nombre = "Juan Ángel";
  const carrera = "Ingeniería en Tecnologías Computacionales";
  const semestre = 4;

  return (
    <div>
      <h2>Datos del Estudiante</h2>
      <p>Nombre: {nombre}</p>
      <p>Carrera: {carrera}</p>
      <p>Semestre: {semestre}</p>
    </div>
  );
}

export default Variables;