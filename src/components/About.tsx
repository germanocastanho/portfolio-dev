import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <User className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Sobre Mim</h2>
        </div>
        
        <Card className="p-8 md:p-12 glass-card hover-lift">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Data Scientist com experiência prática em aplicações de{" "}
            <span className="text-primary font-medium">Generative AI</span> e 
            integração de modelos de linguagem multimodais. Especializado na concepção e operacionalização de 
            pipelines de <span className="text-primary font-medium">retrieval-augmented generation (RAG)</span>, engenharia e avaliação de 
            prompts e representação semântica via embeddings, aprimorando a relevância e a robustez das respostas e 
            mitigando alucinações e vieses, com foco em soluções escaláveis, eficientes e alinhadas às restrições de 
            custo e desempenho do produto.
          </p>
        </Card>
      </div>
    </section>
  );
};