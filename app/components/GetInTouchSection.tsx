import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-[#afb4ad] border-y border-[#213017]">
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#213017] leading-tight">
            Take the first step <br />
            toward balance.
          </h2>

          <p className="mt-6 text-lg text-[#2f3a28] leading-relaxed max-w-md">
            Dr. Maya Reynolds supports adults in Santa Monica, CA navigating anxiety,
            burnout, life transitions, and emotional overwhelm with warmth,
            evidence-based care, and deep compassion.
          </p>

          <p className="mt-6 text-lg text-[#2f3a28] max-w-md">
            You don’t have to carry everything alone — support is here.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[520px]">
          <Image
            src="/images/maya-touch.jpg"
            alt="Supportive therapy session"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CTA BAR INSIDE SECTION */}
      <div className="border-t border-[#213017] bg-[#afb4ad]">
        <a
          href="#contact"
          className="flex items-center justify-center gap-3 py-6 text-sm tracking-[0.25em] uppercase font-medium text-[#213017]
          hover:bg-[#213017] hover:text-white transition duration-300 w-full"
        >
          Get In Touch <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}
