import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="top-bar">
        Are you ready to make a difference in your community?
        <a href="https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><span> Join the Aaradhya Institute team today!</span></a>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-a">Aaradhya</span>{" "}
            <span className="logo-i">Institute</span>
          </Link>

          {/* MOBILE HAMBURGER */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* NAV LINKS */}
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>

            {/* SERVICES DROPDOWN */}
            <li className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
              <div className="dropdown-title" onClick={toggleDropdown}>
                Services
              </div>
              <ul className="fade-dropdown">
                <li><Link to="/services/speech-language-therapy" onClick={() => setMenuOpen(false)}>Speech & Language Therapy</Link></li>
                <li><Link to="/services/occupational-therapy" onClick={() => setMenuOpen(false)}>Occupational Therapy</Link></li>
                <li><Link to="/services/physiotherapy"  onClick={() => setMenuOpen(false)} >Physiotherapy</Link></li>
                <li><Link to="/services/behavior-management" onClick={() => setMenuOpen(false)}>Behavior Management</Link></li>
                <li><Link to="/services/early-intervention" onClick={() => setMenuOpen(false)}>Early Intervention</Link></li>
                <li><Link to="/services/special-education" onClick={() => setMenuOpen(false)}>Special Education</Link></li>
                <li><Link to="/services/parent-counseling" onClick={() => setMenuOpen(false)}>Parent Counseling</Link></li>
              </ul>
            </li>

            <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/donate" className="donate-link" onClick={() => setMenuOpen(false)}> Donate</Link></li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
