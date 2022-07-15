import { React } from "react";
import PropTypes from 'prop-types';
import '../../../App.css';
import useForm from "../../../hooks/useForm";

export const Login = ({isLoading, errors, label}) => {
    const [ handlerChangeForm] = useForm({username:"" , password: ""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            {isLoading? (<div>Loading...</div>):(<form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <input type="text" name="username" onChange={handlerChangeForm} placeholder="User name" className={errors?"inputErrors": ""}/>
                    </li>
                    <li>
                        <input type="password" name="password" onChange={handlerChangeForm} placeholder="Password" className={errors?"inputErrors": ""}/>
                    </li>
                    <li>
                        <input className="button" type="submit" value={label} />
                    </li>
                    
                </ul>
            </form>)}
            
        </div>
    );
}

Login.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };