import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Experience = () => {
  const reveal = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-4 section-frosted">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Briefcase className="w-10 h-10 text-primary" aria-hidden="true" />
          <h2 className="section-title mb-0">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <Card key={item.company} className="p-8 md:p-10 glass-card hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-shadow-md">{item.role}</h3>
                  <p className="text-primary font-medium">{item.company}</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs px-3 py-1">
                  {item.period}
                </Badge>
              </div>
              <ul className="space-y-3">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
