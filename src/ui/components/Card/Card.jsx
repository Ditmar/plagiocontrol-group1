import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import carta from './carta.jpg'
const Card = () => {
   return (
    <div className=" row containerP d-flex  flex-row" >
    <div className=" containerP1 row d-flex  flex-column">
      <p className=" tituloC   col-md-11 col-lg-11 col-sm-11 d-flex align-items-end">Autor Ing. Raul Gomez</p>
      <section className='  container1 col-md-11 col-lg-11 col-sm-11 row '>
        <p className=" parrafo1  col-sm-7 col-md-7 col-lg-7 ">Analisis de la <br /> investigacion sobre <br /> radio en Bolivia ...</p>
        <p className=' parrafo2 col-sm-5 col-md-5 col-lg-5'>321 Pag.</p>

      </section>

    </div>
    <div className=' containerP2  d-flex flex-column'>
      <section className='sectionC  d-flex align-items-end flex-column'>
        <p className=' parrafo3  mt-auto  '>Ver detalles</p>
      </section>
        <img className='parrafo4' src={carta} width="100" height="auto" alt="" />
    </div>
   
  </div>
    
   )
}

export default Card