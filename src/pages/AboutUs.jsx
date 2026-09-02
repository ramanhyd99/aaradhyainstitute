import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./AboutUs.css";
import BookNow from "../components/BookNow";

export default function AboutUs() {
  usePageTitle("About Us | Aaradhya Institute");

  const [loadedImages, setLoadedImages] = useState({
    about: false,
    group: false,
  });

  const handleImageLoad = (key) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="about-page">

      {/* WHO WE ARE */}
      <section className="about-split">
        <div className={`about-img ${loadedImages.about ? "loaded" : ""}`}>
          <img
            src="/images/about-us.jpg"
            alt="About Aaradhya Foundation"
            loading="lazy"
            onLoad={() => handleImageLoad("about")}
          />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>

          <p className="about-subtitle">
  7+ years of clinical excellence in supporting children with special needs through compassion, expertise, and personalized care.
</p>

          <p>
            Every child’s journey is unique. At Aaradhya Foundation, we believe
            progress is measured not by speed, but by care, consistency,
            and encouragement. Our multidisciplinary team works closely
            with children and families to celebrate every milestone — big or small.
          </p>

          <p>
            We provide evidence-based therapies in a warm, nurturing environment
            where children feel safe to explore, move, communicate, and grow
            with confidence.
          </p>

          <p>
            Our centre brings together experienced therapists, educators, and
            caregivers who collaborate to support each child’s developmental,
            emotional, and social needs. Every therapy plan is thoughtfully
            designed to suit individual strengths and learning pace.
          </p>

          <p>
            Beyond therapy sessions, we believe in empowering families.
            Parents are guided and actively involved so progress continues
            beyond the therapy room and into everyday life.
          </p>
        </div>
      </section>

      {/* GROUP THERAPY */}
      <section className="about-split reverse">
        <div className={`about-img ${loadedImages.group ? "loaded" : ""}`}>
          <img
            src="/images/group.jpg"
            alt="Group Therapy"
            loading="lazy"
            onLoad={() => handleImageLoad("group")}
          />
        </div>

        <div className="about-content">
          <h2>Group Therapy & Social Skills</h2>

          <p>
            Children with autism often face challenges with social skills
            essential for school and everyday interaction. Social confidence
            is built gradually in safe, structured environments.
          </p>

          <p>
            Imagine a group session where a quiet child joins a game,
            takes a turn, and smiles with pride. That’s the power of
            guided peer interaction.
          </p>

          <h3>Why It Works</h3>
          <p>
            Group therapy provides structured yet playful environments
            where children practice real-world skills like sharing,
            listening, and cooperating.
          </p>

          <h3>Benefits for Children</h3>
          <ul>
            <li>Learn social cues through peer interaction</li>
            <li>Build confidence and reduce isolation</li>
            <li>Engage in age-appropriate activities</li>
          </ul>

          <h3>Creative Activities</h3>
          <p>
            Art, music, cooperative games, and guided play help children
            express themselves while strengthening communication and
            emotional awareness.
          </p>

          <h3>Empowering Parents</h3>
          <p>
            Parents receive guidance and strategies to reinforce
            therapy goals at home.
          </p>
        </div>
      </section>

      {/* ENDING */}
      <section className="about-ending">
        <p>
          At Aaradhya Foundation, we walk beside families every step of
          the journey. With patience, love, and expertise, we help
          children move, connect, and thrive — one step at a time.
        </p>
      </section>
      <BookNow/>
    </div>
  );
}
