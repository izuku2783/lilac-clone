"use client";

import { useState } from "react";

export default function BackgroundAccordion() {
  const sections = [
    { title: "Education", content: "Master’s in Psychology..." },
    { title: "Licensure", content: "Licensed Therapist in MN..." },
    { title: "Certifications", content: "CBT, Mindfulness, Trauma Care..." },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#e7e1d7] py-28 px-10 md:px-20">
      <h2 className="text-center text-5xl font-bold mb-14">
        My Professional Background
      </h2>

      <div className="max-w-3xl mx-auto border-t border-[#243b1d]">
        {sections.map((s, i) => (
          <div key={i} className="border-b border-[#243b1d]">
            <button
              className="w-full flex justify-between items-center py-6 text-xl font-medium"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {s.title}
              <span className="text-2xl">{open === i ? "−" : "+"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                open === i ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-sm">{s.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
