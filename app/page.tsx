import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import OurOffice from "./components/OurOffice";
import GetInTouchSection from "./components/GetInTouchSection";
import SplitSection from "./components/SplitSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GetInTouchSection />
      <Specialties />
      <SplitSection />
      <About />
      <OurOffice />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
