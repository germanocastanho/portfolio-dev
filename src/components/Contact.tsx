import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
const contactInfo = [{
  icon: Mail,
  label: "E-mail",
  value: "germanocastanho@proton.me",
  href: "mailto:germanocastanho@proton.me"
}, {
  icon: Phone,
  label: "WhatsApp",
  value: "(51) 99945-8346",
  href: "https://wa.me/5551999458346"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "/germanocastanho",
  href: "https://linkedin.com/in/germanocastanho"
}, {
  icon: Github,
  label: "GitHub",
  value: "/germanocastanho",
  href: "https://github.com/germanocastanho"
}];
const languages = [{
  name: "Português",
  level: "Nativo"
}, {
  name: "Inglês",
  level: "Intermediário"
}, {
  name: "Espanhol",
  level: "Básico"
}];
export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <MessageCircle className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Contato</h2>
        </div>
        
        <Card className="p-8 md:p-12 glass-card hover-lift">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map(item => {
              const Icon = item.icon;
              return (
                <Button 
                  key={item.label} 
                  variant="secondary" 
                  className="justify-start h-auto py-4 px-4 transition-all hover:scale-105 shadow-sm" 
                  asChild
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                    <div className="text-left overflow-hidden">
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium truncate">{item.value}</div>
                    </div>
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};