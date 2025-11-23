import React, { useState } from "react";
import "./Register.css";
import budget_icon from '../Assets/budget_app_figma_logo.png';
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  middleInitial: "",
  dob: "",
  ssn: "",
  address: "",
  phone: "",
  email: "",
  pin: "",
  confirmPin: "",
  confirmEmail: "",
  employment: "",
  companyAddress: "",
  companyPhone: "",
  yearsAtCompany: "",
  yearlySalary: "",
  accountSelection: "",
};

export default function Register() {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation logic
  const validate = () => {
    const errs = {};
    if (!fields.firstName.trim()) errs.firstName = "First name is required.";
    if (!fields.lastName.trim()) errs.lastName = "Last name is required.";
    if (!fields.phone.match(/^\d{10}$/)) errs.phone = "Phone must be 10 digits.";
    if (!fields.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      errs.email = "Invalid email format.";
    if (fields.email !== fields.confirmEmail)
      errs.confirmEmail = "Emails don't match.";
    if (!fields.pin.match(/^\d{4,}$/)) errs.pin = "PIN must be at least 4 digits.";
    if (fields.pin !== fields.confirmPin) errs.confirmPin = "PINs don't match!";
    return errs;
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Registered!");
      navigate("/"); //login
      setFields(initialState);
    }
  };

  return (
    <div className="register-root">
      <div className="register-header">Register Account</div>
      <div className="register-content">
        <form className="register-form" onSubmit={handleRegister}>
          <div className="section-title">Customer Details:</div>
          <div className="form-row">
            <div className="input-group">
              <label>First Name<span className="required-star">*</span>:</label>
              <input
                name="firstName"
                type="text"
                value={fields.firstName}
                onChange={handleChange}
                className={errors.firstName && "error-field"}
                required
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>
            <div className="input-group">
              <label>Last Name<span className="required-star">*</span>:</label>
              <input
                name="lastName"
                type="text"
                value={fields.lastName}
                onChange={handleChange}
                className={errors.lastName && "error-field"}
                required
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Middle Initial:</label>
              <input name="middleInitial" type="text" value={fields.middleInitial} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>DOB:</label>
              <input name="dob" type="date" value={fields.dob} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>SSN:</label>
              <input name="ssn" type="text" value={fields.ssn} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Address:</label>
              <input name="address" type="text" value={fields.address} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Phone<span className="required-star">*</span>:</label>
              <input
                name="phone"
                type="text"
                value={fields.phone}
                onChange={handleChange}
                className={errors.phone && "error-field"}
                placeholder="10 digits"
                maxLength={10}
                required
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
            <div className="input-group">
              <label>Email Address<span className="required-star">*</span>:</label>
              <input
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                className={errors.email && "error-field"}
                required
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Confirm Email Address<span className="required-star">*</span>:</label>
              <input
                name="confirmEmail"
                type="email"
                value={fields.confirmEmail}
                onChange={handleChange}
                className={errors.confirmEmail && "error-field"}
                required
              />
              {errors.confirmEmail && <div className="error-message">{errors.confirmEmail}</div>}
            </div>
          </div>
          <div className="section-title">Identity Verification:</div>
          <div className="form-row">
            <div className="input-group">
              <label>Pin<span className="required-star">*</span>:</label>
              <input
                name="pin"
                type="password"
                value={fields.pin}
                onChange={handleChange}
                className={errors.pin && "error-field"}
                placeholder="Minimum 4 digits"
                maxLength={8}
                required
              />
              {errors.pin && <div className="error-message">{errors.pin}</div>}
            </div>
            <div className="input-group">
              <label>Confirm Pin<span className="required-star">*</span>:</label>
              <input
                name="confirmPin"
                type="password"
                value={fields.confirmPin}
                onChange={handleChange}
                className={errors.confirmPin && "error-field"}
                maxLength={8}
                required
              />
              {errors.confirmPin && <div className="error-message">{errors.confirmPin}</div>}
            </div>
          </div>
          <div className="section-title">Financial Profile:</div>
          <div className="form-row">
            <div className="input-group">
              <label>Employment:</label>
              <input name="employment" type="text" value={fields.employment} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Company Address:</label>
              <input name="companyAddress" type="text" value={fields.companyAddress} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Company Telephone:</label>
              <input name="companyPhone" type="text" value={fields.companyPhone} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Years At Company:</label>
              <input name="yearsAtCompany" type="number" value={fields.yearsAtCompany} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Yearly Salary:</label>
              <input name="yearlySalary" type="number" value={fields.yearlySalary} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Account Selection:</label>
              <input name="accountSelection" type="text" value={fields.accountSelection} onChange={handleChange} />
            </div>
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