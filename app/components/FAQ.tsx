"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
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

  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="bg-[#f7f3ec] py-28 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="w-[380px] h-[520px] rounded-full overflow-hidden">
            <Image
              src="/images/faq.jpg"
              alt="FAQ"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="text-[#243b1d] text-2xl font-semibold mb-10">
            FAQs
          </h2>

          <div className="border-t border-[#243b1d]/40">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-[#243b1d]/40 py-6"
              >
                {/* QUESTION ROW */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center gap-4 text-left"
                >
                  {/* PLUS ICON */}
                  <span className="text-xl font-light w-6">
                    {openIndex === i ? "−" : "+"}
                  </span>

                  {/* QUESTION */}
                  <span className="text-xl font-medium text-[#243b1d]">
                    {item.q}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`pl-10 overflow-hidden transition-all duration-500 ${
                    openIndex === i
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#243b1d]/70">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
