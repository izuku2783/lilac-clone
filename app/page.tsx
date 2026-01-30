import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import SplitSection from "./components/SplitSection";
import About from "./components/About";
import BackgroundAccordion from "./components/BackgroundAccordion";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specialties />
      <SplitSection />
      <About />
      <BackgroundAccordion />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
