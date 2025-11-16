import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90 z-0"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
            Germano Castanho
          </h1>

          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground text-shadow-md">
              Data Scientist <span className="text-primary">|</span> AI
              Developer
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a
                href="https://github.com/germanocastanho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a
                href="https://linkedin.com/in/germanocastanho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contato
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
