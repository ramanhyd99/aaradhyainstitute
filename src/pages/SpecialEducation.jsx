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
<b>Special Education is personalised learning support for children who learn, communicate, behave or develop differently from other children.</b><br/><br/>

Every child learns in their own way. Some children may need extra support with <b>learning, attention, communication, memory, understanding instructions, writing, reading, or completing everyday tasks.</b><br/><br/>

Special Education helps identify <b>how a child learns best</b> and then uses teaching methods that match their individual needs.            </p>
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
         <h3>Depending on the Child's Needs, Support May Focus On:</h3>
         <ul>
           <li><FaCheckCircle className="se-icon" /> Reading, writing and early academic skills</li>
           <li><FaCheckCircle className="se-icon" /> Attention and concentration</li>
           <li><FaCheckCircle className="se-icon" /> Following instructions and completing tasks</li>
           <li><FaCheckCircle className="se-icon" /> Memory and understanding concepts</li>
           <li><FaCheckCircle className="se-icon" /> Communication and classroom participation</li>
           <li><FaCheckCircle className="se-icon" /> Learning through visual aids and hands-on activities</li>
           <li><FaCheckCircle className="se-icon" /> Independent learning</li>
           <li><FaCheckCircle className="se-icon" /> Social and classroom skills</li>
           <li><FaCheckCircle className="se-icon" /> Confidence and everyday independence</li>
         </ul>
       </div>

        <div className="se-block se-light">
          <h2>How It Helps the Child</h2>
          <ul>
{/*             <li><FaCheckCircle className="se-icon" /> Develop essential academic skills.</li> */}
{/*             <li><FaCheckCircle className="se-icon" /> Strengthen communication, attention, and social interaction.</li> */}
{/*             <li><FaCheckCircle className="se-icon" /> Build confidence and self-esteem.</li> */}
{/*             <li><FaCheckCircle className="se-icon" /> Gain independence in daily life and learning tasks.</li> */}
{/*             <li><FaCheckCircle className="se-icon" /> Feel included, supported, and celebrated.</li> */}
Instead of expecting every child to learn in the same way, Special Education <b>adapts the teaching approach to the child</b> with IEPs.<br/><br/>

A child may learn better through <b>visuals, repetition, hands-on activities, simple instructions, structured routines or individualised teaching( One on One Therapy)</b><br/><br/>

Our goal is help them become <b>more confident, independent and successful in everyday learning.</b>
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
