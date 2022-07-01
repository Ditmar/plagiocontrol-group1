import React, { useState } from "react";
import CardTable from "../../ui/components/CardTable";
import './styles.scss';

  const initialDB = [
    { 
      id:1,
      detalle: "primer detalle",
      Autor : "bruce willies",
      Editar : <button className="ejemplo"><i class="bi bi-pencil-square"></i></button>,
      Descargar : <button type="submit">descargar</button>
    },
    { 
      id:2,
      detalle: "primer detalle",
      Autor : "tom hanks",
      Editar : <i class="bi bi-pencil-square"></i>,
      Descargar : <button type="submit">descargar</button>,
    },
    {
      id:3,
      detalle: "primer detalleasfasfsdgsdgsdfgdfhfgjhfgjhfgjhhfgjhfgjhfgj",
      Autor : "toma hanks",
      Editar : <i class="bi bi-pencil-square"></i>,
      Descargar : <button type="submit">descargar</button>
    }

  ];

  export const Works = () => {

  const [db, setDB] = useState(initialDB);
  return (
    <div>
      <CardTable data = {db} />
    </div>
  )
}
export default Works;