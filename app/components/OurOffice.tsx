import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="bg-[#e9e4db] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#213017] leading-tight">
            A Calm Space to Feel Supported
          </h2>

          <p className="mt-6 text-lg text-[#2f3a28] leading-relaxed max-w-xl">
            Dr. Maya Reynolds welcomes clients into a peaceful therapy
            office designed for comfort, privacy, and healing.
          </p>

          <p className="mt-4 text-lg text-[#2f3a28] leading-relaxed max-w-xl">
            From the waiting area to the therapy room, every part of the space
            is meant to help you feel grounded, safe, and at ease.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#213017] px-6 py-3 text-sm tracking-wide uppercase text-[#213017]
              hover:bg-[#213017] hover:text-white transition duration-300"
            >
              Visit Our Office →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGES SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Image 1 */}
          <div className="relative rounded-[26px] overflow-hidden shadow-lg">
            <Image
              src="/office/office1.jpeg"
              alt="Waiting area"
              width={600}
              height={500}
              className="object-cover w-full h-[320px] hover:scale-105 transition duration-500"
            />

            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full text-sm font-medium text-[#213017]">
              Waiting Area
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-[26px] overflow-hidden shadow-lg">
            <Image
              src="/office/office2.jpeg"
              alt="Therapy room"
              width={600}
              height={500}
              className="object-cover w-full h-[320px] hover:scale-105 transition duration-500"
            />

            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full text-sm font-medium text-[#213017]">
              Therapy Space
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
