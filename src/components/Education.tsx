import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/education";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Education = () => {
  const reveal = useScrollReveal();

  return (
    <section id="education" className="py-24 px-4">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <GraduationCap className="w-10 h-10 text-primary" aria-hidden="true" />
          <h2 className="section-title mb-0">Education</h2>
        </div>

        <div className="space-y-8">
          <Card className="p-8 md:p-12 glass-card hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-shadow-md">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-12 glass-card hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-shadow-md">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
