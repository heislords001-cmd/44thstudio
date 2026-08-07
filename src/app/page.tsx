import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Process from "@/components/process";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Process />
      <Experience />
      <Contact />
    </>
  );
}
