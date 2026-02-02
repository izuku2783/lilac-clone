"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT */}
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-6xl leading-tight">
            Trauma-Informed Therapy in Santa Monica, CA
          </h1>

          <p className="mt-6 text-lg max-w-xl">
            Dr. Maya Reynolds, PsyD helps high-achieving adults work through
            anxiety, burnout, perfectionism, and unresolved trauma — so you can
            feel grounded, confident, and emotionally free.
          </p>

          <p className="mt-4 text-base max-w-lg">
            Therapy for adults in Santa Monica and greater Los Angeles, rooted in
            compassion, evidence-based care, and real transformation.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <a
              href="#contact"
              className="button-primary inline-block hover:scale-105 transition-transform duration-300"
            >
              Book a Consultation →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center animate-fadeUp">
          <div className="rounded-[260px] overflow-hidden w-[380px] h-[480px] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1200&auto=format&fit=crop"
              alt="Therapy calm workspace"
              width={500}
              height={650}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
