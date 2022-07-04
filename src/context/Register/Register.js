import React from "react";
import "./register.css";
import PropTypes from 'prop-types';
import useForm from "../../hooks/useForm";
import {AiFillEyeInvisible} from 'react-icons/ai';

export const Register = ( label) => {
    const [shown, setShown] = React.useState(false);
    const [ handlerChangeForm] = useForm({email:"" , password: "", repassword:""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
         <div className="body" >
            <form className="form" onSubmit={onSubmit}>
                <p className="circle"></p>
                <p className="center"></p>  
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
Register.propTypes = {
    isLoading: PropTypes.bool,
     errors: PropTypes.bool,
    label: PropTypes.string
};