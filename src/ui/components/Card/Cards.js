
import './Cards.css';
export function Cards() {
  return (
    ///create to card in react component using storybook
    <div className="container">
          <div className="card-container" >
            <div className="description">
              <h1>Autor. Ing. Raul Gomez</h1>
              <h5>Analisis de la investigacion sobre radio en bolivia...<><h3>320pag</h3></></h5>
              <hr />
            </div>
            <div className="header">
              <h5 >Ver Detalles</h5>
              
                <img src="https://source.unsplash.com/random/140x210" alt="" width={140} height={210} />
              
            </div>
          </div>
        </div>
  );
}


