import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTicketAlt, FaClock, FaHistory, FaHeadset, FaCog } from "react-icons/fa";
import './Siderbar.css';

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/ticket", label: "Ticket", icon: <FaTicketAlt /> },
    { to: "/schedules", label: "Schedules", icon: <FaClock /> },
    { to: "/history", label: "History", icon: <FaHistory /> },
    { to: "/supports", label: "Supports", icon: <FaHeadset /> },
    { to: "/settings", label: "Settings", icon: <FaCog /> }
  ];

  return (
    <nav className="sidebar">
      <h2 className="logo">SP FLIGHTS</h2>
      <ul>
        {links.map(({ to, label, icon }) => (
          <li key={to} className={path === to ? "active" : ""}>
            <Link to={to} className={path === to ? "active" : ""}>
              <span className="icon">{icon}</span>
              <span className="label">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
