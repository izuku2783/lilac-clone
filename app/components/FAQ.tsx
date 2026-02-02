"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    q: "Do you offer online therapy?",
    a: "Yes. I provide secure telehealth sessions for adults located anywhere in California.",
  },
  {
    q: "What do you specialize in?",
    a: "I specialize in anxiety, trauma recovery, burnout, panic, and perfectionism — especially for high-achieving adults.",
  },
  {
    q: "What is your therapy style like?",
    a: "My approach is collaborative, grounded, and practical — combining EMDR, CBT, mindfulness, and nervous-system support.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section bg-[#f6f3ee]">
      <div className="container faq-grid">
        {/* LEFT IMAGE */}
        <div className="fade-up faq-image">
          <Image
            src="https://images.unsplash.com/photo-1525097487452-6278ff080c31?q=80&w=1200&auto=format&fit=crop"
            alt="Calm therapy space"
            width={500}
            height={650}
            className="object-cover"
          />
        </div>

        {/* RIGHT ACCORDION */}
        <div className="fade-in">
          <h2 className="faq-heading">FAQs</h2>

          <div className="faq-list">
            {faqData.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="faq-icon">
                    {open === i ? "−" : "+"}
                  </span>
                  {item.q}
                </button>

                <div
                  className={`faq-answer ${
                    open === i ? "open" : ""
                  }`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
