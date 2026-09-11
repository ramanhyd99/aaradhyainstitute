import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./ParentCounseling.css";
import BookNow from "../components/BookNow";

export default function ParentCounseling() {
   usePageTitle("Parent Counseling | Aaradhya Institute");
  return (
    <div className="pc-page">
      
      {/* HERO */}
      <section className="pc-hero">
        <div className="pc-hero-content">
          <h1>Parent Counseling</h1>
          <p>
            Supporting parents of children with special needs with guidance, emotional support, and self-care strategies.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="pc-feature">
        <div className="pc-feature-inner">
          <p>
              <b>Support for Parents. Strength for Families.</b><br/><br/>
Parenting a child with special needs can feel overwhelming—our parent counselling and training provide practical guidance, emotional support, and strategies to help you feel more confident at home.          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pc-content">

        <div className="pc-block">
          <span className="pc-index">01</span>
          <div>
            <h2>Parent Training for Better Support at Home</h2>
            <p>
              Parents play an important role in a child’s development. We guide
              parents with practical strategies that can be used during everyday
              routines, play and learning. Training may include supporting
              communication, following routines, encouraging appropriate
              behaviour, developing independence and responding calmly to
              challenging situations.
            </p>
          </div>
        </div>

        <div className="pc-block">
          <span className="pc-index">02</span>
          <div>
            <h2>ABA Guidance for Everyday Behaviour &amp; Learning</h2>
            <p>
              For children who benefit from Applied Behavior Analysis (ABA)-based
              strategies, we guide parents on how to use positive reinforcement,
              clear instructions, prompting and consistent routines in everyday
              situations. The focus is on helping children learn useful skills,
              communicate their needs and participate more successfully at home
              and in the community.
            </p>
          </div>
        </div>

        <div className="pc-block">
          <span className="pc-index">03</span>
          <div>
            <h2>Counselling &amp; Guidance for Parents</h2>
            <p>
              Every child and family has different needs. Our parent counselling
              and guidance focus on helping families understand their child’s
              strengths, challenges and developmental needs, while providing
              practical ways to support progress at home. We encourage parents to
              work together with therapists so that skills learned during therapy
              can be carried into everyday life.
            </p>
          </div>
        </div>

        <div className="pc-block pc-block-end">
          <span className="pc-index">04</span>
          <div>
            <h2>Family-Centered Approach</h2>
            <p>
              We believe parents are an important part of a child’s developmental
              journey. Our family-centered approach provides parents with practical
              guidance to manage everyday challenges.
            </p>
          </div>
        </div>

      </section>

      {/* CLOSING */}
      <section className="pc-closing pc-soft-section">
        <div className="pc-closing-inner">
          <p>
            Every step forward matters. By prioritizing self-care, guidance, and
            emotional regulation, parents can create a nurturing environment where
            children thrive and families flourish.
          </p>
        </div>
      </section>
       <BookNow />
    </div>
  );
}
