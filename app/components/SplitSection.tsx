export default function SplitSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
      <img
        src="/images/split.jpg"
        className="w-full h-full object-cover"
        alt="Support"
      />

      <div className="bg-[#c9c7d5] p-20 flex flex-col justify-center">
        <h2 className="text-6xl font-bold leading-tight">
          You don’t have to do this <br /> alone.
        </h2>

        <ul className="mt-10 space-y-4 text-lg">
          <li>• Persistent sadness or hopelessness</li>
          <li>• Trouble focusing or making decisions</li>
          <li>• Difficulty maintaining relationships</li>
          <li>• Feeling exhausted or overwhelmed</li>
        </ul>

        <button className="mt-12 border border-[#243b1d] px-10 py-3 hover:bg-[#243b1d] hover:text-white transition-all duration-300">
          Work With Me →
        </button>
      </div>
    </section>
  );
}
