import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Github, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground animate-fade-in">
            Sushmita Rai
          </h1>
          <p className="text-xl sm:text-2xl text-foreground font-light animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Machine Learning Engineer | Graduate Teaching Assistant | AI/ML
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Johnson City, TN</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:sushmita.rai387@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-smooth">
              <Mail className="h-4 w-4" />
              <span>sushmita.rai387@gmail.com</span>
            </a>
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
            Welcome to my portfolio. I am a Machine Learning Engineer and Graduate Teaching Assistant with expertise in AI/ML, 
            specializing in NLP, computer vision, and end-to-end ML pipeline development. I have led impactful projects across 
            grant evaluation systems, conversational AI, and educational technology, combining technical excellence with innovative 
            problem-solving to deliver scalable, data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <NavLink to="/resume">
              <Button size="lg" className="group min-w-[180px]">
                View Resume
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </NavLink>
            <NavLink to="/projects">
              <Button size="lg" variant="outline" className="min-w-[180px]">
                View Projects
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
