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
            Parenting a child with special needs is emotionally exhausting and comes with a mix of emotions like grief, self-doubt, and overwhelm. Many parents forget to prioritize their own well-being, leading to burnout and stress.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pc-content">

        <div className="pc-block">
          <span className="pc-index">01</span>
          <div>
            <h2>We Understand</h2>
            <p>
              We understand what you are going through and we are here to guide you. Counseling is not about coping or being told what to do—it is about having a space where you are heard and supported. When parents feel regulated, understood, and emotionally supported, families function with greater ease, benefiting the child.
            </p>
          </div>
        </div>

        <div className="pc-block">
          <span className="pc-index">02</span>
          <div>
            <h2>Intentional Support</h2>
            <p>
              Choosing counseling is not an admission of failure. It is an intentional step toward sustainability, self-compassion, and long-term well-being for both you and your child. Our sessions empower parents with tools, guidance, and emotional support to navigate challenges effectively.
            </p>
          </div>
        </div>

        <div className="pc-block pc-block-end">
          <span className="pc-index">03</span>
          <div>
            <h2>Family-Centered Approach</h2>
            <p>
              Our approach is family-centered, providing parents with strategies to cope, maintain emotional balance, and enhance the overall home environment. By supporting the parent, we ultimately contribute to the welfare and growth of the child.
            </p>
          </div>
        </div>

      </section>

      {/* CLOSING */}
      <section className="pc-closing pc-soft-section">
        <div className="pc-closing-inner">
          <p>
            Every step forward matters. By prioritizing self-care, guidance, and emotional regulation, parents can create a nurturing environment where children thrive and families flourish.
          </p>
        </div>
      </section>
       <BookNow />
    </div>
  );
}
