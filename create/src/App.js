import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";

import Header from "./Components/Header/Header";
import Create from "./Components/Create/Create";
import Dashboard from "./Components/Dashboard/Dashboard";
import IncomeManagement from "./Components/IncomeManagement/IncomeManagement";
import Register from "./Components/Register/Register";
import AccountSettings from "./Components/Accounts/AccountSettings"; 
import TwoStepVerification from "./Components/TwoStep/TwoStep";
import Transactions from './Components/Transactions/Transactions';
import Chatbot from "./Components/Chatbot/chatbot";

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
       
        {/*forgot password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/*two step verify */}
        <Route path="/verify" element={<TwoStepVerification />} />

        {/* Dashboard after login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Income management */}
        <Route path="/income-management" element={<IncomeManagement />} />

        {/* Account settings */}
        <Route path="/account" element={<AccountSettings />} />

        {/* Registration */}
        <Route path="/register" element={<Register />} />

        {/* Transactions */}
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Chatbot/>
    </>
  );
}

export default App;
