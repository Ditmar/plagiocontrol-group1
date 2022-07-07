import React from 'react'
import Cardrow from './Cardrow'
import "./styles.scss"


const Table = ({data ,setDataToEdit, deleteData}) => {
  return (
    <body>
      <div className="container">
        <div className="table_header">
          <div className='list'>Lista</div>
          <button className='btnSort'><i class="bi bi-sort-up"></i><h0> Sort</h0></button>
          <button className='btnFilter'><ion-icon name="funnel"></ion-icon><h0> Filter</h0></button>
        </div>
        <table>
          <thead>
            <tr>
              <th className='detalle'>Detalle</th>
              <th className='autor'>Autor</th>
              <th className='editar'>Editar </th>
              <th className='descargar'>Descargar</th>
              <th className='kebab'></th>
            </tr>
          </thead>
        <tbody >
          <tr>   
            <td>
               {data.map((el) => <Cardrow key={el.id} el={el} setDataToEdit ={setDataToEdit} deleteData={deleteData}/>)} 
               
            </td>
          </tr>
       </tbody>
      </table>
      <div class="table_fotter">
        <p>Total de filas : 07</p>
      </div>
    </div>
  </body>

  );
  }
export default Table;