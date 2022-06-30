import React from "react";
import "./register.css";
import {AiFillEyeInvisible} from 'react-icons/ai';

export const Register = () => {
    const [shown, setShown] = React.useState(false);

    return (
         <div className="body" >
            <form className="form">
                <p className="circulo"></p>
                <p className="D"></p>  
                <h3 className="titleh3">Plagio Control</h3> <br/>
                <h1 className="titleh1">Login Plagio Control</h1><br/>
                <h4 className="titleh4">Enter your email and password below</h4>
                <div>
                   <div className="form_email">
                       <label className="label" > EMAIL </label> <br/>
                       <input className="scale" type="text" name="email" placeholder="Email address" />
                   </div>
                   <div className="form_password">
                       <label className="label">PASSWORD </label><p className="forgot"> Forgot password?</p>  <br/>
                       <input className="scale" type={shown ? "text" : "password"} name="password" placeholder="Password"  /> 
                       <AiFillEyeInvisible className="icon1" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)}/>
                   </div>
                   <div className="form_repassword">
                       <label className="label"> RE. PASSWORD </label>  <br/>
                       <input className="scale" type={shown ? "text" : "password"} name="repassword" placeholder="Password" />
                       <AiFillEyeInvisible className="icon2" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)} />
                   </div>
                <input type="submit" value="Sing In" className="button" /> 
                <p className="ultimo"> No tienes una cuenta? <a to="/login" className="login"> Login </a> </p>              
                </div>
            </form>
        </div>
               
               
              
    )
}