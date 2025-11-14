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
            Data Scientist & AI Engineer com certificações DataCamp (Data
            Scientist Associate, AI Engineer Associate, Python Data Associate),
            especializado em sistemas de Generative AI e arquiteturas RAG
            (Retrieval-Augmented Generation). Expertise em orquestração de Large
            Language Models (GPT-4, Claude, Llama) via LangChain, CrewAI e Agno,
            com domínio em prompt engineering, semantic embeddings e vector
            databases (FAISS, ChromaDB) para contextualização dinâmica.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experiência comprovada em agentes autônomos multimodais, chatbots
            conversacionais com persistência de sessão e pipelines GenAI
            end-to-end, integrando APIs comerciais (OpenAI, Anthropic, Groq) e
            modelos open-source (Hugging Face Transformers). Proficiente em
            otimização de inferência para redução de custos, mitigação de
            alucinações via grounding e versionamento de ML artifacts
            (Git/GitHub). Sólida base em Python para Data Science (Pandas,
            NumPy), visualização analítica (Matplotlib, Plotly) e deployment
            containerizado (Docker, Streamlit, Gradio).
          </p>
        </Card>
      </div>
    </section>
  );
};
