import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, Award, GraduationCap, Code, Users, Trophy, Mail, Phone, Linkedin, Github } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Graduate Teaching Assistant",
      company: "East Tennessee State University",
      location: "Johnson City, TN",
      period: "Aug 2025 – Present",
      bullets: [
        "Leading lab sessions and providing academic support for 126 undergraduate students in foundational and advanced programming courses including AI and Machine Learning, improving coding and problem-solving proficiency.",
        "Conducting code reviews, assisting with curriculum delivery, and enhancing student outcomes through structured feedback and project-based learning."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Optible AI",
      location: "Adelaide, Australia",
      period: "Sept 2022 – Jul 2025",
      bullets: [
        "Developed an AI system with a Question Answering (QA) model for criteria matching and a ranking algorithm for final score calculation, automating grant proposal reviews with 97% accuracy and reducing assessment time by 90% across 6 major grant providers.",
        "Fine-tuned a Text-to-Text Transfer Transformer (T5)-based QA model with feature engineering, and confidence-aware inference, improving validation accuracy to 86.34%.",
        "Implemented a ranking and weighted scoring algorithm on top of QA outputs, producing client-specific scores aligned with criterion importance and business rules.",
        "Conducted Exploratory Data Analysis (EDA) on unstructured text to design preprocessing strategies, boosting Named Entity Recognition (NER) accuracy by 90% and improving insight extraction.",
        "Led a team to implement an end-to-end pipeline for data loading, preprocessing, model training, and versioning, improving automation and reproducibility.",
        "Designed and deployed an AI agent to onboard new clients for grant assessments, reducing client setup time by 96% through criteria extraction from guidelines PDFs and the automatic generation of sub-criteria and validation questions."
      ]
    },
    {
      title: "Machine Learning Engineer Associate",
      company: "Fusemachines Nepal Pvt. Ltd",
      location: "Kathmandu, Nepal",
      period: "Apr 2021 – Aug 2022",
      bullets: [
        "Designed and deployed a Virtual QA Assistant for Time Magazine to combat COVID-19 misinformation using DistilBERT, RoBERTa, and Rasa within a Haystack pipeline.",
        "Partnered with Presto (U.S. drive-thru automation) to develop a voice-based food ordering system using ASR and NLU, improving operational efficiency.",
        "Delivered Conversational AI training to 60+ employees and supported 100+ fellows in the Fusemachines AI Fellowship.",
        "Built and deployed a content management API using Django REST Framework hosted on AWS EC2."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Vacker360",
      location: "New Baneshwor, Kathmandu",
      period: "Sept 2020 – Mar 2021",
      bullets: [
        "Assisted in building custom add-ons on the Odoo framework.",
        "Set up AWS Active Directory Service on an AWS EC2 Windows Server instance for role-based access control, ensuring system confidentiality and security.",
        "Integrated IBM Watson Assistant chatbot with a custom web application."
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "East Tennessee State University",
      location: "Johnson City, TN",
      period: "Expected Graduation May 2027"
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Kathmandu Engineering College",
      location: "Kathmandu, Nepal",
      period: "Dec 2016 – Sept 2021"
    }
  ];

  const skillsCategories = {
    "Programming": ["C", "C++", "Python", "JavaScript"],
    "App Development": ["Django", "Flask", "FastAPI", ".NET", "Streamlit"],
    "Machine Learning": ["Keras", "TensorFlow", "Scikit-learn", "PyTorch", "Pandas", "Seaborn", "NumPy", "Rasa", "SpaCy", "Transformers", "Hugging Face", "XGBoost"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
    "MLOps": ["Git", "Docker", "AWS", "GCP", "MLflow", "Metaflow", "Airflow", "Containerization"],
    "Core Areas": ["Machine Learning", "NLP", "Information Retrieval", "Computer Vision", "Prompt Engineering"]
  };

  const projects = [
    {
      title: "Customer Churn Prediction",
      date: "Jul 2021",
      tools: "Streamlit, Scikit-learn, XGBoost, Docker, FastAPI",
      description: "Built a predictive modeling app for customer churn using feature engineering and ensemble learning, achieving 87% accuracy."
    },
    {
      title: "DERMYSOL (Skin Disease Identifier)",
      date: "Mar 2021",
      tools: "TensorFlow, Keras, Django, IBM Watson Assistant",
      description: "Developed a computer vision app for skin disease detection using transfer learning (fine-tuned VGG16) with 77.64% accuracy through hyperparameter tuning and augmentation."
    },
    {
      title: "SAVE BLOOD",
      date: "Sept 2019",
      tools: "HTML, CSS, JavaScript",
      description: "Created a web app to track, monitor, and notify about blood expiry dates, helping donation centers reduce wastage by efficiently managing stock and expiration alerts."
    },
    {
      title: "EMPAYEE (Payroll Management System)",
      date: "Jan 2019",
      tools: "ASP.NET MVC, C#, HTML, CSS, Bootstrap",
      description: "Developed a payroll management system with administrative and employee interfaces, enabling efficient management and transparent payroll access."
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning – Specialty",
    "Rasa Developer Certificate",
    "Machine Learning, MLOps & Advanced Computer Vision (Coursera)"
  ];

  const leadership = [
    {
      title: "Web Developer Ambassador",
      organization: "Girls in Tech – Nepal",
      location: "Kathmandu, Nepal",
      period: "Jan 2020 – Dec 2021",
      bullets: [
        "Mentored participants during the pre-event of Nepal's Largest All-Female Hackathon.",
        "Maintained and customized the nepal.girlsintech.org website using WordPress.",
        "Initiated a front-end development team, mentoring members in HTML and CSS.",
        "Conducted hands-on workshops on Git and GitHub for new contributors."
      ]
    }
  ];

  const awards = [
    {
      title: "Winner – The Algorithm is Female Hackathon",
      organization: "Ironhack, Hemper, Coderush",
      date: "Sept 2019"
    },
    {
      title: "Winner – The Most Creative Project",
      organization: "Ironhack, Hemper, Coderush",
      date: "Sept 2019"
    },
    {
      title: "Winner – Design Thinking Challenge",
      organization: "Innovative Ghar Nepal",
      date: "Jun 2018"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Resume</h1>
            <p className="text-lg text-foreground">
              A comprehensive overview of my professional journey
            </p>
            <a href="/assets/Sushmita_Rai_Resume.pdf" download>
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </Button>
            </a>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sushmita.rai387@gmail.com" className="hover:text-secondary transition-smooth">
                    sushmita.rai387@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (423) 773-7048</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://linkedin.com/in/sushmita-rai-906b06157" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                    linkedin.com/in/sushmita-rai-906b06157
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a href="https://github.com/sushmitaraii1" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                    github.com/sushmitaraii1
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-4 last:pb-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-foreground">{edu.location}</p>
                  <p className="text-sm text-foreground mt-1">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-6 last:pb-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{job.title}</h3>
                  <p className="text-foreground font-medium">{job.company}</p>
                  <p className="text-sm text-foreground">{job.location}</p>
                  <p className="text-sm text-foreground mb-3">{job.period}</p>
                  <ul className="space-y-2 list-disc list-inside">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-foreground leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(skillsCategories).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold text-foreground mb-2">{category}:</h4>
                  <p className="text-foreground">{skills.join(", ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-4 last:pb-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-foreground mb-1">{project.date}</p>
                  <p className="text-sm text-foreground font-medium mb-2">Tools: {project.tools}</p>
                  <p className="text-foreground">{project.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">●</span>
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Leadership / Community Involvement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {leadership.map((item, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground font-medium">{item.organization}</p>
                  <p className="text-sm text-foreground">{item.location}</p>
                  <p className="text-sm text-foreground mb-3">{item.period}</p>
                  <ul className="space-y-2 list-disc list-inside">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-foreground">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Awards & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-3 last:pb-0">
                  <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                  <p className="text-foreground">{award.organization}</p>
                  <p className="text-sm text-foreground">{award.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
