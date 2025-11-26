import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  "Graduação em Análise e Desenvolvimento de Sistemas (UNISINOS)",
  "Curso Livre Formação Engenheiro de Agentes de IA (ASIMOV ACADEMY)",
  "Curso Livre Bootcamp LuizaLabs - Back-end com Python (DIO)",
  "Curso Livre Bootcamp Caixa - Inteligência Artificial na Prática (DIO)",
];
const certifications = [
  "Data Scientist Associate (DATACAMP)",
  "AI Engineer for Developers Associate (DATACAMP)",
  "AI Engineer for Data Scientists Associate (DATACAMP)",
  "Python Data Associate (DATACAMP)",
  "AI Fundamentals & Data Literacy (DATACAMP)",
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Educação</h2>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <Card className="p-8 md:p-12 glass-card hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-shadow-md">Formação</h3>
            </div>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Certifications */}
          <Card className="p-8 md:p-12 glass-card hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-shadow-md">
                Certificações
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
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
