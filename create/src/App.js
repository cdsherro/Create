// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Create from "./Components/Create/Create";
import Dashboard from "./Components/Dashboard/Dashboard";
import IncomeManagement from "./Components/IncomeManagement/IncomeManagement";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Register/Register";
import AccountSettings from "./Components/Accounts/AccountSettings"; 
import TwoStepVerification from "./Components/TwoStep/TwoStep";

function App() {
  const location = useLocation();

  // It hides the header 
  const hideHeaderOn = ["/", "/create"];
  const showHeader = !hideHeaderOn.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        {/* Login / Create as default page */}
        <Route path="/" element={<Create />} />
        <Route path="/create" element={<Create />} />

        <Route path="/verify" element={<TwoStepVerification />} />

        {/* Dashboard after login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Income management */}
        <Route path="/income-management" element={<IncomeManagement />} />

        {/* Account settings */}
        <Route path="/account" element={<AccountSettings />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Registration */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
