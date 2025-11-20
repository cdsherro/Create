import React from "react";
import { useNavigate }  from "react-router-dom";
import "./Create.css";

import email_icon from '../Assets/email.jpg'
import password_icon from '../Assets/password.png'
import budget_icon from '../Assets/budget.png'

const Create = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/verify"); 
    };

    const handleRegister = () => {
        navigate("/register"); 
    };

    return (

        <div className="auth"> 
            <aside className="auth-media">   
                <img src={budget_icon} alt="Welcome" />
            </aside>
            
            <div className="container">
                <div className="header">
                    <div className="text">
                        <mark>Login</mark>
                    </div>
                    <div className="highlight"></div>
                </div>

                <div className="input">
                    <img className="icon" src={email_icon} alt="Email" />
                    <input type="email" placeholder="Email" autoComplete="email" />
                </div>

                <div className="input">
                    <img className="icon" src={password_icon} alt="Password" />
                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                </div>

                <div className="forgot-password">
                    Forgot Password?{" "}
                    <button className="link" type="button">CLICK HERE!</button>
                </div>

                <div className="submit-container">
                    <button className="submit" type="button" onClick={handleSubmit}>
                        Submit
                    </button>

                    <div className="register group">
                        <span className="hint">Don't have an account?</span>
                        <button className="register-btn" type="button" onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </div>
            </div>

               
            <aside className="auth-right">
                <strong>Welcome! To Task Failed Successfully Budget App.</strong>
            </aside>
        </div>
    );
};

export default Create;