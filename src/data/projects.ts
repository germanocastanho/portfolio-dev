import type { Project, OtherProject } from "@/types";

export const projects: Project[] = [
  {
    title: "Audio Transcriber",
    description:
      "Python CLI tool that transcribes audio and video files via OpenAI's Whisper API, supporting multiple formats and producing structured text output.",
    technologies: ["Python", "OpenAI", "Whisper API", "CLI", "Free Software"],
    githubUrl: "https://github.com/germanocastanho/audio-transcriber",
    featured: true,
  },
  {
    title: "Socrates Bot",
    description:
      "LLM-powered chatbot replicating the Socratic persona using LangChain, RAG with FAISS, and GPT-4o to conduct genuine Socratic philosophical dialogues.",
    technologies: ["Python", "LangChain", "FAISS", "GPT-4o", "RAG", "Prompt Engineering"],
    githubUrl: "https://github.com/germanocastanho/socrates-bot",
    featured: true,
  },
  {
    title: "Minerva's Owl",
    description:
      "Intelligent assistant for Obsidian vaults with semantic search via embeddings and vector retrieval for personal knowledge management.",
    technologies: ["Python", "RAG", "Embeddings", "Vector Search", "Obsidian"],
    githubUrl: "https://github.com/germanocastanho/minervas-owl",
    featured: true,
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "breaking-bank",
    description:
      "Python simulation of a banking system with deposit, withdrawal, and statement operations via CLI.",
    tags: ["Python", "Backend", "Banking", "CLI"],
    url: "https://github.com/germanocastanho/breaking-bank",
  },
  {
    name: "learning-python",
    description:
      "Personal collection of notes, tips, and Python snippets for data science and AI engineering.",
    tags: ["Python", "Data Science", "AI", "Jupyter"],
    url: "https://github.com/germanocastanho/learning-python",
  },
  {
    name: "crime-analysis",
    description:
      "Data analysis of criminal records from Rio Grande do Sul using Python-based data science and visualization techniques.",
    tags: ["Data Analysis", "Python", "Jupyter", "Visualization"],
    url: "https://github.com/germanocastanho/crime-analysis",
  },
  {
    name: "juriscraper-stj",
    description:
      "Web scraper for extracting judicial decision summaries from Brazil's Superior Court of Justice (STJ).",
    tags: ["Web Scraping", "Python", "Legal Tech"],
    url: "https://github.com/germanocastanho/juriscraper-stj",
  },
];
