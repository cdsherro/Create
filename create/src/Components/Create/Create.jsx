import React from "react";
import "./Create.css";

import email_icon from '../Assets/email.jpg'
import password_icon from '../Assets/password.png'

const Create = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                <input type="text" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>CLICK HERE!</span></div>
            <div className="submit-container">
                <div className="submit">Register</div>
                <div className="submit">Login</div>

            </div>
        </div>
            



    )





}
export default Create