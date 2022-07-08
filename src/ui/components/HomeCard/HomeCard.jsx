import React from "react";
import './HomeCard.css';
import PropTypes from 'prop-types';
export const HomeCard= ({documentPages,reviewedPages,copyPagesDetected}) => {
    return (
        <div className=' containerP'>
        <div className=" container1 " >
            <p className='Title1'>Documentos</p> 
            <section className='number1'>
            <p>{documentPages || '60'}</p>
            </section>
        </div>
        <div className="container1 " >
            <p className='Title1'>Revisados</p>
            <section className='number1'>
            <p>{reviewedPages || '16'}</p>
            </section>
        </div>
        <div className=" container1 " >
            <p className='Title1'>Copias Detectadas</p>
            <section className='number1'>
            <p>{copyPagesDetected || '43'}</p>
            </section>
        </div> 
        </div>
    )
}
HomeCard.propTypes = {
    documentPages: PropTypes.number,
    reviewedPages: PropTypes.number,
    copyPagesDetected: PropTypes.number

 };

export default HomeCard