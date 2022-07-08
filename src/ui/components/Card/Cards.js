import { PropTypes } from "prop-types";
import './Cards.css';
import book from './Img/cardbook.png';
export function Cards({label}) {
  let styles = {
    fontFamily: 'Arial',
  }
  return (

    <>
    
    <div className="container">
          <div className="card-container" style={styles}>
            <div className="description"style={styles}>
              <div className="title" style={styles}><h3>Autor. Ing. Raul Gomez</h3></div>
              
              <br/>
              <br/>
              
              
              
              <div className="grid-container"style={styles}>
                <div className="grid-item"style={styles}><p>Analisis de la investigacion sobre radio en bolivia...</p></div>
                  <div className="grid-item1"style={styles}><p className="pag">325 pag</p></div>
                </div>
                
                <hr/>
              
            </div>
            <div className="header"style={styles}>
              <h5 >Ver Detalles</h5>
              <img src={book} width={140} height={210}/>
              
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
