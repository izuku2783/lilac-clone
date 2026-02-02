import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specialties />
      <SupportSection />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
