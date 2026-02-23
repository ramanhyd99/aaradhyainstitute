import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./SocialCommunicationSkills.css";
import BookNow from "../components/BookNow";

export default function SocialCommunicationSkills() {
  usePageTitle("Social Communication Skills | Aaradhya Institute");
  return (
    <div className="scs-page">

      {/* HERO */}
      <section className="scs-hero">
        <h1>Social Communication Skills</h1>
        <p>
          At Aaradhya Speech Centre, we empower kids through expert-led social communication programs tailored for every stage.
        </p>
      </section>

      {/* CONTENT */}
      <section className="scs-content">

        {/* INTRO */}
        <div className="scs-intro">
          <p>
            Connect, Communicate, Grow.
            Does your child struggle to start a conversation or make friends?
            Social skills are the foundation for a lifetime of confidence. At Aaradhya Speech Centre, our specialized program helps children and teens navigate the social world with ease.
            What we focus on:
          </p>
        </div>

        <div className="scs-section">
          <h2>Ages 3–6</h2>
          <p>
            Focused on foundational speech, interactive play, and building early social confidence through fun activities.
          </p>


        </div>

        <div className="scs-section">
          <h2>Ages 7–11</h2>
          <p>
            Enhancing conversational flow, emotional intelligence, and effective peer-to-peer communication for school-aged success.
          </p>


        </div>

        {/* CLOSING */}
        <div className="scs-section">
          <h2>Ages 12–16</h2>
          <p>
            Mastering advanced social etiquette, public speaking, and self-expression to navigate confident teenage transitions.
          </p>

        </div>

        <section className="bm-closing bm-soft-section">
          <div className="bm-closing-inner">
            <p>Enroll today to unlock your child’s full communicative potential and build lifelong social skills! </p>

          </div>
        </section>

        <BookNow />
      </section>
    </div>
  );
}
