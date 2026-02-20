import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./SpecialEducation.css";
import BookNow from "../components/BookNow";

export default function SpecialEducation() {
   usePageTitle("Special Education | Aaradhya Institute");
  return (
    <div className="se-page">
     
      {/* Hero + Intro */}
      <div className="se-split">
        <div className="se-left">
          <img src="/images/special-hero.jpg" alt="Special Education" />
        </div>
        <div className="se-right">
          <h1>Special Education</h1>
          <div className="se-intro">
            <p>
              Special Education is a personalized approach to teaching children who have learning differences, developmental delays, or disabilities. It focuses on each child’s unique strengths and needs rather than following a one-size-fits-all curriculum. Through structured support, individualized plans, and specialized teaching methods, Special Education helps every child learn at their own pace and in their own style.
            </p>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="se-content">
        <div className="se-block se-light">
          <h2>How It Differs from Mainstream Education</h2>
          <ul>
            <li><FaCheckCircle className="se-icon" /> Adapts teaching methods, materials, and goals to suit the child’s abilities.</li>
            <li><FaCheckCircle className="se-icon" /> Uses Individualized Education Plans (IEPs) or Individualized Learning Programs (ILPs).</li>
            <li><FaCheckCircle className="se-icon" /> Focuses equally on academic, social, emotional, and life skills.</li>
            <li><FaCheckCircle className="se-icon" /> Encourages collaboration between teachers, therapists, and families.</li>
          </ul>
        </div>

        <div className="se-block se-dark">
          <h2>Tools and Techniques Our Team Uses</h2>
          <ul>
            <li><FaCheckCircle className="se-icon" /> Visual supports like charts, schedules, picture cards.</li>
            <li><FaCheckCircle className="se-icon" /> Multisensory teaching using touch, sound, and movement.</li>
            <li><FaCheckCircle className="se-icon" /> Assistive technology such as speech apps, tablets, adaptive keyboards.</li>
            <li><FaCheckCircle className="se-icon" /> Therapy integration including speech, occupational, and play therapy.</li>
            <li><FaCheckCircle className="se-icon" /> Positive reinforcement and structured routines.</li>
          </ul>
        </div>

        <div className="se-block se-light">
          <h2>How It Helps the Child</h2>
          <ul>
            <li><FaCheckCircle className="se-icon" /> Develop essential academic skills.</li>
            <li><FaCheckCircle className="se-icon" /> Strengthen communication, attention, and social interaction.</li>
            <li><FaCheckCircle className="se-icon" /> Build confidence and self-esteem.</li>
            <li><FaCheckCircle className="se-icon" /> Gain independence in daily life and learning tasks.</li>
            <li><FaCheckCircle className="se-icon" /> Feel included, supported, and celebrated.</li>
          </ul>
        </div>

        <div className="se-block se-dark">
          <h2>Every Child Can Learn</h2>
          <p>
            With the right support system, every child can succeed. Special Education isn’t just about teaching. It is about unlocking potential, nurturing confidence, and helping children thrive in school and beyond.
          </p>
        </div>
      </div>
       <BookNow />
    </div>
  );
}
