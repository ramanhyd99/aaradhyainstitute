import React, { useState } from "react";
import { FaMoneyBillWave, FaClock, FaBoxOpen } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./Donate.css";

const Donate = () => {
   usePageTitle("Donate | Aaradhya Institute");
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="donate-page">

      {/* Top split: left image + right content */}
      <div className="donate-top-split">
        <div className={`donate-top-image ${imgLoaded ? "loaded" : ""}`}>
          <img
            src="/images/donate.jpg"
            alt="Support Children"
            onLoad={() => setImgLoaded(true)}
          />
        </div>

        <div className="donate-top-content">
          <h1>Support Aaradhya Foundation</h1>
          <p>
            We witness the courage, resilience and determination of children and families every day. 
            Many face challenges that most of us can hardly imagine — whether it is accessing therapies, educational programs, 
            or even basic resources. Your support gives them hope, opens doors, and creates opportunities for growth. 
            Whether it’s your time, money, or resources, you can help a child take a step forward, learn a new skill, 
            or simply feel understood and cared for.
          </p>
        </div>
      </div>

      {/* Bottom full-width content */}
      <div className="donate-bottom">

        {/* How You Can Make a Difference */}
        <div className="donate-section">
          <h2>How You Can Make a Difference</h2>
          <div className="donate-cards">
            <div className="donate-card">
              <FaMoneyBillWave size={50} color="#d35400" />
              <h3>Donate Money</h3>
              <p>
                Your financial support powers our programs, funds essential therapies, provides scholarships, 
                and helps us reach more families in need. Every donation, no matter the size, creates a meaningful impact.
              </p>
            </div>

            <div className="donate-card">
               <FaClock size={50} color="#d35400" />
              <h3>Donate Your Time</h3>
              <p>
                Volunteers are the heartbeat of our foundation. By donating your time, you can assist in programs, events, 
                community outreach, or administrative support. Your presence, care, and energy make a tangible difference.
              </p>
            </div>

            <div className="donate-card">
             <FaBoxOpen size={50} color="#d35400" />
              <h3>Donate Resources</h3>
              <p>
                Do you have equipment, supplies, or materials that could support our work? Donations of therapy tools, educational resources, 
                or other essentials help us provide better services and touch more lives.
              </p>
            </div>
          </div>
        </div>

        {/* Why Your Support Matters */}
        <div className="donate-section">
          <h2>Why Your Support Matters</h2>
          <ul>
            <li>Provide specialized therapies and educational programs</li>
            <li>Support families with training, guidance, and emotional encouragement</li>
            <li>Expand outreach to underserved communities</li>
            <li>Empower children to reach their full potential</li>
          </ul>
        </div>

        {/* Join Us Section */}
        <div className="donate-section">
          <h2>Join Us in Making a Lasting Impact</h2>
          <p>
            Your gift of time, money, or resources is more than just a donation. 
            It is hope for a child, relief for a family, and a step toward a brighter future.
          </p>
        </div>

        {/* Payment Info Card */}
       <div className="donate-section donate-payment-card">
       <div className="payment-left">
       <h2>Bank Account Details</h2>
       <p><strong>Aaradhya Foundation</strong></p>
       <p>Account Number: 42986207955</p>
       <p>IFSC Code: SBIN0015918</p>
       <p>Branch: Kakatiyanagar Branch</p>
      </div>

       <div className="payment-right">
        <h2>Donate Using UPI</h2>
        <p>Scan the QR code with your UPI app:</p>
        <img src="/images/scanner.jpeg" alt="UPI QR Code" />
      </div>
    </div>
   </div>
    </section>
  );
};

export default Donate;
