import React, { useEffect, useState } from "react";
import messi from "./imagenes/messi.jpg";
import ronaldo from "./imagenes/ronaldo.jpg";
import robertocarlos from "./imagenes/robertocarlos.jpg";
import ronaldiño from "./imagenes/ronaldiño.jpg";
import ronald2 from "./imagenes/ronald2.png"
import Table from "./Table";
import CardForm from "./cardForm";


const initialDB = [
      
  { 
    id:1,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Contact Email not Linked</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:2,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Adding Images to Feactures Post</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:3,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>When will Ibe charged this month</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:4,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Payment not going through</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:5,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Unable to add replies</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:6,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Downtime since last week</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:7,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>Referal Bonus</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
  { 
    id:8,
    detalle:<div className="imgTexto"><img src="/imagenes/messi.jpg" /><p>How do I change mas password?</p></div>,
    autor :<p className="autorTexto">Tom Cruise Vanegas Flores</p>,
    
  },
];
  export const TableCard = () => {
  const [db, setDb] = useState(initialDB);

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
    deleteData = {deleteData} />
    
    </div>
    
  )
  
}
export default TableCard;