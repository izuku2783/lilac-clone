export default function Footer() {
  return (
    <footer id="contact">
      
      {/* Olive CTA Strip */}
      <div className="bg-[#6c6a3d] py-20 text-center">
        <a
          href="#"
          className="inline-block px-12 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-[#6c6a3d] transition"
        >
          Get in Touch →
        </a>
      </div>

      {/* Footer Grid */}
      <div className="px-20 py-24 grid grid-cols-3 gap-20">
        
        <div>
          <h3 className="text-3xl font-semibold mb-6">
            Lilac Template
          </h3>
          <p>123 Example Road</p>
          <p className="mb-6">Minneapolis, MN</p>
          <p className="underline">email@example.com</p>
          <p className="underline">(555) 555-5555</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Hours</h3>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Find</h3>
          <ul className="space-y-3 underline">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="text-center text-sm py-10 opacity-70">
        All Rights Reserved © 2024 Your Business Name Here, LLC.
      </div>
    </footer>
  );
}
