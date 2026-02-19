import React, { useState } from "react";
import { FaComments, FaSmile, FaHandsHelping, FaPuzzlePiece, FaChild, FaUserFriends, FaBullhorn, FaAssistiveListeningSystems, FaBrain, FaUtensils, FaWalking, FaUsers} from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./Home.css";

export default function Home() {
   usePageTitle("Home | Aaradhya Institute");
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (key) => {
    setLoadedImages((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  return (
    <div className="home-page">

      {/* ================= HERO / BANNER ================= */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Empowering Neurodiverse Lives with Compassionate Therapy</h1>
          <p>
            Comprehensive neuroaffirming autism therapy services tailored to
            each individual’s strengths and needs — in person & virtual.
          </p>
        </div>

        <div className={`hero-image ${loadedImages.hero ? "loaded" : ""}`}>
          <img
            src="/images/home-banner.jpg"
            alt="Therapy support"
            onLoad={() => handleImageLoad("hero")}
            loading="eager"
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              We provide comprehensive, neuroaffirming autism therapy services
              tailored to each individual’s strengths and needs. Our global
              practice offers both in-person and virtual therapy options.
            </p>
            <p>
              From online speech therapy to occupational therapy and special
              education support, we are here to support families across the globe.
            </p>
            <p>We are here to support your journey, wherever you are.</p>
          </div>
        </div>
      </section>

       {/* ================= THERAPIES ================= */}
      <section className="therapies-section">
        <h2>Our Therapies at a Glance</h2>
        <div className="therapy-grid">
          <div className="therapy-card"><FaComments className="therapy-icon" /><span>Social communication skills</span></div>
          <div className="therapy-card"><FaSmile className="therapy-icon" /><span>Oral motor therapy</span></div>
          <div className="therapy-card"><FaHandsHelping className="therapy-icon" /><span>Sensory Integration Therapy</span></div>
          <div className="therapy-card"><FaPuzzlePiece className="therapy-icon" /> <span>Reflex Integration Therapy</span></div>
          <div className="therapy-card"><FaChild className="therapy-icon" /> <span>Play Therapy</span></div>
          <div className="therapy-card"><FaUserFriends className="therapy-icon" /><span>Parent Counselling</span></div>
          <div className="therapy-card"> <FaBullhorn className="therapy-icon" /> <span>Communication Techniques</span></div>
          <div className="therapy-card"><FaAssistiveListeningSystems className="therapy-icon" /><span>AAC (Augmentative & Alternative Communication)</span></div>
          <div className="therapy-card"><FaBrain className="therapy-icon" /><span>Behavior Management Strategies</span></div>
          <div className="therapy-card"><FaUtensils className="therapy-icon" /><span>Oral Motor Strengthening & Feeding Therapy</span></div>
          <div className="therapy-card"><FaWalking className="therapy-icon" /><span>Physiotherapy</span> </div>
          <div className="therapy-card"><FaUsers className="therapy-icon" /><span>Group Therapy & Social Skills</span></div>
         </div>
      </section>

       {/* ================= WHY CHOOSE US ================= */}
      <section className="choose-section">
        <div className="choose-inner">
          <div className="choose-card">
            <h2>Why Choose Us</h2>
          </div>
         <div className="choose-info">
           Our tele consultation allows you to get the full-service offerings from the
           comfort of your home. No more rushing through traffic and schedules, no more
           multi-tasking.
         </div>

          <div className="features-grid">
            <div className="feature-box">Social Communication Skills Development Program</div>
            <div className="feature-box">Qualified Professionals</div>
            <div className="feature-box">Flexible Scheduling</div>
            <div className="feature-box">Individualized Plans</div>
            <div className="feature-box">Collaborative Approach</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <h2>Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <div className={`service-img-wrap ${loadedImages.speech ? "loaded" : ""}`}>
              <img
                src="/images/speech.jpg"
                alt="Speech & Language Therapy"
                onLoad={() => handleImageLoad("speech")}
                loading="lazy"
              />
            </div>
            <p>Speech & Language Therapy</p>
          </div>

          <div className="service-card">
            <div className={`service-img-wrap ${loadedImages.occupational ? "loaded" : ""}`}>
              <img
                src="/images/occupational.jpg"
                alt="Occupational Therapy"
                onLoad={() => handleImageLoad("occupational")}
                loading="lazy"
              />
            </div>
            <p>Occupational Therapy</p>
          </div>

          <div className="service-card">
            <div className={`service-img-wrap ${loadedImages.behavior ? "loaded" : ""}`}>
              <img
                src="/images/behavior.jpg"
                alt="Behavior Management"
                onLoad={() => handleImageLoad("behavior")}
                loading="lazy"
              />
            </div>
            <p>Behavior Management</p>
          </div>

          <div className="service-card">
            <div className={`service-img-wrap ${loadedImages.early ? "loaded" : ""}`}>
              <img
                src="/images/early.jpg"
                alt="Early Intervention"
                onLoad={() => handleImageLoad("early")}
                loading="lazy"
              />
            </div>
            <p>Early Intervention</p>
          </div>

          <div className="service-card">
            <div className={`service-img-wrap ${loadedImages.special ? "loaded" : ""}`}>
              <img
                src="/images/special.jpg"
                alt="Special Education"
                onLoad={() => handleImageLoad("special")}
                loading="lazy"
              />
            </div>
            <p>Special Education</p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {/* <section className="testimonials-section">
        <h2>Testimonials</h2>
        <p>Testimonials will go here…</p>
      </section> */}

    </div>
  );
}
