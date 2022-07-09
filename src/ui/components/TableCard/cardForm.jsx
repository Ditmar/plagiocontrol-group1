import useForm from '../../../hooks/useForm';
import React, { useEffect, useState } from "react";


const initialForm = {

  detalle: "",
  autor: "",
  id:null,
}

const CardForm = (createData, updateData, dataToEdit, setDataToEdit) => {

  //const [form, handlerChangeForm ,handlerResetForm] =useForm()

    const[form, setForm] = useState(initialForm);

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }
    },[dataToEdit]);

    const handleChange = (e) => {
      setForm({
        ...form, [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (element) =>{
    element.preventDefault();

    if(!form.detalle || form.autor){
      alert("datos incompletos");
      return;
    } 
    if(form.id === null){
      createData(form);
    }else{
      updateData(form);
    }
      handlerResetForm();
    };

    const handlerResetForm =(e) => {
      setForm(initialForm);
      setDataToEdit(null);
    }
    <div className='FormPrueba'>
    <form onSubmit={handleSubmit}>
        <input type="text" name='detalle' placeholder='detalle' 
          onChange = {handleChange}
          value={form.detalle}/> 

        <input type="text" name='autor' placeholder='autor'
          onChange={handleChange}
          value = {form.autor}
        /> 
        <input type="submit" value="Enviar" onClick={handleSubmit}/>
        <input type="submit" value="Limpiar" onClick={handlerResetForm}/>
    </form>
    </div>
  
  return (
    <div> 
        
    </div>
  ) 
}

export default CardForm