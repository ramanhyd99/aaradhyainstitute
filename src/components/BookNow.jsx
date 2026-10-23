import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./BookNow.css";

export default function BookNow({
  title = "Book a Consultation",
  description = "Give your child the support they deserve. Speak with our specialists today and take the first step toward progress.",
  callLabel = "Call Now",
  whatsappLabel = "WhatsApp Us",
}) {

  const handlePhoneClick = () => {
    window.location.href = "tel:+919963159347";
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="booknow-section">
      <div className="booknow-card">
        <h2>{title}</h2>
        <p>{description}</p>

        <p className="booknow-services-title">Our Child Development Services include:</p>

        <p className="services-list">
          Speech Therapy | Occupational Therapy | Behaviour Therapy | Early Intervention | Special Education | Parent Training &amp; Counselling Support | Social Communication Skills | Psychotherapy | ADL &amp; Life Skills | Special Needs Day Care and Special School | Autism Therapies | School Readiness Programme | ADHD Therapy &amp; Support
        </p>

        <div className="booknow-buttons">
          <button className="call-btn" onClick={handlePhoneClick}>
            <FaPhoneAlt /> {callLabel}
          </button>

          <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
            <FaWhatsapp /> {whatsappLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
