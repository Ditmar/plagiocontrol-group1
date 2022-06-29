import { React } from "react";
import PropTypes from 'prop-types';
import '../../../context/Register/register.css';
import Formulario from "../../../hooks/formRegister";
export const Register = ({isLoading, errors}) => {
    const [ handlerChangeForm] = Formulario({email:"" , password: "", repassword:""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            {isLoading? (<div>Loading...</div>):(<form onSubmit={onSubmit}>
                <label className="email" > EMAIL <br/>
                        <input type="text" name="email" onChange={handlerChangeForm} placeholder="email" className={errors?"inputErrors": ""}/>
                    </label>
                    <label className="password">PASSWORD <br/>
                        <input type="password" name="password" onChange={handlerChangeForm} placeholder="password" className={errors?"inputErrors": ""}/>
                    </label>
                    <label className="repassword"> RE. PASSWORD   <br/>
                        <input type="password" name="repassword" onChange={handlerChangeForm} placeholder="password" className={errors?"inputErrors": ""}/>
                        </label><br/>
                        <input type="submit" value="Sing In" className="button" /> 
                    
                
            </form>)}
            
        </div>
    );
}

Register.propTypes = {
    
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };