
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // import css file

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/* Hamburger button */}
        <div className="hamburger" onClick={() => setSidebar(true)}>
          &#9776; {/* 3 lines icon */}
        </div>

        {/* Logo */}
        <div className="logo">Smart Parking Management System</div>

        {/* Profile */}
        <div className="profile">
        <Link to="/user-profile" >
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" />
            <div>Profile</div>
        </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebar ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebar(false)}>×</button>
        <ul>
            <li><Link to="/user-home" onClick={() => setSidebar(false)}>Home</Link></li>
            {/*<li><Link to="/user-dashboard" onClick={() => setSidebar(false)}>Dashboard</Link></li>*/}
            <li><Link to="/slotbooking" onClick={() => setSidebar(false)}>Booking</Link></li>
            <li><Link to="/cancelbooking" onClick={() => setSidebar(false)}>Cancel</Link></li>
            <li><Link to="/BookingHistory" onClick={() => setSidebar(false)}>History</Link></li>
            <li><Link to="/user-profile" onClick={() => setSidebar(false)}>Profile</Link></li>

            
        </ul>
      </div>

      {/* Overlay background when sidebar is open */}
      {sidebar && <div className="overlay" onClick={() => setSidebar(false)}></div>}
    </>
  );
}

export default Navbar;
