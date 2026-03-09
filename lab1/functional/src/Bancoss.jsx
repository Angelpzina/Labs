import bancos from "./bancos";

export default function Bancoss() {

  return (
    <div>

      <h2>Lista de Bancos</h2>

      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            {banco.name} - {banco.country}
          </li>
        ))}
      </ul>

    </div>
  );
}