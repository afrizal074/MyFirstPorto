import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Portfolio.{" "}
              <Heart className="inline w-4 h-4 text-primary fill-primary" />
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
