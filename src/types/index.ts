import type { ElementType } from "react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface OtherProject {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export interface ContactItem {
  icon: ElementType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
