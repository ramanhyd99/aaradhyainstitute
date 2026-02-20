import React, { useState } from "react";
import {
  FaComments,
  FaSmile,
  FaHandsHelping,
  FaPuzzlePiece,
  FaChild,
  FaUserFriends,
  FaBullhorn,
  FaAssistiveListeningSystems,
  FaBrain,
  FaUtensils,
  FaWalking,
  FaUsers,
} from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./Home.css";
import { Link } from "react-router-dom";


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
      {/* ================= HERO ================= */}
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

      {/* ================= THERAPIES ================= */}
      <section className="therapies-section">
        <h2>Our Therapies at a Glance</h2>
        <div className="therapy-grid">
          <div className="therapy-card"><FaComments className="therapy-icon" /><span>Social communication skills</span></div>
          <div className="therapy-card"><FaSmile className="therapy-icon" /><span>Oral motor therapy</span></div>
          <div className="therapy-card"><FaHandsHelping className="therapy-icon" /><span>Sensory Integration Therapy</span></div>
          <div className="therapy-card"><FaPuzzlePiece className="therapy-icon" /><span>Reflex Integration Therapy</span></div>
          <div className="therapy-card"><FaChild className="therapy-icon" /><span>Play Therapy</span></div>
          <div className="therapy-card"><FaUserFriends className="therapy-icon" /><span>Parent Counselling</span></div>
          <div className="therapy-card"><FaBullhorn className="therapy-icon" /><span>Communication Techniques</span></div>
          <div className="therapy-card"><FaAssistiveListeningSystems className="therapy-icon" /><span>AAC (Augmentative & Alternative Communication)</span></div>
          <div className="therapy-card"><FaBrain className="therapy-icon" /><span>Behavior Management Strategies</span></div>
          <div className="therapy-card"><FaUtensils className="therapy-icon" /><span>Oral Motor Strengthening & Feeding Therapy</span></div>
          <div className="therapy-card"><FaWalking className="therapy-icon" /><span>Physiotherapy</span></div>
          <div className="therapy-card"><FaUsers className="therapy-icon" /><span>Group Therapy & Social Skills</span></div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="choose-section">
        <div className="choose-inner">
          <h2>Why Choose Us</h2>

          <div className="choose-info">
            Our tele consultation allows you to get the full-service offerings from the
            comfort of your home. No more rushing through traffic and schedules,
            no more multi-tasking.
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
  {[
    { key: "speech", img: "speech.jpg", label: "Speech & Language Therapy", path: "/services/speech-language-therapy" },
    { key: "occupational", img: "occupational.jpg", label: "Occupational Therapy", path: "/services/occupational-therapy" },
    { key: "behavior", img: "behavior.jpg", label: "Behavior Management", path: "/services/behavior-management" },
    { key: "early", img: "early.jpg", label: "Early Intervention", path: "/services/early-intervention" },
    { key: "special", img: "special.jpg", label: "Special Education", path: "/services/special-education" },
    { key: "parent", img: "parent.jpg", label: "Parent Counseling", path: "/services/parent-counseling" },
    { key: "physio", img: "physio.jpg", label: "Physiotherapy", path: "/services/physiotherapy" },
  ].map((service) => (
            <Link to={service.path} className="service-link" key={service.key}>
  <div className="service-card">
    <div className={`service-img-wrap ${loadedImages[service.key] ? "loaded" : ""}`}>
      <img
        src={`/images/${service.img}`}
        alt={service.label}
        onLoad={() => handleImageLoad(service.key)}
        loading="lazy"
      />
    </div>
    <p>{service.label}</p>
  </div>
</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
