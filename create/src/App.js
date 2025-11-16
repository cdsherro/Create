import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Create from './Components/Create/Create';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile'
import Register from './Components/Register/Register'
import IncomeManagement from './Components/IncomeManagement/IncomeManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} /> {/* Login page */}
        <Route path="/dashboard" element={
          <>
            <Header />
            <Dashboard />
          </>
        } /> {/* Dashboard page */}
        <Route path="/profile" element={
          <>
            <Header />
            <Profile />
          </>
        } /> {/*Profile page */}
        <Route path="/register" element={<Register />} />
        <Route path="/income-management" element={
          <>
            <Header />
            <IncomeManagement />
          </>
        } /> {/* Income Management page */}
      </Routes>
    </Router>
  );
}

export default App;