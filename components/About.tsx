export default function About() {
  return (
    <section className="px-20 py-32 grid grid-cols-2 gap-24 items-center">
      
      {/* Left Text */}
      <div>
        <h2 className="text-6xl font-bold mb-8">
          A space for growth
        </h2>

        <p className="text-lg leading-relaxed opacity-80">
          Therapy is a place to reconnect with yourself, explore what’s holding
          you back, and move forward with clarity and support.
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 underline text-lg"
        >
          Learn More →
        </a>
      </div>

      {/* Right Oval Image */}
      <div className="w-[520px] h-[650px] overflow-hidden rounded-[999px]">
        <img
          src="https://images.unsplash.com/photo-1520975682031-a5a61f6d6c0c"
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
