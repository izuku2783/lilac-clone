"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        {/* LEFT TEXT */}
        <div className="fade-in">
          <h2 className="section-title-left">Hi, I’m Dr. Maya Reynolds</h2>

          <p className="about-text">
            I’m a licensed clinical psychologist in Santa Monica, California,
            offering therapy for adults navigating anxiety, trauma, burnout, and
            perfectionism.
          </p>

          <p className="about-text">
            My approach is warm, collaborative, and grounded — blending
            evidence-based care like CBT and EMDR with mindfulness and body-based
            techniques to support real healing.
          </p>

          <p className="about-text">
            Together, we’ll create a space where you can slow down, feel safe,
            and move forward with clarity and confidence.
          </p>

          <a href="#contact" className="primary-button">
            Work With Me →
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="fade-up about-image-wrap">
          <div className="about-image">
            <Image
              src="/images/doc.jpg"
              alt="Dr. Maya Reynolds portrait"
              width={600}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
