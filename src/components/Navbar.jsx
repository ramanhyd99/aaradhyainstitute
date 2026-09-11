import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaWhatsapp, 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaChevronDown
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-inner">
          <span>Come join us:</span>

          <div className="navbar-social">
            <a href="https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/aaradhyaspeechcentre/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/swarna-reddy-special-educator-71a811389/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="tel:+919963159347">
              <FaPhoneAlt />
            </a>
            <a href="https://maps.app.goo.gl/xHCkuCo7KTFbozjZA" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt />
            </a>
            <a href="https://x.com/AaradhyaSpeech" target="_blank" rel="noopener noreferrer">
             <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            Aaradhya Institute
          </Link>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>

            <li className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
              <div className="dropdown-title" onClick={toggleDropdown}>
                <span>Services</span>
                <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? "rotate" : ""}`} />
              </div>
              <ul className="fade-dropdown">
                <li><Link to="/services/speech-language-therapy" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Speech & Language Therapy</Link></li>
                <li><Link to="/services/occupational-therapy" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Occupational Therapy</Link></li>
                <li><Link to="/services/physiotherapy" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Physiotherapy</Link></li>
                <li><Link to="/services/behavior-management" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Behavior Management</Link></li>
                <li><Link to="/services/early-intervention" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Early Intervention</Link></li>
                <li><Link to="/services/special-education" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Special Education</Link></li>
                <li><Link to="/services/parent-counseling" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Parent Training & Counselling Support</Link></li>
                <li><Link to="/services/social-communication-skills" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Social Communication Skills</Link></li>
                <li><Link to="/services/adl-life-skills" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>ADL &amp; Life Skills</Link></li>
                <li><Link to="/services/special-needs-day-care" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Special Needs Day Care</Link></li>
                <li><Link to="/services/autism-therapy-services" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>Autism Therapy Services</Link></li>
                <li><Link to="/services/school-readiness-programme" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>School Readiness Programme</Link></li>
                <li><Link to="/services/adhd-therapy-support" onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}>ADHD Therapy &amp; Support</Link></li>
              </ul>
            </li>

            <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>

            {/* Highlighted Button */}
            <li>
              <Link to="https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0"  target="_blank" rel="noopener noreferrer" className="consult-btn" onClick={() => setMenuOpen(false)}>
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
