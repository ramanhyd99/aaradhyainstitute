import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./OccupationalTherapy.css";
import BookNow from "../components/BookNow";

export default function OccupationalTherapy() {
   usePageTitle("Occupational Therapy | Aaradhya Institute");
  return (
    <div className="occupational-page">
     
      {/* HERO */}
      <section className="occupational-hero">
        <h1>Occupational Therapy</h1>
        <p>
          Helping children build independence, confidence, and functional skills
          for everyday life.
        </p>
      </section>

      {/* CONTENT */}
      <section className="occupational-content">

        <div className="occupational-intro">
         At Aaradhya Foundation, we understand that challenges with movement,
         coordination, and sensory processing can impact every aspect of daily
         life. Our goal is to provide empathetic, individualized occupational
         therapy that supports your child’s growth, independence, and confidence
         while empowering families with understanding and guidance.
        </div>

        <div className="occupational-section">
          <h2>Motor Skills Development</h2>
          <p>
            Our occupational therapy programs focus on improving fine motor and
            gross motor skills, helping children strengthen their hands, arms,
            and overall body control. Through targeted exercises, we support body
            balance, proximal stability, and eye-hand coordination, enabling
            children to perform daily activities with greater ease and
            confidence.
          </p>
        </div>

        <div className="occupational-section alt">
          <h2>Sensory Integration and Reflex Therapy</h2>
          <p>
            We specialize in Sensory Integration Therapy and Reflex Integration
            Therapy, addressing difficulties with processing sensory
            information. Our therapists work across visual, tactile,
            proprioceptive, vestibular, gustatory, olfactory, auditory, and
            interoceptive systems, helping children feel more regulated, focused,
            and comfortable in their environment.
          </p>
        </div>

        <div className="occupational-section">
          <h2>Motor Planning and Coordination</h2>
          <p>
            For children with dyspraxia or difficulties with movement sequencing,
            we provide activities that improve motor planning, coordination, and
            overall functional mobility. Therapy emphasizes visual perception
            and proximal stability to enhance performance in daily tasks, play,
            and school activities.
          </p>
        </div>

        <div className="occupational-section alt">
          <h2>Executive Functioning and Functional Independence</h2>
          <p>
            Occupational therapy is not just about movement—it is about helping
            children organize, plan, and execute tasks effectively. By targeting
            executive functioning skills, we support goal-directed behavior,
            problem-solving, and the ability to manage everyday routines.
          </p>
        </div>

         <div className="occupational-closing">
         <div className="occupational-closing-line">
         <span className="occupational-closing-icon">💛</span>
         <p>
         Every child is unique, and our therapy is tailored to their individual
         needs. We create a nurturing, encouraging environment where progress is
         celebrated, challenges are approached with patience, and families are
         supported every step of the way.
         </p>
       </div>
       </div>

 <BookNow />
      </section>
    </div>
  );
}
