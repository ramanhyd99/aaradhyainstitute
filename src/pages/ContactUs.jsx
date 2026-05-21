import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp, FaShareAlt, FaLinkedin } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./ContactUs.css";

export default function ContactUs() {
  usePageTitle("Contact Us | Aaradhya Institute");
  return (
    <div className="contact-page">

      {/* Hero Banner */}
      {/* <div className="contact-hero">
        <div className="hero-content">
          <h1>Contact Aaradhya Foundation</h1>
          <p>Supporting children with special needs to learn, grow, and thrive.</p>
        </div>
      </div> */}

      {/* About Us */}
      {/* <div className="about-section">
        <h2>About Us</h2>
        <p>
          Aaradhya Foundation is a dedicated child development and therapy centre supporting 
          children with special needs through personalized, evidence-based interventions. 
          Our mission is to empower every child to learn, grow, and thrive in a nurturing and inclusive environment.
        </p>
      </div> */}

      {/* Addresses */}
      <div className="contact-split">
        <div className="contact-card visit-card">
          <div className="icon-wrapper"><FaMapMarkerAlt /></div>
          <h3>Visit Us</h3>
          <p>
            Om building, Plot no 20<br />
            1st floor, Road no 3<br />
            Ramchandra Reddy Nagar Colony<br />
            BHEL Township, Hyderabad
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+919963159347">+91 99631 59347</a>
          </p>
        </div>

        <div className="contact-card communication-card">
          <div className="icon-wrapper"><FaEnvelope /></div>
          <h3>Communication Address</h3>
          <p>
            Aaradhya Institute of Special Education<br />
            House no. 234, New Sai Bhagwan Colony, Beeramguda
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+919963159347">+91 99631 59347</a>
          </p>
          <p>
            <FaEnvelope /> <a href="mailto:info@aaradhyafoundation.com">info@aaradhyafoundation.com</a>
          </p>
        </div>
      </div>

      {/* Location & Social */}
      <div className="contact-split">
        <div className="contact-card map-card compact-card">
          <div className="icon-wrapper"><FaMapMarkerAlt /></div>
          <h3>Our Location</h3>
          <p>Find us on the map below and visit our child development center in Hyderabad.</p>
          <div className="map-container compact-map">
            <iframe
              title="Aaradhya Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.990810590395!2d78.29650397505459!3d17.507952099320885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d334e1c4971%3A0x2312461261a36059!2sAaradhya%20Speech%20Centre!5e0!3m2!1sen!2sin!4v1771858728125!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-card social-card compact-card">
          <div className="icon-wrapper"><FaShareAlt /></div>
          <h3>Connect With Us</h3>
          <p>
            Stay connected with Aaradhya Foundation and follow our journey on social media.
            Get updates, see highlights from our programs, and celebrate milestones of our children.
            Reach out directly on WhatsApp for inquiries or appointments. Our team is always happy
            to support your child’s growth and development.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/aaradhyaspeechcentre/" target="_blank" rel="noreferrer">
              <FaInstagram style={{ color: '#C13584', fontSize: '2.5rem' }} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
              <FaWhatsapp style={{ color: '#25D366', fontSize: '2.5rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/swarna-reddy-special-educator-71a811389/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: '#2556d3', fontSize: '2.5rem' }} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
