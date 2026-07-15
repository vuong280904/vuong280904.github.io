import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";
import { Competitions } from "@/sections/Competitions";
import { Contact } from "@/sections/Contact";

/**
 * Single-page scroll app — every section is an anchor target, matching
 * the design spec's structure. Routing intentionally omitted per the
 * "single-page scroll" decision; reintroduce React Router only if the
 * site grows a second real page (e.g. a case-study detail route).
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Competitions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
