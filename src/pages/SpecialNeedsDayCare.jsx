import React from "react";
import { FaSmile } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./SpecialNeedsDayCare.css";
import BookNow from "../components/BookNow";

export default function SpecialNeedsDayCare() {
  usePageTitle("Special Needs Day Care | Aaradhya Institute");

  return (
    <div className="daycare-page">
      <section className="daycare-split">
        <div className="daycare-left"><img src="/images/group.jpg" alt="Special Needs Day Care" /></div>
        <div className="daycare-right"><h1>Special Needs Day Care</h1><div className="daycare-intro"><p>Are you looking for a structured day-care environment where your child can learn, participate, communicate and develop everyday skills? At Aaradhya Speech &amp; Therapy Centre, our Special Needs Day Care programme provides a supportive environment designed around the individual developmental needs of each child. We create opportunities for learning throughout the day.</p></div></div>
      </section>
      <section className="daycare-content">
        <div className="daycare-block light"><h2>What Does Our Special Needs Day Care Include?</h2><p>Our programme may include activities that support:</p><ul><li>Communication &amp; language</li><li>Learning &amp; cognitive development</li><li>Social interaction</li><li>ADL &amp; life skills</li><li>Behaviour &amp; attention</li></ul></div>
        <div className="daycare-block dark"><h2>A Structured Day Helps Children Know What Comes Next</h2><p>Children often participate more comfortably when daily activities follow a predictable structure. A typical day may include learning activities, play, snack and self-care routines.</p></div>
        <div className="daycare-block light"><h2>More Than Day Care</h2><p>We believe a meaningful day should provide opportunities to communicate, learn, play, interact and practise.</p></div>
      </section>
      <section className="daycare-ending"><FaSmile /><p>Every day can be a learning opportunity.</p></section>
      <BookNow />
    </div>
  );
}
