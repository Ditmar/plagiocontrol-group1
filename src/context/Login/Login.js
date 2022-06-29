import React from "react";
import Vector from './Vector.svg';
import './Login.css';
import { PropTypes } from 'prop-types';
import useForm from "../../hooks/useForm";
export const Login = ({label}, props) => {

console.log(props);
const [shown, setShown]=React.useState(false);
const switchShown=()=>setShown(!shown)
const [password, setPassword] = React.useState('');
const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

const [ handlerChangeForm] = useForm({email:"" , password: ""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
        <form className="form" onSubmit={onSubmit}>
            <p className="circulo"><p className="centro"></p></p>
            <h1 className="form_h1title">Plagio control</h1>
            <h2 className="form_title">Login Plagio Conltrol</h2>
            <p className="form_paragraph">Enter your email and password below</p>
            <div className="form_container">
                <div className="form_group">
                    <label for="email" className="form_label">EMAIL</label><br/>
                    <input type="email" id="email" className="form_input" placeholder="Email address"></input>
                </div>
                <div className="form_group2">
                    <div className="form_coment">
                        <label for="password" className="form_label">PASSWORD</label><br/>
                        <a href="#" className="form_forgot" >Forgot password?</a>
                    </div>
                    <input id="password" className="form_input" placeholder="Password" onChange={onChange}  type={shown ? 'text':'password'} value={password}></input>
                    <img src={Vector} className="icon" id="eye" onClick={switchShown} ></img>
                </div>
                <input type="submit" value="Log In" className="form_submit"></input>
                <p className="form_paragraph">No tienes una cuenta? <a href="#" className="form_link">Sign up</a></p>
            </div>
        </form>
        </>)
}
Login.propTypes = {
 
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };