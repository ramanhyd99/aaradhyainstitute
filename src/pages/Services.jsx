import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
 const services = [
   {
    title: "Speech & Language Therapy",
    link: "/services/speech-language-therapy",
    desc: "Improving communication, speech clarity, and language skills."
  },
  {
    title: "Occupational Therapy",
    link: "/services/occupational-therapy",
    desc: "Enhancing daily living, motor, and sensory skills."
  },
  {
    title: "Behavior Management",
    link: "/services/behavior-management",
    desc: "Supporting positive behavior and emotional regulation."
  },
  {
    title: "Early Intervention",
    link: "/services/early-intervention",
    desc: "Helping children reach milestones at an early age."
  },
  {
    title: "Special Education",
    link: "/services/special-education",
    desc: "Personalized learning support for children with special needs."
  }
];

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Click on a service to learn more
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="service-link">View Details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
