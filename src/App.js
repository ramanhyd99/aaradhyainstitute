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
import SpecialEducation from "./pages/SpecialEducation";
import ParentCounseling from "./pages/ParentCounseling";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Policies from "./pages/Policies";
import ScrollToTop from "./components/ScrollToTop";



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
