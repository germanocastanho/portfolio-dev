import { Mail, Phone, Linkedin, Github } from "lucide-react";
import type { ContactItem } from "@/types";

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "E-mail",
    value: "germanocastanho@proton.me",
    href: "mailto:germanocastanho@proton.me",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(51) 99945-8346",
    href: "https://wa.me/5551999458346",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/germanocastanho",
    href: "https://linkedin.com/in/germanocastanho",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/germanocastanho",
    href: "https://github.com/germanocastanho",
    external: true,
  },
];
