import React from "react";
import useForm from "../../hooks/useForm";
import "../../ui/components/register/register.css";
import {AiFillEyeInvisible} from 'react-icons/ai';
export const Register = () => {
    const datos = {
      email:"" ,
       password: "",
        repassword:""  
    }
    const [shown, setShown] = React.useState(false);
    const [form, handlerChangeForm] = useForm({datos});
    const onSubmit = (event) => {
        event.preventDefault();
        const Api= 'http://3.138.158.90:8000/api-doc/#/default/post_server_autenthication_register';
        fetch(`${Api}post`,{
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                 'content-type': 'application/json',
            }
        }).then(res=>res.json())
    }
    return (
        <div>
         <form className="form_f" onSubmit={onSubmit}>
                <p className="circle"></p>
                <p className="semi_circle"></p>  
                <h3 className="titleh3">Plagio Control</h3> <br/>
                <h1 className="titleh1">Login Plagio Control</h1><br/>
                <h4 className="titleh4">Enter your email and password below</h4>
                <div>
                   <div className="form_email">
                       <label className="label" > EMAIL </label> <br/>
                       <input className="scale" type="text" name="email" placeholder="Email address" onChange={handlerChangeForm} />
                   </div>
                   <div className="form_password">
                       <label className="label">PASSWORD </label><p className="forgot"> Forgot password?</p>  <br/>
                       <input className="scale" type={shown ? "text" : "password"} name="password" placeholder="Password" onChange={handlerChangeForm}  /> 
                       <AiFillEyeInvisible className="icon1" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)}/>
                   </div>
                   <div className="form_repassword">
                       <label className="label"> RE. PASSWORD </label>  <br/>
                       <input className="scale" type={shown ? "text" : "password"} name="repassword" placeholder="Password" onChange={handlerChangeForm} />
                       <AiFillEyeInvisible className="icon2" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)} />
                   </div>
                <input type="submit"  className="button" value="Sing In" /> 
                <p className="ultimo"> No tienes una cuenta? <a to="/login" className="login"> Login </a> </p>              
                </div>
            </form>
        </div>
        
        )
    }