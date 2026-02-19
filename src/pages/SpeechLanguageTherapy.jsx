import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./Speech.css";

export default function SpeechLanguageTherapy() {
   usePageTitle("Speech & Language Therapy | Aaradhya Institute");
  const therapies = [
    {
      title: "Oral Motor Therapy",
      desc: "Our oral motor therapy programs focus on gently strengthening the muscles of the lips, tongue, and jaw. These exercises help improve not only speech clarity, but also chewing and swallowing skills. We work closely with each individual to ensure therapy is tailored to their unique needs, creating a safe and encouraging environment for progress.",
    },
    {
      title: "Oral Motor Strengthening and Feeding Therapy",
      desc: "Challenges with feeding or oral coordination can be stressful for families. Our oral motor strengthening and feeding therapy addresses these challenges with patience and care, helping children develop stronger, more coordinated oral muscles while making mealtimes a positive experience.",
    },
    {
      title: "Augmentative and Alternative Communication (AAC)",
      desc: "For individuals who have difficulty expressing themselves verbally, our AAC solutions provide a voice. Using communication boards, apps, or speech-generating devices, we empower clients to share their thoughts, needs, and feelings confidently, fostering independence and connection.",
    },
    {
      title: "Communication Techniques",
      desc: "We teach practical communication techniques that can be used at home, school, or in the community. From gestures and visual cues to social skills coaching, our strategies help clients communicate effectively and feel understood in every environment.",
    },
    {
      title: "Receptive and Expressive Language",
      desc: "Understanding and using language is fundamental to participation in daily life. Through receptive language therapy, we help clients process and comprehend instructions, questions, and conversations. With expressive language therapy, we support their ability to clearly share thoughts, ideas, and emotions, building confidence in both social and academic settings.",
    },
    {
      title: "Speech Disorders, Apraxia, and Aphasia",
      desc: "We provide compassionate care for a variety of speech disorders, including articulation challenges, stuttering, and voice difficulties. For clients with apraxia, we focus on improving the coordination of speech movements through targeted exercises and repeated practice. Individuals recovering from aphasia receive patient, structured support to regain communication skills and reconnect with their world.",
    },
    {
      title: "Tongue Tie",
      desc: "A tongue tie can affect speech, feeding, and oral movement. Our team works collaboratively with families and medical professionals to provide supportive exercises and interventions, helping clients achieve improved tongue mobility and more effective communication.",
    },
  ];

  return (
    <div className="therapy-page">

      {/* HERO SECTION */}
      <section className="therapy-hero">
        <h1>Speech &amp; Language Therapy</h1>
        <p>
          Helping individuals communicate, express themselves, and engage with the world
        </p>
      </section>

      {/* SPLIT & FULL-WIDTH SECTIONS */}
      <div className="therapy-split">
        {therapies.map((therapy, idx) => {
          const isFullWidth = therapy.title === "Tongue Tie";

          return (
            <section
              key={idx}
              className={`therapy-section ${
                isFullWidth
                  ? "full-width-section"
                  : idx % 2 === 0
                  ? "left-column"
                  : "right-column"
              }`}
            >
              <div className="therapy-content">
                <h2>{therapy.title}</h2>
                <p>{therapy.desc}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
