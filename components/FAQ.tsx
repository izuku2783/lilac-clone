"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "Answer goes here.",
  },
  {
    q: "What are your rates?",
    a: "Answer goes here.",
  },
  {
    q: "Do you have any openings?",
    a: "Answer goes here.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-20 py-28">
      <div className="grid grid-cols-2 gap-24 items-start">
        
        {/* Left Image */}
        <div>
          <div className="w-[520px] h-[650px] overflow-hidden rounded-[999px]">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="FAQ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          <h2 className="text-6xl font-bold mb-12">FAQs</h2>

          <div className="border-t border-[#2f3b1f]">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-[#2f3b1f]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex justify-between items-center py-8 text-left"
                >
                  <span className="text-2xl font-semibold">
                    {item.q}
                  </span>
                  <span className="text-3xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {openIndex === i && (
                  <p className="pb-6 text-lg opacity-80">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
