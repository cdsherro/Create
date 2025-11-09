import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/budget_app_figma_logo.png';
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="logo-container">
          <img src={logo} alt="Commerce Bank" className="bank-logo" />
        </div>

        {/* Right: Buttons */}
        <div className="right-section">
          <Link to="/dashboard" className="dashboard-btn">
            Dashboard
          </Link>

          {/* User icon that links to profile */}
          <Link to="/profile" className="user-icon-link">
            <div className="user-icon">
              <i className="bi-person"></i>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
