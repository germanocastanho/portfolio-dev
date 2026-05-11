import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const About = () => {
  const reveal = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <User className="w-10 h-10 text-primary" aria-hidden="true" />
          <h2 className="section-title mb-0">About Me</h2>
        </div>

        <Card className="p-8 md:p-12 glass-card hover-lift">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Python developer and certified AI Engineer currently working as System Developer Analyst at Sicredi Credit Union, where builds Python automations supporting financial operations at scale. Develops backend systems and AI-powered products — from REST APIs and data pipelines to LLM-based agents and RAG architectures — with a focus on production-ready, compliant, and maintainable code.
          </p>
        </Card>
      </div>
    </section>
  );
};
