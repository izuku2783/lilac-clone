import Image from "next/image";

export default function SplitSupport() {
  return (
    <section className="bg-[#dde6df] border-y border-[#213017]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[650px]">
          <Image
            src="/images/support.jpg"
            alt="Peaceful support moment"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#213017] leading-tight">
            You don’t have to do this <space/>
            <span className="italic font-medium">alone.</span>
          </h2>

          <p className="mt-8 text-lg text-[#2f3a28] leading-relaxed max-w-lg">
            Anxiety, burnout, and life transitions can feel isolating — but
            healing happens in connection.
          </p>

          <p className="mt-6 text-lg text-[#2f3a28] leading-relaxed max-w-lg">
            Dr. Maya Reynolds offers evidence-based therapy in Santa Monica, CA to
            help you feel grounded, supported, and empowered through life’s
            hardest seasons.
          </p>

          {/* BULLETS */}
          <ul className="mt-10 space-y-3 text-[#213017] text-base">
            <li>• Persistent stress or emotional overwhelm</li>
            <li>• Difficulty maintaining relationships</li>
            <li>• Feeling stuck during a major transition</li>
            <li>• Wanting more balance and clarity in life</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
