import { PropTypes } from "prop-types";
import './Cards.css';
export function Cards() {
  return (
    <>
    
    <div className="container">
          <div className="card-container" >
            <div className="description">
              <h1>Autor. Ing. Raul Gomez</h1>
              <br/>
              
              
              <div class="grid-container">
                <div class="grid-item"><p>Analisis de la investigacion sobre radio en bolivia...</p></div>
                  <div class="grid-item"><p>325 pag</p></div>
                </div>
                
                <hr/>
              
            </div>
            <div className="header">
              <h5 >Ver Detalles</h5>
              
                <img src="https://source.unsplash.com/random/140x210" alt="" width={140} height={210} />
              
            </div>
          </div>
        </div>

        </>  
  );
}

Cards.prototype = {
  label: PropTypes.string,
  style: PropTypes.string,
  handleClick: PropTypes.func,
  isShadow: PropTypes.boolean,
  backgroundColor: PropTypes.string
}
