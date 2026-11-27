import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github, MapPin } from "lucide-react";
import profilePhoto from "@/assets/Sushmita_Rai_profile_photo.jpeg";
import Experience from "@/pages/Resume";
import Research from "@/pages/Research";
import Projects from "@/pages/Projects";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      // Old links used #resume; that section is now #experience.
      const id = location.hash.slice(1) === "resume" ? "experience" : location.hash.slice(1);
      const section = document.getElementById(id);
      section?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div>
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center" aria-label="Home">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
            <div className="flex justify-center mb-8 animate-fade-in">
              <img
                src={profilePhoto}
                alt="Sushmita Rai - Machine Learning Engineer"
                className="w-48 h-48 rounded-full border-4 border-accent shadow-lg object-cover"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground animate-fade-in">
              Sushmita Rai
            </h1>
            <p className="text-xl sm:text-2xl text-foreground font-light animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Graduate Researcher | Machine Learning Engineer | Graduate Teaching Assistant
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Johnson City, TN</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a
                href="https://linkedin.com/in/sushmita-rai-906b06157"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg hover:shadow-md transition-smooth"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/sushmitaraii1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg hover:shadow-md transition-smooth"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>

            <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.25s" }}>
              I am a Master of Science in Computer Science student and Graduate Researcher at East Tennessee State University,
              where my thesis focuses on multi-modal sensor fusion for real-time cooperative 3D object detection in connected urban
              environments. My research spans computer vision, multi-sensor fusion and 3D perception, cooperative perception, and
              machine learning for AI-driven drug delivery. Before graduate school, I worked as a Machine Learning Engineer at Optible AI
              and Fusemachines, building question answering, NLP, and conversational AI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a href="#experience">
                <Button size="lg" className="group min-w-[180px]">
                  View Experience
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  View Projects
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" aria-label="Experience">
        <Experience />
      </section>
      <section id="research" aria-label="Research">
        <Research />
      </section>
      <section id="education" aria-label="Education">
        <Education />
      </section>
      <section id="projects" aria-label="Projects">
        <Projects />
      </section>
      <section id="contact" aria-label="Contact Me">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
