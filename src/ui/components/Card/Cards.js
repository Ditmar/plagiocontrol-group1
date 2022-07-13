import { PropTypes } from "prop-types";
import './Cards.css';
import book from './Img/cardbook.png';
import { useEffect, useState} from 'react';
export function Cards({label}) {
  let styles = {
    fontFamily: 'Arial',
  }
  const url = 'http://3.138.158.90:8000/server/listdatabase';
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    console.log(responseJSON)
  }
  useEffect(()=>{
    fetchApi()
  },[])
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
