import { React } from "react";
import PropTypes from 'prop-types';
import '../../../context/Register/register.css';
import Formulario from "../../../hooks/formRegister";
export const Register = ({}) => {
    const [ handlerChangeForm] = Formulario({email:"" , password: "", repassword:""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
            <p className="circulo"></p>
                <p className="D"></p>  
                <h3 className="titleh3">Plagio Control</h3> <br/>
                <h1 className="titleh1">Login Plagio Control</h1><br/>
                <h4 className="titleh4">Enter your email and password below</h4>
                <div>
                   <div className="form_email"> 
                        <label className="email" > EMAIL </label> <br/>
                        <input type="text" name="email" onChange={handlerChangeForm} placeholder="Email" className="scale" />
                    </div>
                    <div className="form_password">
                    <label className="password">PASSWORD </label> <p className="forgot"> Forgot password?</p> <br/>
                        <input type="password" name="password" onChange={handlerChangeForm} placeholder="Password" className="scale" />
                    </div>
                    <div className="form_repassword">
                        <label className="repassword"> RE. PASSWORD  </label> <br/>
                        <input type="password" name="repassword" onChange={handlerChangeForm} placeholder="Password" className="scale" />
                    </div>
                        <input type="submit" value="Sing In" className="button" /> 
                        <p className="ultimo"> No tienes una cuenta? <a to="/login" className="login"> Login </a> </p>              
                </div>
            </form>
            
        </div>
    );
}

Register.propTypes = {
    
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };