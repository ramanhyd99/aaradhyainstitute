import React from "react";
import { FaSmile } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./ADHDTherapySupport.css";
import BookNow from "../components/BookNow";

export default function ADHDTherapySupport() {
  usePageTitle("ADHD Therapy & Support | Aaradhya Institute");

  return (
    <div className="adhd-page">
      <section className="adhd-split">
        <div className="adhd-left"><img src="/images/behavior.jpg" alt="ADHD Therapy and Support" /></div>
        <div className="adhd-right"><h1>ADHD Therapy &amp; Support</h1><div className="adhd-intro"><p>Children with ADHD may experience difficulties with attention, impulse control, activity levels, following routines, completing tasks or managing emotions. At Aaradhya Speech &amp; Therapy Centre, we help children build practical skills for attention, behaviour, learning and everyday life.</p></div></div>
      </section>
      <section className="adhd-content">
        <div className="adhd-block light"><h2>What Is ADHD?</h2><p>ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition that can affect attention, impulse control, activity levels and executive functioning. Every child with ADHD is different. Some children may mainly experience attention difficulties, while others may have challenges with hyperactivity, impulsivity and behaviour regulation.</p></div>
        <div className="adhd-block dark"><h2>Understanding Your Child's Needs</h2><p>These signs can occur for different reasons and do not by themselves confirm ADHD. A professional assessment can help understand your child's individual needs.</p></div>
        <div className="adhd-block light"><h2>When Should Parents Seek Therapy Support?</h2><p>If attention, impulsivity, hyperactivity, behaviour or learning difficulties are regularly affecting your child's home, school or social life, it may be helpful to seek professional help.</p></div>
        <div className="adhd-block dark"><h2>How Therapy Can Support Children With ADHD</h2><p>Our therapy programmes focus on the skills your child needs in everyday situations.</p><ul><li>Attention &amp; focus</li><li>Behaviour &amp; self-regulation</li><li>Learning skills</li><li>Social skills</li><li>Everyday life skills</li></ul></div>
        <div className="adhd-block light"><h2>Therapy Support We Provide</h2><p>Depending on your child's individual needs, our multidisciplinary services may include:</p><ul><li>Behaviour therapy</li><li>Occupational therapy</li><li>Special education</li><li>Speech &amp; language therapy</li><li>ADL &amp; life skills</li><li>Social communication</li></ul></div>
        <div className="adhd-block dark"><h2>Our Approach</h2><p>Child-focused. Individualised. Practical.</p><ul><li>Strengths</li><li>Needs</li><li>Goals</li><li>Progress</li></ul></div>
      </section>
      <section className="adhd-ending"><FaSmile /><p>Helping children improve attention, behaviour, learning and everyday skills.</p></section>
      <BookNow />
    </div>
  );
}
