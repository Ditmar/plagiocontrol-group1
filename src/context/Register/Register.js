import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import {AiFillEyeInvisible} from 'react-icons/ai';

export const Register = () => {
    const [shown, setShown] = React.useState(false);

    return (
         <div className="body">
             <form className="form">
               <p className="circulo"></p>
               <p className="D"></p>  
               <h3 className="primero">Plagio Control</h3> <br/>
               <h1 className="segundo">Login Plagio Control</h1><br/>
               <h4 className="tercero">Enter your email and password below</h4>
            
               <label className="email" > EMAIL <br/>
                  <input className="scale" type="text" name="email" placeholder="Email address" />
               </label><br/>
               <label className="password">PASSWORD <p className="forgot"> Forgot password?</p> <br/>
                  <input className="scale" type={shown ? "text" : "password"} name="password" placeholder="Password"  /> 
                  
                   <AiFillEyeInvisible className="icon1" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)}/>
                   
                  </label><br/>
               <label className="repassword"> RE. PASSWORD   <br/>
                   <input className="scale" type={shown ? "text" : "password"} name="repassword" placeholder="Password" />
                   
                   <AiFillEyeInvisible className="icon2" value={{color:'#9FA2B4'}} onClick={() => setShown(!shown)} />
                   </label><br/>
                <input type="submit" value="Sing In" className="button" /> 
                <p className="ultimo"> No tienes una cuenta? <Link to="/login" className="login"> Login </Link> </p>              
            </form>
        </div>
               
               
              
    )
}