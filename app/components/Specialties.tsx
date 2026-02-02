"use client";

import Image from "next/image";

const specialties = [
  {
    title: "Trauma Recovery",
    text: "Dr. Maya Reynolds specializes in trauma-informed therapy to help clients process painful experiences, rebuild safety, and regain emotional balance.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Anxiety & Perfectionism",
    text: "Support for high-functioning adults struggling with constant overthinking, pressure, self-criticism, and anxiety that won’t turn off.",
    img: "/images/specialty2.jpg",
  },
  {
    title: "Burnout & Life Transitions",
    text: "Therapy for professionals navigating burnout, emotional exhaustion, major life changes, and the desire to reconnect with meaning and calm.",
    img: "/images/specialty3.jpg",
  },
];

export default function Specialties() {
  return (
    <section className="w-full w-full bg-[#eef2ee] py-24" id="specialties">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl text-center">
          Areas of Focus
        </h2>

        <p className="text-center mt-4 max-w-2xl mx-auto text-lg">
          Dr. Maya Reynolds provides evidence-based therapy for adults in Santa
          Monica seeking healing, clarity, and emotional strength.
        </p>

        {/* SEPARATE BOX GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--color-primary)] p-10 min-h-[520px]
              flex flex-col justify-between rounded-2xl shadow-md
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* TITLE + TEXT */}
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed">{item.text}</p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center mt-10">
                <div className="w-[240px] h-[240px] rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
