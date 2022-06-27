import React from "react";
import './Login.css';
export const Login = () => {
    return (
        <>
        <form className="form">
            <p className="circulo"><p className="centro"></p></p>
            <h1 className="form_h1title">Plagio control</h1>
            <h2 className="form_title">Login Plagio Conltrol</h2>
            <p className="form_paragraph">Enter your email and password belew</p>
            <div className="form_container">
                <div className="form_group">
                    <label for="email" className="form_label">EMAIL</label><br/>
                    <input type="email" id="email" className="form_input" placeholder="Email address"></input>
                </div>
                <div className="form_group">
                    <label for="password" className="form_label">PASSWORD</label><br/>
                    <input type="password" id="password" className="form_input" placeholder="Password"></input>
                </div>
                <input type="submit" value="Log In" className="form_submit"></input>
                <p className="form_paragraph">No tienes una cuenta? <a href="#" className="form_link">Sign up</a></p>
            </div>
        </form>
        </>)
}