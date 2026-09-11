import React from "react";
import { FaSmile } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./SchoolReadinessProgramme.css";
import BookNow from "../components/BookNow";

export default function SchoolReadinessProgramme() {
  usePageTitle("School Readiness Programme | Aaradhya Institute");

  return (
    <div className="school-page">
      <section className="school-split">
        <div className="school-left"><img src="/images/special.jpg" alt="School Readiness Programme" /></div>
        <div className="school-right"><h1>School Readiness Programme</h1><div className="school-intro"><p>Starting school is an important milestone for every child. But being school ready is much more than knowing alphabets and numbers. A child also needs to listen, communicate, participate, follow routines, interact with others and manage everyday classroom activities. Our School Readiness Programme helps children develop the foundational skills needed to participate more confidently in a school environment.</p></div></div>
      </section>
      <section className="school-content">
        <div className="school-block light"><h2>What Does School Readiness Include?</h2><ul><li>Fine-motor skills</li><li>Early literacy</li><li>Early numeracy</li><li>Communication skills</li><li>Social &amp; group skills</li><li>Self-care &amp; independence</li></ul></div>
        <div className="school-block dark"><h2>School Readiness Is More Than Academics</h2><p>A child may know the alphabet but still need support to sit for an activity, follow an instruction, ask for help, wait for a turn, communicate with a teacher or move between activities. Children need the skills to participate in learning.</p></div>
        <div className="school-block light"><h2>School Readiness for Children With Additional Needs</h2><p>The programme is adapted according to each child's individual strengths and support needs.</p><ul><li>Speech and language delays</li><li>Autism and behavioural challenges</li><li>Developmental delays</li><li>Learning or attention difficulties</li><li>Social communication difficulties</li><li>Delays in self-care</li></ul></div>
      </section>
      <section className="school-ending"><FaSmile /><p>Ready to learn. Ready to participate. Ready for school.</p></section>
      <BookNow />
    </div>
  );
}
