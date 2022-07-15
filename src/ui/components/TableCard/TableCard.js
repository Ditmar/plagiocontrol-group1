import React, { useEffect, useState } from 'react';
import messi from './imagenes/messi.jpg';
import Table from './Table';
import CardForm from './cardForm';
import Paginacion from './Paginacion'



  export const TableCard = () => {
  const [db, setDb] = useState([]);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) =>{
    data.id = Date.now();
    setDb([...db, data]);
    
  };

  const updateDate = (data) => {
    let newData = db.map(el =>el.id === data.id ? data:el)
    setDb([newData]);
  };


  const deleteData = (id) => {
    let isDelete = window.confirm("¿estas seguro de eliminar el registro?");
    
    if(isDelete){
    let newData = db.filter(el => el.id !== id);
    setDb(newData);
    }else{
      return;
    }
  };

  return (    
    <div> 
    <CardForm createData = {createData} updateData = {updateDate}
    dataToEdit ={dataToEdit}
    setDataToEdit = {setDataToEdit}
    />
    <Table data ={db}
    setDataToEdit = {setDataToEdit}
    deleteData = {deleteData}
    />

    </div>
  )
  
}
export default TableCard;