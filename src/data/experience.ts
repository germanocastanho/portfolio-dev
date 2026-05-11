import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    role: "System Developer Analyst",
    company: "Sicredi",
    period: "2026 – Present",
    highlights: [
      "Build and maintain Python automations for operational processes at a century-old financial cooperative with assets under management in the billions.",
      "Design and develop Python services for data integration between internal systems and the Sicredi platform, ensuring LGPD and Central Bank compliance.",
      "Automate ETL routines and data pipelines (Pandas, Requests, SQLAlchemy) processing thousands of daily records with automated validation and regulatory audit logging.",
    ],
  },
  {
    role: "AI Engineer & Developer",
    company: "Freelancer",
    period: "2024 – 2025",
    highlights: [
      "Built end-to-end LLM-based systems (GPT, Claude, Llama) and GenAI workflows using LangChain, CrewAI, and Agno for intelligent automation and NLP.",
      "Implemented RAG pipelines with FAISS and ChromaDB, enhancing accuracy and context of AI responses in production applications.",
      "Developed autonomous agents and conversational chatbots integrated with OpenAI, Anthropic, and Groq APIs, with session persistence and context control.",
      "Engineered and optimized prompts to maximize performance, reduce API costs, and mitigate hallucinations in generative outputs.",
    ],
  },
];
