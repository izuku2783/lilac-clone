export default function Navbar() {
  return (
    <header className="px-20 py-10 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-3xl font-semibold tracking-wide">
        Lilac Template
      </h1>

      {/* Links */}
      <nav className="flex gap-12 text-lg font-medium">
        <a href="#specialties" className="hover:opacity-70 transition">
          Blog
        </a>
        <a href="#contact" className="hover:opacity-70 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
