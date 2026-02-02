import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import OurOffice from "./components/OurOffice";
import GetInTouchSection from "./components/GetInTouchSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GetInTouchSection />
      <Specialties />
      <About />
      <OurOffice />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
