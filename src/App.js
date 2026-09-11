import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import SpeechLanguageTherapy from "./pages/SpeechLanguageTherapy";
import OccupationalTherapy from "./pages/OccupationalTherapy";
import Physiotherapy from "./pages/Physiotherapy";
import BehaviorManagement from "./pages/BehaviorManagement";
import EarlyIntervention from "./pages/EarlyIntervention";
import SocialCommunicationSkills from "./pages/SocialCommunicationSkills";
import SpecialEducation from "./pages/SpecialEducation";
import ParentCounseling from "./pages/ParentCounseling";
import ProgrammeService from "./pages/ProgrammeService";
import SpecialNeedsDayCare from "./pages/SpecialNeedsDayCare";
import AutismTherapyServices from "./pages/AutismTherapyServices";
import SchoolReadinessProgramme from "./pages/SchoolReadinessProgramme";
import ADHDTherapySupport from "./pages/ADHDTherapySupport";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Policies from "./pages/Policies";
import ScrollToTop from "./components/ScrollToTop";

const programmeServices = {
  adl: {
    title: "ADL & Life Skills",
    image: "/images/occupational.jpg",
    intro: "Does your child need help with dressing, eating, grooming, following routines, managing belongings or completing everyday activities? At Aaradhya Speech & Therapy Centre, our ADL & Life Skills programme helps children develop practical skills for greater independence at home, school and in the community. We turn everyday activities into meaningful learning opportunities.",
    blocks: [
      { title: "What Are ADL & Life Skills?", text: "ADL stands for Activities of Daily Living—the everyday skills children need to care for themselves and participate in daily routines.", items: ["Personal care & self-care", "Daily routines", "Functional communication", "Practical & community skills"] },
      { title: "Why Are Life Skills Important?", text: "A child may learn a skill during a therapy session, but the real goal is to help them use that skill in everyday life. Learning to dress, eat or organise belongings becomes more meaningful when it is practised as part of daily life." },
      { title: "Our Approach", text: "At Aaradhya, life skills are taught according to each child's developmental level, abilities and individual goals.", items: ["Assess", "Plan", "Teach", "Practise", "Generalise", "Review"] }
    ],
    ending: "Learn. Practise. Participate. Become independent."
  },
  daycare: {
    title: "Special Needs Day Care",
    image: "/images/group.jpg",
    intro: "Are you looking for a structured day-care environment where your child can learn, participate, communicate and develop everyday skills? At Aaradhya Speech & Therapy Centre, our Special Needs Day Care programme provides a supportive environment designed around the individual developmental needs of each child. We create opportunities for learning throughout the day.",
    blocks: [
      { title: "What Does Our Special Needs Day Care Include?", text: "Our programme may include activities that support:", items: ["Communication & language", "Learning & cognitive development", "Social interaction", "ADL & life skills", "Behaviour & attention"] },
      { title: "A Structured Day Helps Children Know What Comes Next", text: "Children often participate more comfortably when daily activities follow a predictable structure. A typical day may include learning activities, play, snack and self-care routines." },
      { title: "More Than Day Care", text: "We believe a meaningful day should provide opportunities to communicate, learn, play, interact and practise." }
    ],
    ending: "Every day can be a learning opportunity."
  },
  autism: {
    title: "Autism Therapy Services",
    image: "/images/early.jpg",
    intro: "Every autistic child is different. Some children may need support with communication; others may need help with social interaction, behaviour, sensory processing, learning or daily living skills. At Aaradhya Speech & Therapy Centre, our autism support services are designed around the individual child—not simply the diagnosis.",
    blocks: [
      { title: "Our Autism Therapy Services", items: ["Speech & language therapy", "Occupational therapy", "Behaviour support", "Social communication", "ADL & life skills"] },
      { title: "Autism Support Across Developmental Stages", items: ["Early intervention: communication, play, joint attention & early learning", "School age: communication, learning, behaviour, social skills & independence", "Adolescence: social communication, functional skills, life skills, self-advocacy & independence"] },
      { title: "Our Approach", text: "We listen to parents and understand each child's strengths, concerns and priorities.", items: ["Assess", "Set goals", "Intervene", "Practise", "Review"] }
    ],
    ending: "Understand the child. Identify the needs. Build meaningful skills."
  },
  school: {
    title: "School Readiness Programme",
    image: "/images/special.jpg",
    intro: "Starting school is an important milestone for every child. But being school ready is much more than knowing alphabets and numbers. A child also needs to listen, communicate, participate, follow routines, interact with others and manage everyday classroom activities. Our School Readiness Programme helps children develop the foundational skills needed to participate more confidently in a school environment.",
    blocks: [
      { title: "What Does School Readiness Include?", items: ["Fine-motor skills", "Early literacy", "Early numeracy", "Communication skills", "Social & group skills", "Self-care & independence"] },
      { title: "School Readiness Is More Than Academics", text: "A child may know the alphabet but still need support to sit for an activity, follow an instruction, ask for help, wait for a turn, communicate with a teacher or move between activities. Children need the skills to participate in learning." },
      { title: "School Readiness for Children With Additional Needs", text: "The programme is adapted according to each child's individual strengths and support needs.", items: ["Speech and language delays", "Autism and behavioural challenges", "Developmental delays", "Learning or attention difficulties", "Social communication difficulties", "Delays in self-care"] }
    ],
    ending: "Ready to learn. Ready to participate. Ready for school."
  },
  adhd: {
    title: "ADHD Therapy & Support",
    image: "/images/behavior.jpg",
    intro: "Children with ADHD may experience difficulties with attention, impulse control, activity levels, following routines, completing tasks or managing emotions. At Aaradhya Speech & Therapy Centre, we help children build practical skills for attention, behaviour, learning and everyday life.",
    blocks: [
      { title: "What Is ADHD?", text: "ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition that can affect attention, impulse control, activity levels and executive functioning. Every child with ADHD is different. Some children may mainly experience attention difficulties, while others may have challenges with hyperactivity, impulsivity and behaviour regulation." },
      { title: "Understanding Your Child's Needs", text: "These signs can occur for different reasons and do not by themselves confirm ADHD. A professional assessment can help understand your child's individual needs." },
      { title: "When Should Parents Seek Therapy Support?", text: "If attention, impulsivity, hyperactivity, behaviour or learning difficulties are regularly affecting your child's home, school or social life, it may be helpful to seek professional help." },
      { title: "How Therapy Can Support Children With ADHD", text: "Our therapy programmes focus on the skills your child needs in everyday situations.", items: ["Attention & focus", "Behaviour & self-regulation", "Learning skills", "Social skills", "Everyday life skills"] },
      { title: "Therapy Support We Provide", text: "Depending on your child's individual needs, our multidisciplinary services may include:", items: ["Behaviour therapy", "Occupational therapy", "Special education", "Speech & language therapy", "ADL & life skills", "Social communication"] },
      { title: "Our Approach", text: "Child-focused. Individualised. Practical.", items: ["Strengths", "Needs", "Goals", "Progress"] }
    ],
    ending: "Helping children improve attention, behaviour, learning and everyday skills."
  }
};



function App() {
  return (
    <>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/speech-language-therapy" element={<SpeechLanguageTherapy />} />
        <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
        <Route path="/services/physiotherapy" element={<Physiotherapy />} />
        <Route path="/services/behavior-management" element={<BehaviorManagement />} />
        <Route path="/services/early-intervention" element={<EarlyIntervention />} />
        <Route path="/services/special-education" element={<SpecialEducation />} />
        <Route path="/services/parent-counseling" element={<ParentCounseling />} />
        <Route path="/services/social-communication-skills" element={<SocialCommunicationSkills />} />
        <Route path="/services/adl-life-skills" element={<ProgrammeService service={programmeServices.adl} />} />
        <Route path="/services/special-needs-day-care" element={<SpecialNeedsDayCare />} />
        <Route path="/services/autism-therapy-services" element={<AutismTherapyServices />} />
        <Route path="/services/school-readiness-programme" element={<SchoolReadinessProgramme />} />
        <Route path="/services/adhd-therapy-support" element={<ADHDTherapySupport />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
