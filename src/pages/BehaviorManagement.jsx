import React from "react";
import { GiPlantWatering } from "react-icons/gi"; 
import { FaHandsHelping } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./BehaviorManagement.css";
import BookNow from "../components/BookNow";

export default function BehaviorManagement() {
  usePageTitle("Behavior Management | Aaradhya Institute");
  return (
    <div className="bm-page">
      
      {/* HERO */}
      <section className="bm-hero">
        <div className="bm-hero-content">
          <h1>Behavior Management</h1>
          <p>Understanding behavior with empathy, structure, and support</p>
        </div>
      </section>

      {/* FEATURE INTRO */}
      <section className="bm-feature">
        <div className="bm-feature-inner">
        <FaHandsHelping className="bm-intro-icon" />
        <p>
          <strong>All behaviors are communication.</strong> However challenging behaviors
          can be stressful for children and families. Our goal is to provide
          supportive, individualized behavior management strategies that help
          children thrive, while guiding families with empathy, understanding,
          and practical tools.
        </p>
         </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bm-content">

        <div className="bm-block">
          <span className="bm-index">01</span>
          <div>
            <h2>Understanding and Supporting Behavior</h2>
            <p>
              Every behavior communicates something meaningful. Our therapists
              use functional behavior assessment to identify triggers and
              patterns, helping us develop targeted interventions. We focus on
              positive behavior support to encourage desirable behaviors while
              reducing frustration, anxiety, and behavioral challenges.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">02</span>
          <div>
            <h2>Practical Strategies for Daily Life</h2>
            <p>
              We provide actionable behavior management strategies that can be
              used at home, school, or in the community. Tools such as visual
              schedules help children follow routines, improve instruction
              following, and enhance predictability throughout the day. These
              strategies support consistency and reduce stress for both children
              and caregivers.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">03</span>
          <div>
            <h2>Verbal Behavior and Communication Support</h2>
            <p>
              Our approach incorporates verbal behavior principles, helping
              children use communication effectively to express their needs,
              wants, and emotions. By teaching functional communication, we
              reduce challenging behaviors and promote social engagement and
              independence.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">04</span>
          <div>
            <h2>Building Focus and Endurance</h2>
            <p>
              Some children require support to improve sitting tolerance and
              attention during structured activities. Through individualized
              programs, we help children build the skills to engage successfully
              in learning and daily routines.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">05</span>
          <div>
            <h2>A Collaborative, Family-Centered Approach</h2>
            <p>
              Families are central to our process. We provide guidance, coaching,
              and training so parents and caregivers can implement strategies
              confidently. Each plan is personalized, compassionate, and
              practical, empowering families and supporting children’s growth.
            </p>
          </div>
        </div>

      </section>

      {/* CLOSING */}
         <section className="bm-closing bm-soft-section">
         <div className="bm-closing-inner">
         <GiPlantWatering className="bm-closing-icon" />
          <p>
       Every step forward matters. We honor progress at each stage, creating a
       space where children feel supported, understood, and confident as they grow.
     </p>
   </div>
 </section>
       <BookNow/>
   </div>
  );
}
