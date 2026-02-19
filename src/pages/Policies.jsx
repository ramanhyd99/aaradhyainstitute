import React from "react";
import "./Policies.css";

export default function Policies() {
  return (
    <div className="policies-page">
      <h1 className="policies-title">Policies & Terms</h1>
      <p className="policies-subtitle">Aaradhya Foundation</p>

      <div className="policies-split">

        {/* LEFT — TERMS */}
        <div className="policy-card">
          <h2>Payment, Cancellation, Refund & Terms</h2>

          <h3>Payment Policy</h3>
          <p>
            Prices vary by location (India / International). All payments must be
            made 100% in advance at least 24 hours before the session.
            Enrolment is confirmed only after payment is received. We accept online payments only.
         </p>

          <h3>Slot Booking & Therapist Allocation</h3>
          <ul>
            <li>Slots are allotted on a first-come, first-served basis.</li>
            <li>Monthly packages keep slots fixed for the month.</li>
            <li>
              Therapists are assigned based on language preference, concerns,
              and expertise.
            </li>
          </ul>

          <h3>Cancellation Policy</h3>
          <h4>One-on-One Sessions</h4>
          <ul>
            <li>No cancellation fee if cancelled 24+ hours before the session.</li>
            <li>No-show = 25% charge</li>
            <li>If a therapist cancels, the session will be rescheduled or carried over; clients may reschedule 24+ hours in advance, subject to therapist availability.</li>
          </ul>

          <h4>Group Programs</h4>
          <ul>
            <li>24+ hours before start – full refund.</li>
            <li>After start – no refund.</li>
            <li>Program content access is provided (no live session recordings).</li>
          </ul>

          <h3>Refund Policy</h3>
          <p>
            Refunds for unused sessions are processed after deducting a 10%
            processing fee. Refund processing time: 5–7 business days.

          </p>

          <h3>Disclaimer</h3>
          <p>
            The website is provided “as is.” Aaradhya Foundation is not liable
            for damages or data issues related to website information.
          </p>
        </div>

        {/* RIGHT — PRIVACY */}
        <div className="policy-card highlight">
          <div className="privacy-header">
            <div className="privacy-icon">🔒</div>
            <h2>Privacy Policy</h2>
            <div className="soft-divider" />
          </div>

          <div className="privacy-content">
            <p>
              Aaradhya Foundation is committed to protecting your privacy during
              all online sessions. Personal information including contact
              details, medical or developmental history, and session data is
              kept strictly confidential.
            </p>

            <p>
              We collect only the information required to deliver quality care
              and ensure safety. All data is securely stored and accessed only
              by authorized team members.
            </p>

            <p>
              We do not sell, share, or disclose your information to third
              parties unless required by law or with your explicit consent.
            </p>

            <p>
              By using our services, you acknowledge that digital communication,
              though protected, may carry minimal unavoidable risks.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
