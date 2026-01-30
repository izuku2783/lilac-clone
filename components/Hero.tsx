export default function Hero() {
  return (
    <section className="px-20 py-24">
      <div className="grid grid-cols-2 gap-24 items-center">
        
        {/* Left Oval Image */}
        <div>
          <div className="w-[520px] h-[650px] overflow-hidden rounded-[999px]">
            <img
              src="https://images.unsplash.com/photo-1526045478516-99145907023c"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div>
          <h1 className="text-[96px] leading-[1.05] font-bold">
            Live your life <br /> in full bloom
          </h1>

          <p className="mt-6 text-lg">
            Therapy for Adults in Minneapolis, MN.
          </p>

          {/* Clickable CTA */}
          <a
            href="#contact"
            className="inline-block mt-12 px-10 py-4 border border-[#2f3b1f] uppercase text-sm tracking-widest hover:bg-[#2f3b1f] hover:text-white transition"
          >
            Connect With Me →
          </a>
        </div>
      </div>
    </section>
  );
}
