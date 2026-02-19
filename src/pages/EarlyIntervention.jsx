import React from "react";
import { FaSmile } from "react-icons/fa"; 
import usePageTitle from "../hooks/usePageTitle";
import "./EarlyIntervention.css";

export default function EarlyIntervention() {
  usePageTitle("Early Intervention | Aaradhya Institute");
  return (
    <div className="ei-page">
       
      {/* SPLIT HERO + INTRO */}
      <section className="ei-split">
        <div className="ei-left">
          <img src="/images/early-hero.jpg" alt="Early Intervention" />
        </div>
        <div className="ei-right">
          <h1>Early Intervention</h1>
          <div className="ei-intro">
           <p>
             The first few years of life shape how a child learns, communicates, and connects with the world. For children showing signs of autism or other developmental delays, early support can make a life-changing difference. Early intervention helps identify challenges quickly, provides tailored strategies to support learning and development, and empowers families with guidance and tools. By engaging children in structured, developmentally appropriate activities, we help build foundational skills that foster communication, social interaction, and confidence, laying the groundwork for lifelong growth and success.
          </p>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="ei-content">

        <div className="ei-block ei-light">
          <h2>Why Early Intervention Matters</h2>
          <p>The earlier we act, the more a child’s brain can adapt and grow.</p>
        </div>

        <div className="ei-block ei-dark">
          <h2>What Progress Can Look Like</h2>
          <ul>
            <li>Clearer communication and better understanding</li>
            <li>More eye contact, play, and social interaction</li>
            <li>Greater independence in daily activities</li>
            <li>Improved learning, focus, and behavior</li>
          </ul>
        </div>

        <div className="ei-block ei-light">
          <h2>Typical Developmental Milestones</h2>
          <ul>
            <li>By 12 months: Responds to name, babbles, makes eye contact, shows interest in people</li>
            <li>By 18 months: Says a few words, points to show interest, follows simple directions \</li>
            <li>By 2 years: Uses short phrases, imitates actions, enjoys simple pretend play</li>
            <li>By 3 years: Talks in short sentences, plays with other children, shows a range of emotions</li>
          </ul>
        </div>

        <div className="ei-block ei-dark">
          <h2>Red Flags to Watch For</h2>
          <ul>
            <li>Limited or no response to sounds or name call</li>
            <li>Seems to absorbed in their own world</li>
            <li>Fascination for spinning</li>
            <li>No babbling or gestures (like pointing or waving) by 12 months</li>
            <li>No single words by 16 months or no two-word phrases by 2 years</li>
            <li>Limited eye contact or lack of interest in playing with others</li>
            <li>Repetitive movements or strong reactions to stimuli</li>
          </ul>
        </div>

      </section>

      {/* WARM CLOSING */}
      <section className="ei-ending">
        <FaSmile className="ei-closing-icon" />
        <p>
          Early intervention can change a child’s path. With support and understanding, children can thrive and reach their potential.
        </p>
      </section>

    </div>
  );
}
