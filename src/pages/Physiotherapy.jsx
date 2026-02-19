import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./Physiotherapy.css";

export default function Physiotherapy() {
   usePageTitle("Physiotherapy | Aaradhya Institute");
  return (
    <div className="physio-page">
       
      {/* HERO */}
      <section className="physio-hero">
        <h1>Physiotherapy</h1>
        <p>
          Supporting movement, confidence, and independence through compassionate care
        </p>
      </section>

      {/* CONTENT */}
      <section className="physio-content">

        {/* INTRO */}
        <div className="physio-intro">
          <p>
            Every child’s journey is unique. For children with special needs, some
            steps may take a little longer. Our therapists at Aaradhya Foundation
            strongly believe in celebrating every small victory, supporting every
            milestone and helping each child reach their full potential through
            compassionate, personalized physiotherapy.
          </p>
        </div>

        {/* WHY PHYSIOTHERAPY */}
        <div className="physio-section">
          <h2>Why Physiotherapy Matters</h2>
          <p>
            Physiotherapy is much more than exercise. It is about helping your
            child move freely, feel confident and explore their world with joy.
            Through gentle, guided movement and play-based activities,
            physiotherapy helps build strength, coordination and balance while
            preventing stiffness or discomfort.
          </p>

          <p>
            Our therapists at Aaradhya Foundation have a deep understanding of the
            emotional and physical needs of children with special needs. Each
            therapist is skilled in using play-based, evidence-driven techniques
            to make therapy both effective and enjoyable.
          </p>

          <p>
            With the right support, children can develop essential motor skills
            like sitting, crawling, walking, or even running all while having fun
            and feeling proud of their progress.
          </p>

          <p>
            Visit Aaradhya Foundation to experience a safe, supportive environment
            where children feel motivated to move, grow and thrive.
          </p>
        </div>

        {/* WHO WE SUPPORT */}
        <div className="physio-section alt">
          <h2>Who We Support</h2>
          <p>
            We work with children who face a variety of developmental and physical
            challenges, including:
          </p>

          <ul className="physio-list">
            <li>Cerebral Palsy</li>
            <li>Down Syndrome</li>
            <li>Developmental Delay</li>
            <li>Autism Spectrum Disorder (ASD)</li>
            <li>Genetic or Neurological Conditions</li>
          </ul>

          <p>
            No matter the diagnosis, our focus remains the same — to help your
            child move with comfort, confidence, and independence.
          </p>
        </div>

        {/* APPROACH */}
        <div className="physio-section">
          <h2>Our Approach: Family Centered and Play-Based</h2>
          <p>
            We know that every child learns best through play, love, and
            encouragement. That’s why our therapy sessions are designed to be
            fun, engaging, and full of positive energy.
          </p>

          <p>
            Our physiotherapists work closely with parents and caregivers to
            create personalized therapy plans that fit your child’s specific
            needs and goals. We also guide families on simple exercises and
            positioning techniques to continue progress at home — because
            therapy is most effective when it’s a team effort.
          </p>
        </div>

        {/* CLOSING */}
       <div className="physio-closing">
       <div className="physio-closing-card">
       <h3>Every Step Counts</h3>
       <p>
         Watching your child move with confidence is a moment worth celebrating.
         Progress may take time, but every effort brings your child closer to
         greater independence and joy.
       </p>
       <p>
         At Aaradhya Foundation, we are here to walk beside you and support your
         child’s journey with care. Together, we will help your child reach their
         full potential.
     </p>
  </div>
</div>


      </section>
    </div>
  );
}
