"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-[#f6f3ee]/90 backdrop-blur-md border-b border-[#243b1d]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-wide text-[#243b1d]">
            Dr. Maya Reynolds
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#services" className="hover:opacity-60 transition">
              Services
            </a>
            <a href="#about" className="hover:opacity-60 transition">
              About
            </a>
            <a href="#contact" className="hover:opacity-60 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
