import { Modal } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import documento from './imagenes/documento.pdf'

const Cardrow = ({el, setDataToEdit, deleteData}) => {

  let {detalle, autor, id} = el;
  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  }
  const body =(
  <div className='editForm'>
    <h3>Editar </h3>
    <form >
        <input className='inputDetalle' type="text" name='autor' placeholder='Autor'/>
        <input className='inputAutor' type="text" name='detalle' placeholder='Detalle'/>
        <input className='enviar' type="submit" value="Enviar" />
        <input className='cancelar' type="submit" value="cancelar" onClick={()=> setDataToEdit(el)}/>
    </form>
    </div>
   )
   const [modalBorrar, setModalBorrar] = useState(false);
   const eliminarModal = () => {
     setModalBorrar(!modalBorrar);
     
   }
   const bodyBorrar =(
      <form className='Eborrar'>
        <button className='editarEliminar'  type='submit'onClick={()=> deleteData(id)}>Eliminar</button>
      </form>
    ) 
 
  return (
     <div> 
     <Modal open={modalBorrar}
      onClose={eliminarModal}>
        {bodyBorrar}
     </Modal>
      <Modal
      open={modal}
      onClose={abrirCerrarModal}>
      {body}
    </Modal>
        <tr className='hover'>   
           <td className='detalleFila'>{detalle}</td>
           <td className='autorFila'>{autor} </td>
           <td className='editarFila'><button className="btnedit"  onClick={() =>abrirCerrarModal()}><i class="bi bi-pencil-square"></i></button></td>
           <td className='descFila'><button className="btndw" >NORMAL</button></td>
           <td><button className="kebab" onClick={()=> eliminarModal(id)}><span class='bi bi-three-dots-vertical'></span></button></td>
        </tr>
    </div> 
  )
}

export default Cardrow;