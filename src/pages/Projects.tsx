import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website with responsive design and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization.",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      link: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with group messaging and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Express", "Redis"],
      link: "#",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
