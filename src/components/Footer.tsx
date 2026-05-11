export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">
          Copyleft 🄯 {new Date().getFullYear()}, Germano Castanho
        </p>
      </div>
    </footer>
  );
};
