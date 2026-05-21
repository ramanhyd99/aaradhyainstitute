import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* ABOUT US */}
        <div className="footer-block">
          <h3>Aaradhya Foundation</h3>
          <p>
            A dedicated child development and therapy centre supporting children
            with special needs through personalized, evidence-based interventions.
          </p>
        </div>
        <div className="footer-block">
          <h4 >Donate</h4>
          <p>
            Aaradhya Foundation
            <br />
            A/C: 42986207955
            <br />
            IFSC: SBIN0015918
            <br />
            Branch: Kakatiyanagar
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-block">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/speech-language-therapy">
                Speech & Language Therapy
              </Link>
            </li>
            <li>
              <Link to="/services/occupational-therapy">
                Occupational Therapy
              </Link>
            </li>
             <li>
              <Link to="/services/physiotherapy">
                Physiotherapy
              </Link>
            </li>
            <li>
              <Link to="/services/behavior-management">
                Behavior Management
              </Link>
            </li>
            <li>
              <Link to="/services/early-intervention">
                Early Intervention
              </Link>
            </li>
            <li>
              <Link to="/services/special-education">
                Special Education
              </Link>
            </li>
            <li>
              <Link to="/services/parent-counseling">
                Parent Counseling
              </Link>
            </li>
            <li>
              <Link to="/services/social-communication-skills">
                Social Communication Skills
              </Link>
            </li>
          </ul>
        </div>

        {/* HELP & POLICIES */}
        <div className="footer-block">
          <h4>Policies</h4>
          <ul>
            <li>
              <Link to="/contact-us">Contact & Social</Link>
            </li>
            <li>
              <Link to="/policies">Policies & Terms</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT US + FOLLOW */}
        <div className="footer-block">
          <h4>Contact Us</h4>
          <p>
            Om Building, Plot No. 20
            <br />
            1st Floor, Road No. 3, Ramchandra Reddy Nagar Colony
            <br />
            Ramchandrapuram, BHEL Township, Hyderabad, Telangana – 502032
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919963159347">+91 99631 59347</a>
          </p>
    
           <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:aaradhyafoundation2023@gmail.com">aaradhyafoundation2023@gmail.com</a><br />
            <a href="mailto:info@aaradhyainstitute.com">info@aaradhyainstitute.com</a>
          </p>

          <h4>Follow Us</h4>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/aaradhyaspeechcentre/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaInstagram style={{ color: "#C13584", fontSize: "2rem" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/swarna-reddy-special-educator-71a811389/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin style={{ color: "#0A66C2", fontSize: "2rem" }} />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B919963159347&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ color: "#25D366", fontSize: "2rem" }} />
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Aaradhya Foundation —{" "}
        <span className="rights-reserved">All rights reserved</span>
      </div>
    </footer>
  );
}
