import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      description: "Graduated with honors. Focus on software engineering and data structures.",
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      period: "2014 - 2016",
      description: "Completed with distinction in mathematics and science.",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Artificial Intelligence",
    "Mobile App Development",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Education</h1>
            <p className="text-lg text-muted-foreground">
              Academic background and relevant coursework
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Academic Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-4 last:pb-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
