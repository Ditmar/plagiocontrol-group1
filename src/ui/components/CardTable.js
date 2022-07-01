import React from 'react'
import Cardrow from './Cardrow'
//import '../../index.scss';

const CardTable = ({data}) => {
  return (
    <div className='container'>
          <div className='headerCard'>
            
              <div className='buttons'>
              clase
                  <div className='iconSort'>
                   <button id='btnicon'><i class="bi bi-sort-up"></i>sort</button>          
                  </div>
                  <div className='iconFilter'>
                    <button id='btnicon'><ion-icon name="funnel"></ion-icon>filter</button>
                    
                  </div>
              </div>
          </div>
      
        <table class="table">
            <thead>
                <div> 
                  <tr>
                    <th>Detalle</th>
                    <th>Autor</th>
                    <th>Editar</th>
                    <th>Descargar</th>
                   </tr>
                </div>
            </thead>
            <tbody>
              {data.map((el) => <Cardrow key={el.id} el={el} />)}
            </tbody>
        </table>       
    </div>
  )
}

export default CardTable