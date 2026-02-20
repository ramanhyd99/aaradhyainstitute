import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919963159347";
  };

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
   <div className="floating-whatsapp">
  <FaPhoneAlt className="phone-icon" onClick={handlePhoneClick} />
  <FaWhatsapp className="whatsapp-icon" onClick={handleWhatsAppClick} />
  <FaTimes className="close-icon" onClick={handleCloseClick} />
</div>
  );
};

export default FloatingWhatsApp;
