import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import budget_icon from "../Assets/budget.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // basic checks
    if (!email.trim() || !newPassword || !confirmPassword) {
      setMessage("Please fill out all fields.");
      return;
    }

    // simple email check
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password must match.");
      return;
    }

    // Later: call backend to actually update the password

    // For now, pretend it worked and send the user back to Login
    alert("Your new password has been registered. Please log in with your new password.");
    navigate("/create"); // go back to login page
  };

  const handleBackToLogin = () => {
    navigate("/create");
  };

  return (
    <div className="forgot-root">
      <div className="forgot-card">
        <img src={budget_icon} alt="Budget App Logo" className="forgot-logo" />

        <h1 className="forgot-title">Register New Password</h1>

        <p className="forgot-text">
          To register a new password, please enter the email address associated with your
          account and your new password.
        </p>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <label className="forgot-label">
            Email Address
            <input
              type="email"
              className="forgot-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="forgot-label">
            New Password
            <input
              type="password"
              className="forgot-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              autoComplete="new-password"
            />
          </label>

          <label className="forgot-label">
            Confirm New Password
            <input
              type="password"
              className="forgot-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              autoComplete="new-password"
            />
          </label>

          {message && <div className="forgot-message">{message}</div>}

          <div className="forgot-buttons">
            <button
              type="button"
              className="forgot-btn secondary"
              onClick={handleBackToLogin}
            >
              Back to Login
            </button>

            <button type="submit" className="forgot-btn primary">
              Register New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
