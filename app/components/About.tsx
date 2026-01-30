export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#e7e1d7] py-32 px-10 md:px-20">
      <div>
        <h2 className="text-6xl font-bold">Hi, I’m Lilac.</h2>

        <p className="mt-6 text-lg max-w-lg">
          I’m committed to providing a safe and supportive environment where we
          can explore your thoughts, feelings, and behaviors.
        </p>

        <button className="mt-10 border border-[#243b1d] px-10 py-3 hover:bg-[#243b1d] hover:text-white transition-all duration-300">
          Let’s Chat →
        </button>
      </div>

      <div className="flex justify-center mt-12 md:mt-0">
        <img
          src="/images/about.jpg"
          className="w-[420px] h-[520px] rounded-full object-cover"
          alt="About"
        />
      </div>
    </section>
  );
}
