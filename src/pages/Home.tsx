import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground animate-fade-in">
            Hello, I'm Sushmita Rai
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Software Developer | Problem Solver | Creative Technologist
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Welcome to my portfolio. I'm passionate about building elegant solutions to complex problems,
            combining technical expertise with creative thinking to deliver impactful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <NavLink to="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
