import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      date: "Jul 2021",
      description: "Built a predictive modeling app for customer churn using feature engineering and ensemble learning, achieving 87% accuracy.",
      technologies: ["Streamlit", "Scikit-learn", "XGBoost", "Docker", "FastAPI"],
    },
    {
      title: "DERMYSOL (Skin Disease Identifier)",
      date: "Mar 2021",
      description: "Developed a computer vision app for skin disease detection using transfer learning (fine-tuned VGG16) with 77.64% accuracy through hyperparameter tuning and augmentation.",
      technologies: ["TensorFlow", "Keras", "Django", "IBM Watson Assistant"],
    },
    {
      title: "SAVE BLOOD",
      date: "Sept 2019",
      description: "Created a web app to track, monitor, and notify about blood expiry dates, helping donation centers reduce wastage by efficiently managing stock and expiration alerts.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "EMPAYEE (Payroll Management System)",
      date: "Jan 2019",
      description: "Developed a payroll management system with administrative and employee interfaces, enabling efficient management and transparent payroll access.",
      technologies: ["ASP.NET MVC", "C#", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Projects</h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
