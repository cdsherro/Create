import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Create from './Components/Create/Create';
import Header from './Components/Dashboard/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} />         {/* Login page */}
        <Route path="/dashboard" element={<>
      <Header />
      <Dashboard />
    </>} /> {/* Dashboard page */}
      </Routes>
    </Router>
  );
}

export default App;
