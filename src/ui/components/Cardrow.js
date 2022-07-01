import React from 'react'

const Cardrow = ({el}) => {
  return (
    <div>
        <tr>
            <td>{el.detalle}</td>
            <td>{el.Autor}</td>
            <td>
                {el.Editar}
            </td>
            <td>
                {el.Descargar}
            </td>
            <td>
                <button type='submit'>icono</button>
            </td>
        </tr>
    </div>
  )
}

export default Cardrow