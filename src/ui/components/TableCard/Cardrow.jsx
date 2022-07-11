import { Modal } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import documento from "./imagenes/documento.pdf"

let fecha = new Date();
let dia = fecha.getDate();
let month = ('0' + fecha.getMonth()).slice(-2);
let year = fecha.getFullYear();
let hours = fecha.getHours();
hours = hours!= 12 ? hours%12 : hours;
let minutes = ('0' + fecha.getMinutes()).slice(-2);
let journey = hours >= 12 ? 'PM' : 'AM';

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
           <td className='detalleFila'><p className='updatdet'>updated at 16 days ago</p>{detalle}</td>
           <td className='autorFila'><p className='updateaut '>on {dia}.{month}.{year}</p>{autor} </td>
           <td className='editarFila'><p className='updateedit'> {hours}:{minutes}{journey} </p><button className="btnedit"  onClick={() =>abrirCerrarModal()}><i class="bi bi-pencil-square"></i></button></td>
           <td className='descFila'><a href={documento}  download={documento}><button className="btndw" >NORMAL</button></a></td>
           <td><button className="kebab" onClick={()=> eliminarModal(id)}><span class='bi bi-three-dots-vertical'></span></button></td>
        </tr>
    </div> 
  )
}

export default Cardrow;