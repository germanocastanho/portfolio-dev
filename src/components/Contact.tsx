import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Contact = () => {
  const reveal = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-4 section-frosted">
      <div ref={reveal} className="container scroll-reveal mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <MessageCircle className="w-10 h-10 text-primary" aria-hidden="true" />
          <h2 className="section-title mb-0">Contact</h2>
        </div>

        <Card className="p-8 md:p-12 glass-card hover-lift">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="secondary"
                  className="justify-start h-auto py-4 px-4 transition-all hover:scale-105 shadow-sm"
                  asChild
                >
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon className="w-5 h-5 mr-3 flex-shrink-0 text-primary" aria-hidden="true" />
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
