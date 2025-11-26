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
            Data Scientist & AI Engineer certificado, especialista em Generative AI e arquiteturas RAG (Retrieval-Augmented Generation) com orquestração de Large Language Models (GPT-4, Claude, Llama) via LangChain, CrewAI e Agno. Expertise em desenvolvimento de chatbots conversacionais e agentes inteligentes, integrando APIs comerciais (OpenAI, Anthropic, Groq) e modelos open-source (Hugging Face Transformers), com domínio em prompt engineering, semantic embeddings e vector databases (FAISS, ChromaDB). Proficiente em Python para Data Science (Pandas, NumPy), visualização analítica (Matplotlib, Plotly), otimização de inferência para redução de custos, mitigação de alucinações e deployment (Docker, Streamlit, Gradio), com versionamento de código via Git/GitHub.
          </p>
        </Card>
      </div>
    </section>
  );
};
