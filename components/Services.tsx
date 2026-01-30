const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life.",
    img: "https://images.unsplash.com/photo-1520975958225-6c1f74d8a9d8",
  },
  {
    title: "Relationships",
    desc: "Navigate relationship challenges and form healthier connections.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    title: "Burnout",
    desc: "Together, we’ll identify strategies to manage and prevent burnout.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function Services() {
  return (
    <section id="specialties" className="px-20 py-28">
      <h2 className="text-center text-6xl font-bold mb-20">
        My Specialties
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {specialties.map((s, i) => (
          <div
            key={i}
            className="border border-[#2f3b1f] bg-[#e6e1d9] p-10 h-[650px] flex flex-col"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>

            <p className="mt-4 text-base opacity-80 leading-relaxed">
              {s.desc}
            </p>

            {/* Image at bottom */}
            <div className="mt-auto flex justify-center pt-10">
              <div className="w-[320px] h-[320px] rounded-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
