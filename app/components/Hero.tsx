export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#f7f3ec] pt-32">
      <div className="flex justify-center items-center">
        <img
          src="/images/hero.jpg"
          className="w-[360px] h-[520px] object-cover rounded-full"
          alt="Hero"
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-[60px] md:text-[90px] font-bold leading-[1.05]">
          Live your life <br /> in full bloom
        </h1>

        <p className="mt-6 text-sm">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="mt-10 border border-[#243b1d] px-10 py-3 text-sm uppercase tracking-wide hover:bg-[#243b1d] hover:text-white transition-all duration-300">
          Connect with me →
        </button>
      </div>
    </section>
  );
}
