import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-brand"></div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Certification
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="nav-button" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="nav-button">Chatbot</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
