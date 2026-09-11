import React from "react";
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
          <h1>Behavior Management for Children</h1>
          <p>All behaviors are communication</p>
        </div>
      </section>

      {/* FEATURE INTRO */}
      <section className="bm-feature">
        <div className="bm-feature-inner">
        <FaHandsHelping className="bm-intro-icon" />
        <div>
          <h2>Understanding Behavior. Building Skills. Supporting Positive Change.</h2>
          <p>
            Every child communicates through behavior. When challenging behaviors
            interfere with communication, learning, routines, or family life, the
            right support can make everyday situations easier.
          </p>
          <p>
            We use individualized, positive and child-centred strategies to
            understand behavior, teach useful skills and support children and
            families with understanding and practical tools.
          </p>
        </div>
         </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bm-content">

        <div className="bm-block">
          <span className="bm-index">01</span>
          <div>
            <h2>Understanding the Reasons Behind Behavior and Supporting</h2>
            <h3>Understanding What Your Child Is Communicating</h3>
            <p>
              Challenging behavior often has a reason behind it. We look at when
              and where behaviors occur, what may trigger them, and how your child
              communicates their needs.
            </p>
            <p>
              Based on the child's individual needs, we develop practical
              strategies to support communication, emotional regulation,
              cooperation and positive behavior.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">02</span>
          <div>
            <h2>Positive Behavior Strategies for Everyday Life</h2>
            <h3>Helping Children Learn More Appropriate Ways to Respond</h3>
            <p>
              We teach children practical skills that can replace challenging
              behaviors and help them participate more successfully in daily
              activities.
            </p>
            <p>
              Strategies may include clear instructions, visual supports, positive
              reinforcement, structured routines, choice-making and step-by-step
              teaching. These approaches can help children manage transitions,
              follow routines, complete tasks and participate more comfortably at
              home, school and in the community.
            </p>
            <p>
              These strategies support consistency and reduce stress for both
              children and caregivers.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">03</span>
          <div>
            <h2>Verbal Behavior &amp; Emotional Regulation</h2>
            <h3>Teaching Children Better Ways to Express Their Needs</h3>
            <p>
              Sometimes behavior becomes challenging when a child cannot express
              what they want, need or feel.
            </p>
            <p>
              We support children in developing functional communication,
              emotional regulation and coping skills so they can express
              themselves more effectively. Depending on the child's needs, this
              may include teaching children to request, wait, ask for help, make
              choices, manage frustration and respond to everyday situations.
            </p>
            <p>
              The goal is to reduce challenging behaviors and promote social
              engagement and independence.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">04</span>
          <div>
            <h2>Building Attention, Cooperation &amp; Daily Living Skills</h2>
            <p>
              Behavior support is also about helping children participate
              successfully in everyday life.
            </p>
            <p>
              We work on skills such as attention, sitting tolerance, following
              instructions, waiting, transitions, task completion, cooperation and
              independence.
            </p>
            <p>
              Activities are adjusted to the child's developmental level and
              gradually increased as the child becomes comfortable.
            </p>
          </div>
        </div>

        <div className="bm-block">
          <span className="bm-index">05</span>
          <div>
            <h2>Parent Guidance &amp; Family-Centred Support</h2>
            <p>
              We provide parents and caregivers with practical strategies,
              guidance and training that can be used at home and in everyday
              situations. With a collaborative approach, we identify realistic
              goals, understand progress and adjust strategies when needed.
            </p>
            <p>
              Our goal is to help families feel more confident while supporting
              their child's behavior, communication, emotional regulation and
              independence.
            </p>
            <p>
              Parent involvement and consistent strategies across home and therapy
              settings are important in behavior-management approaches.
            </p>
          </div>
        </div>

      </section>

      <section className="bm-benefits bm-soft-section">
        <div className="bm-benefits-inner">
          <h2>Who Can Benefit from Behavior Management?</h2>
          <p>
            Behavior management support may benefit children who experience
            frequent tantrums, difficulty following instructions, aggression,
            impulsivity, difficulty waiting or transitioning, emotional outbursts,
            poor attention, communication-related behaviors, or challenges with
            routines and daily activities. Support is individualized according to
            each child's developmental needs.
          </p>
        </div>
      </section>

       <BookNow/>
   </div>
  );
}
