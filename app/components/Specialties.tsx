export default function Specialties() {
  const items = [
    {
      title: "Self-Esteem",
      text: "Building confidence and self-worth.",
      img: "/images/spec1.jpg",
    },
    {
      title: "Relationships",
      text: "Guidance through connection challenges.",
      img: "/images/spec2.jpg",
    },
    {
      title: "Burnout",
      text: "Support for stress and overwhelm.",
      img: "/images/spec3.jpg",
    },
  ];

  return (
    <section className="bg-[#f7f3ec] py-28 px-10 md:px-20">
      <h2 className="text-center text-5xl font-bold mb-14">
        My Specialties
      </h2>

     {/* BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-[#243b1d] bg-[#e6e1d8] p-10 flex flex-col justify-between min-h-[520px]"
          >
            {/* TEXT */}
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed">{item.text}</p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center mt-10">
              <img
                src={item.img}
                alt={item.title}
                className="w-[260px] h-[260px] rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
