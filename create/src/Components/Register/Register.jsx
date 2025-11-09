import React from "react";
import "./Register.css";
import budget_icon from '../Assets/budget.png';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // could collect form data here while backend integration
    alert("Registered!");
    navigate("/"); // to login if clicked register
  };

  return (
    <div className="register-root">
      <div className="register-header">
        Register Account
      </div>
      <div className="register-content">
        <form className="register-form" onSubmit={handleRegister}>
          <div className="section-title">Customer Details:</div>
          <div className="form-row">
            <label>First Name:</label>
            <input type="text" />
            <label>Last Name:</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Middle Initial:</label>
            <input type="text" />
            <label>DOB:</label>
            <input type="date" />
          </div>
          <div className="form-row">
            <label>SSN:</label>
            <input type="text" />
            <label>Address:</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Phone:</label>
            <input type="text" />
            <label>Email Address:</label>
            <input type="email" />
          </div>
          <div className="section-title">Identity Verification:</div>
          <div className="form-row">
            <label>Pin Verify:</label>
            <input type="password" />
            <label>Confirm Pin Verify:</label>
            <input type="password" />
          </div>
          <div className="form-row">
            <label>Confirm With Email Address:</label>
            <input type="email" />
          </div>
          <div className="section-title">Financial Profile:</div>
          <div className="form-row">
            <label>Employment:</label>
            <input type="text" />
            <label>Company Address:</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Company Telephone:</label>
            <input type="text" />
            <label>Years At Company:</label>
            <input type="number" />
          </div>
          <div className="form-row">
            <label>Yearly Salary:</label>
            <input type="number" />
          </div>
          <div className="form-row">
            <label>Account Selection:</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Yearly Salary:</label>
            <input type="number" />
          </div>
          <button type="submit" className="register-submit-btn">Register</button>
        </form>
        <div className="register-logo-container">
          <img src={budget_icon} alt="Budget App Logo" className="register-logo"/>
          <div className="register-logo-text">
            <strong>Budget App<br/>Task Failed Successfully</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
