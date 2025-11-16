import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface OtherProject {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

const otherProjects: OtherProject[] = [
  {
    name: "python-notes",
    description:
      "Coleção pessoal de notas, dicas e snippets de código Python para Data Science e Machine Learning",
    tags: ["Python", "Data Science", "ML", "Jupyter"],
    url: "https://github.com/germanocastanho/python-notes",
  },
  {
    name: "crime-analysis",
    description:
      "Análise de dados criminais do Rio Grande do Sul utilizando técnicas de Data Science",
    tags: ["Data Analysis", "Python", "Jupyter", "Visualization"],
    url: "https://github.com/germanocastanho/crime-analysis",
  },
  {
    name: "juriscraper-stj",
    description:
      "Scraper para extrair resumos de decisões judiciais do Superior Tribunal de Justiça",
    tags: ["Web Scraping", "Python", "Legal Tech"],
    url: "https://github.com/germanocastanho/juriscraper-stj",
  },
];

export const OtherProjects = () => {
  return (
    <section id="other-projects" className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-8 text-center text-shadow-md">
          Outros Projetos
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card
              key={project.name}
              className="p-6 glass-card hover-lift flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Github className="w-5 h-5 text-primary shrink-0" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    asChild
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.name} no GitHub`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <h4 className="font-semibold mb-2 text-shadow-md">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/germanocastanho?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-4 h-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
