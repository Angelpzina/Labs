import bancos from "../data/bancos";

function Bancos() {
  return (
    <div>
      <h2>Lista de Bancos</h2>
      <ul>
        {bancos.map((banco, index) => (
          <li key={index}>{banco}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bancos;