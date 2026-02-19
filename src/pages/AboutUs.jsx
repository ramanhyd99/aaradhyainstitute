import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./AboutUs.css";

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

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Aaradhya Foundation</h1>
        <p>
          Supporting children with special needs through compassion, expertise,
          and personalized care.
        </p>
      </section>

      {/* ABOUT FOUNDATION */}
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
          <p>
            Every child’s journey is unique. At Aaradhya Foundation, we believe
            that progress is not measured by speed, but by care, consistency,
            and encouragement. Our multidisciplinary team works closely with
            children and families to celebrate every milestone — big or small.
          </p>

          <p>
            We provide evidence-based therapies in a warm, nurturing environment
            where children feel safe to explore, move, communicate, and grow
            with confidence.
          </p>
            
           <p>
            Our centre brings together experienced therapists, educators, and
            caregivers who work collaboratively to address each child’s
            developmental, emotional, and social needs. Every therapy plan is
            thoughtfully designed to suit the child’s abilities, strengths,
            and individual pace of learning.
           </p>

           <p>
            Beyond therapy sessions, we believe in empowering families.
            Parents are guided, supported, and actively involved in the
            therapeutic journey, ensuring progress continues beyond the
            therapy room and into everyday life.
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
            Children with autism often lack social skills which are essential for school, playground participation, or any other social setting. Social appropriateness is one of the core challenges in autism, and our therapists strive to build these skills.
          </p>
          <p>
            Picture a group session where a quiet child joins a game, takes a turn, and smiles with pride. That’s the magic of group therapy—a safe, supportive space where kids build social skills, communication, and confidence through shared experiences.
          </p>
          <h3>Why It Works</h3>
          <p>
            Group therapy offers a structured yet playful environment for children to practice real-world interactions like sharing, listening, and making friends. Our team designs fun games, music, and dance activities to ease children into social interactions.
          </p>
          <h3>Benefits for Children</h3>
          <ul>
            <li>Learn social cues through peer interaction.</li>
            <li>Build confidence and reduce feelings of isolation.</li>
            <li>Engage in age-appropriate, fun activities that encourage participation.</li>
          </ul>
          <h3>Creative Activities</h3>
          <p>
            From art and music to cooperative games, sessions blend structure and creativity, helping kids express themselves while strengthening communication and emotional awareness.
          </p>
          <h3>Empowering Parents</h3>
          <p>
            Many programs involve parents too, offering strategies, support, and shared understanding to reinforce progress at home.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="about-ending">
        <p>
          At Aaradhya Foundation, we walk beside families on every step of the journey. With patience, love, and expertise, we help children move, connect, and thrive — one step at a time.
        </p>
      </section>
    </div>
  );
}
