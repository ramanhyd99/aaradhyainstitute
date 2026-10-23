import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import BookNow from "../components/BookNow";
import "./EarlyIntervention.css";
import "./ChildDevelopmentCentre.css";

export default function ChildDevelopmentCentre() {
  usePageTitle("Comprehensive Child Development Centre | Aaradhya Institute");

  return (
    <div className="ei-page child-development-page">
      <section className="ei-split">
        <div className="ei-left">
          <img src="/images/early-hero.jpg" alt="Child development and early intervention support" />
        </div>
        <div className="ei-right">
          <h1>Comprehensive Child Development Centre</h1>
          <div className="ei-intro">
            <p>Every child grows, learns, and communicates at their own unique pace. However, when parents notice early signs of developmental delays, speech challenges, or differences in social and behavioral growth, finding the right guidance can feel overwhelming.</p>
            <p>At <strong>Aaradhya Speech &amp; Therapy Centre</strong>, our Child Development Centre provides a safe, nurturing, and structured environment where children receive expert multidisciplinary care under one roof. We partner closely with families to turn early challenges into milestones of confidence and independence.</p>
          </div>
        </div>
      </section>

      <section className="ei-content">
        <div className="ei-block ei-light">
          <h2>Understanding Holistic Child Development</h2>
          <p>Developmental growth spans across multiple areas—from how a child speaks and plays to how they regulate emotions and interact with the world around them. When one area needs extra support, a holistic approach ensures that all aspects of a child's growth are addressed simultaneously.</p>
        </div>

        <div className="ei-block ei-dark">
          <p>Our specialized programs are designed to evaluate, support, and nurture:</p>
          <ul>
            <li><strong><Link to="/services/speech-language-therapy">Speech &amp; Communication Skills</Link>:</strong> Helping children express their thoughts clearly, overcome articulation delays, and build meaningful <Link to="/services/social-communication-skills">social communication</Link>.</li>
            <li><strong><Link to="/services/behavior-management">Behavioral &amp; Emotional Growth</Link>:</strong> Providing evidence-based strategies to help children manage emotions, navigate social settings, and develop positive behaviors.</li>
            <li><strong><Link to="/services/occupational-therapy">Occupational &amp; Motor Skills</Link>:</strong> Supporting everyday independence, sensory processing, and physical coordination for school and daily life.</li>
            <li><strong><Link to="/services/early-intervention">Early Intervention</Link>:</strong> Providing targeted support during the crucial formative years (toddlers and young children) to bridge developmental gaps before school entry.</li>
          </ul>
        </div>

        <div className="ei-block ei-light">
          <p>Explore our Child Development Services to learn more about all our specialized therapy programs we offer.</p>
          <ul>
            <li><Link to="/services/speech-language-therapy">Speech Therapy</Link></li>
            <li><Link to="/services/occupational-therapy">Occupational Therapy</Link></li>
            <li><Link to="/services/behavior-management">Behaviour Therapy</Link></li>
            <li><Link to="/services/early-intervention">Early Intervention</Link></li>
            <li><Link to="/services/special-education">Special Education</Link></li>
            <li><Link to="/services/parent-counseling">Parent Training &amp; Counselling Support</Link></li>
            <li><Link to="/services/social-communication-skills">Social Communication Skills</Link></li>
            <li><Link to="/services/physiotherapy">Physiotherapy</Link></li>
            <li><Link to="/services/adl-life-skills">ADL &amp; Life Skills</Link></li>
            <li><Link to="/services/special-needs-day-care">Special Needs Day Care and Special School</Link></li>
            <li><Link to="/services/autism-therapy-services">Autism Therapies</Link></li>
            <li><Link to="/services/school-readiness-programme">School Readiness Programme</Link></li>
            <li><Link to="/services/adhd-therapy-support">ADHD Therapy &amp; Support</Link></li>
          </ul>
        </div>

        <div className="ei-block ei-light">
          <h2>What to Expect at Our Centre</h2>
          <ul>
            <li><strong>Comprehensive Developmental Assessments:</strong> We begin by understanding your child’s unique strengths, challenges, and specific developmental milestones through professional evaluations.</li>
            <li><strong>Customized Therapy Plans:</strong> No two children are alike. We design personalized intervention roadmaps tailored specifically to your child’s needs.</li>
            <li><strong><Link to="/services/parent-counseling">Parent Training &amp; Counselling</Link>:</strong> We believe therapy doesn't stop at the clinic door. We equip parents with practical tools, strategies, and emotional support to foster progress at home.</li>
            <li><strong>A Warm, Child-Friendly Space:</strong> Our centre is thoughtfully designed to make children feel safe, excited, and comfortable while engaging in therapy.</li>
          </ul>
        </div>

        <div className="ei-block ei-dark">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>When should a parent consider visiting a child development centre?</h3>
          <p>If you notice delays in speech milestones, difficulty interacting with peers, sensory sensitivities, or challenges with focus and behavioral regulation compared to children of the same age, an early assessment can provide clarity and timely support.</p>
          <h3>Do you involve parents in the therapy process?</h3>
          <p>Absolutely. Parent collaboration is core to our philosophy. We guide you through every step so you can reinforce positive growth and communication strategies during daily routines at home.</p>
        </div>
      </section>

      <BookNow
        title="Take the First Step Today"
        description="If you are looking for dedicated, professional guidance to help your child thrive, we are here for you."
        callLabel="Book a Consultation"
        whatsappLabel="Chat with Us on WhatsApp"
      />
    </div>
  );
}
