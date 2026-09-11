import React from "react";
import { FaSmile } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./AutismTherapyServices.css";
import BookNow from "../components/BookNow";

export default function AutismTherapyServices() {
  usePageTitle("Autism Therapy Services | Aaradhya Institute");

  return (
    <div className="autism-page">
      <section className="autism-split">
        <div className="autism-left"><img src="/images/early.jpg" alt="Autism Therapy Services" /></div>
        <div className="autism-right"><h1>Autism Therapy Services</h1><div className="autism-intro"><p>Every autistic child is different. Some children may need support with communication; others may need help with social interaction, behaviour, sensory processing, learning or daily living skills. At Aaradhya Speech &amp; Therapy Centre, our autism support services are designed around the individual child—not simply the diagnosis.</p></div></div>
      </section>
      <section className="autism-content">
        <div className="autism-block light"><h2>Our Autism Therapy Services</h2><ul><li>Speech &amp; language therapy</li><li>Occupational therapy</li><li>Behaviour support</li><li>Social communication</li><li>ADL &amp; life skills</li></ul></div>
        <div className="autism-block dark"><h2>Autism Support Across Developmental Stages</h2><ul><li>Early intervention: communication, play, joint attention &amp; early learning</li><li>School age: communication, learning, behaviour, social skills &amp; independence</li><li>Adolescence: social communication, functional skills, life skills, self-advocacy &amp; independence</li></ul></div>
        <div className="autism-block light"><h2>Our Approach</h2><p>We listen to parents and understand each child's strengths, concerns and priorities.</p><ul><li>Assess</li><li>Set goals</li><li>Intervene</li><li>Practise</li><li>Review</li></ul></div>
      </section>
      <section className="autism-ending"><FaSmile /><p>Understand the child. Identify the needs. Build meaningful skills.</p></section>
      <BookNow />
    </div>
  );
}
