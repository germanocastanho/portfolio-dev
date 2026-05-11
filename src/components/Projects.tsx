import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const reveal = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <FolderGit2 className="w-10 h-10 text-primary" aria-hidden="true" />
          <h2 className="section-title mb-0">Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`p-6 md:p-8 glass-card hover-lift ${
                project.featured ? "border-primary/50" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-shadow-md">
                      {project.title}
                      {project.featured && (
                        <Badge variant="default" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
