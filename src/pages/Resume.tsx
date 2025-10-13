import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, Award } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Software Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      title: "Software Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed and maintained client websites and web applications using modern technologies.",
    },
  ];

  const skills = [
    "JavaScript/TypeScript",
    "React.js",
    "Node.js",
    "Python",
    "SQL/NoSQL",
    "Git",
    "AWS",
    "Docker",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Resume</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my professional journey
            </p>
            <Button className="group">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-4 last:pb-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{job.title}</h3>
                  <p className="text-muted-foreground font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
