import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const skills = [
  "Python", "LangChain", "LLMs", "Generative AI", "RAG", "FAISS", "ChromaDB",
  "Hugging Face", "OpenAI", "Anthropic", "Groq", "Prompt Engineering",
  "Embeddings", "Streamlit", "Gradio", "Docker", "Git", "GitHub", "Bash",
  "ETL", "Pandas", "NumPy", "Matplotlib", "Plotly", "Seaborn", "Markdown",
  "Jupyter Notebook"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Code2 className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Tecnologias</h2>
        </div>
        
        <Card className="p-8 md:p-12 glass-card hover-lift">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-default shadow-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
