import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyUs />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />

      {showTop && (
        <a className="back-top" href="#home" aria-label="Back to top">↑</a>
      )}
    </>
  );
}