import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { otherProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const OtherProjects = () => {
  const reveal = useScrollReveal();

  return (
    <section id="other-projects" className="py-16 px-4 section-frosted">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-8 text-center text-shadow-md">
          Other Projects
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project) => (
            <Card
              key={project.name}
              className="p-6 glass-card hover-lift flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Github className="w-5 h-5 text-primary shrink-0 hover:opacity-70 transition-opacity" />
                  </a>
                </div>

                <h4 className="font-semibold mb-2 text-shadow-md">{project.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
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
              View all repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
