import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Audio Transcriber",
    description:
      "Script Python que transcreve arquivos de áudio e vídeo utilizando API da OpenAI, com suporte a múltiplos formatos e processamento batch automatizado.",
    technologies: [
      "Python",
      "OpenAI",
      "Whisper API",
      "Audio Processing",
      "CLI",
    ],
    githubUrl: "https://github.com/germanocastanho/audio-transcriber",
    featured: true,
  },
  {
    title: "Socrates Bot",
    description:
      "Chatbot de Inteligência Artificial que replica a persona filosófica de Sócrates, utilizando LangChain e Hugging Face para engajar usuários em diálogos socráticos.",
    technologies: [
      "Python",
      "LangChain",
      "Hugging Face",
      "NLP",
      "Prompt Engineering",
    ],
    githubUrl: "https://github.com/germanocastanho/socrates-bot",
    featured: true,
  },
  {
    title: "Minerva's Owl",
    description:
      "Assistente inteligente especializado em interação com vaults do Obsidian, permitindo busca semântica e gerenciamento de conhecimento através de IA.",
    technologies: [
      "Python",
      "RAG",
      "Embeddings",
      "Obsidian API",
      "Vector Search",
    ],
    githubUrl: "https://github.com/germanocastanho/minervas-owl",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <FolderGit2 className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Projetos</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
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
                          Destaque
                        </Badge>
                      )}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
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
