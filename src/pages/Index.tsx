import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { OtherProjects } from "@/components/OtherProjects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundBlur } from "@/components/BackgroundBlur";

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to content
      </a>
      <BackgroundBlur />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <OtherProjects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
