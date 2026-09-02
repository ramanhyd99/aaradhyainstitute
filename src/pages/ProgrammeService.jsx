import React from "react";
import { FaSmile } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import "./EarlyIntervention.css";
import BookNow from "../components/BookNow";

export default function ProgrammeService({ service }) {
  usePageTitle(`${service.title} | Aaradhya Institute`);

  return (
    <div className="ei-page programme-service-page">
      <section className="ei-split">
        <div className="ei-left">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="ei-right">
          <h1>{service.title}</h1>
          <div className="ei-intro">
            <p>{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="ei-content">
        {service.blocks.map((block, index) => (
          <div className={`ei-block ${index % 2 === 0 ? "ei-light" : "ei-dark"}`} key={block.title}>
            <h2>{block.title}</h2>
            {block.text && <p>{block.text}</p>}
            {block.items && (
              <ul>
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="ei-ending">
        <FaSmile className="ei-closing-icon" />
        <p>{service.ending}</p>
      </section>

      <BookNow />
    </div>
  );
}
