import React from "react";
import { PropTypes } from 'prop-types';
import UseForm from '../../../hooks/useForm';

import './Login.css';
import Vector from './Vector.svg';

export const Login = ({label}, props) => {
console.log(props);

const [form,  handlerChangeForm, handlerResetForm ] = UseForm({email:"" , password: ""});
const {email, password} = form;

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if(email === "pepe@gmail.com" && password ==="pepe")
            {
                console.log("sesion iniciada");
            }else{
                console.log("Credenciales incorrectas");
            }
    
    }
    const [shown, setShown]=React.useState(false);
    const switchShown=()=>setShown(!shown);    
        
    return (
        <>
        <form className="form" onSubmit={handlerSubmit}>
            <div className="circulo">
                <div className="centro"></div>
            </div>
            <h1 className="form_first_title">Plagio control</h1>
            <h2 className="form_title">Login Plagio Control</h2>
            <p className="form_paragraph">Enter your email and password below</p>
            <div className="form_container">
                <div className="form_group">
                    <label className="form_label">EMAIL</label><br/>
                    <input 
                    className="form_input" 
                    type="email"
                    name="email"
                    value={email} 
                    onChange={handlerChangeForm}
                    placeholder="Email address" />
                </div>
                <div className="form_group2">
                    <div className="form_coment">
                        <label className="form_label">PASSWORD</label><br/>
                        <a href="#" className="form_forgot" >Forgot password?</a>
                    </div>
                    <input 
                    className="form_input"
                    name="password" 
                    value={password}
                    onChange={handlerChangeForm}  
                    type={shown ? 'text':'password'}
                    placeholder="Password"/>
                    <img className="eye" src={Vector} id="eye" onClick={switchShown} ></img>
                </div>
                <input type="submit" value="Log In" className="form_submit"></input>
                <p className="form_paragraph">No tienes una cuenta? <a href="#" className="form_link">Sign up</a></p>
            </div>
        </form>
        </>)
}
// Login.propTypes = {
//      isLoading: PropTypes.bool,
//      errors: PropTypes.bool,
//      label: PropTypes.string
//   };