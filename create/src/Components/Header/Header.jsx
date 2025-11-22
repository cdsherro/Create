// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Dropdown } from "react-bootstrap";
// import logo from '../Assets/budget_app_figma_logo.png';
// import './Header.css';

// export default function Header() {
//   const navigate = useNavigate();
//   const pageLinks = [
//     { label: "Dashboard", path: "/dashboard" },
//     { label: "Income Management", path: "/income-management" },
//     { label: "Transactions", path: "/transactions" },
//     { label: "User Profile", path: "/profile" },
//     { label: "Account Settings", path: "/account" },
//     { label: "App Settings", path: "/app-settings" }
//   ];

//   return (
//     <nav className="navbar header">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         {/* Left: Logo */}
//         <div className="logo-container">
//           <img src={logo} alt="Budget App Logo" className="bank-logo" />
//         </div>

//         {/* Center: Navigation Dropdown */}
//         <div className="nav-dropdown">
//           <Dropdown>
//             <Dropdown.Toggle className="nav-dropdown-btn" id="dropdown-pages">
//               Menu
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               {pageLinks.map((page, idx) => (
//                 <Dropdown.Item key={idx} onClick={() => navigate(page.path)}>
//                   {page.label}
//                 </Dropdown.Item>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import logo from '../Assets/budget_app_figma_logo.png';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const pageLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Income Management", path: "/income-management" },
    { label: "Transactions", path: "/transactions" },
    { label: "User Profile", path: "/profile" },
    { label: "Account Settings", path: "/account" },
    { label: "App Settings", path: "/app-settings" }
  ];

  const handleLogout = () => {
    navigate("/create");
  };

  return (
    <nav className="navbar header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="logo-container">
          <img src={logo} alt="Budget App Logo" className="bank-logo" />
        </div>

        {/* Center: Navigation Dropdown */}
        <div className="nav-dropdown">
          <Dropdown>
            <Dropdown.Toggle className="nav-dropdown-btn" id="dropdown-pages">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {pageLinks.map((page, idx) => (
                <Dropdown.Item key={idx} onClick={() => navigate(page.path)}>
                  {page.label}
                </Dropdown.Item>
              ))}
              {/* Logout item */}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} className="logout-item">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
