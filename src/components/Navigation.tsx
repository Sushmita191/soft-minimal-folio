import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const links = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact Me" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.slice(1));
      return;
    }

    const updateActiveSection = () => {
      const readingPosition = window.scrollY + 128;
      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= readingPosition) {
          currentSection = link.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        currentSection = links[links.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/#home" onClick={() => setIsOpen(false)} className="text-xl font-heading font-semibold text-foreground hover:text-muted-foreground transition-smooth">
            Sushmita Rai
          </a>

          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`text-sm font-medium transition-smooth ${
                  activeSection === link.id
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-muted-foreground transition-smooth"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-card border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                  activeSection === link.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
