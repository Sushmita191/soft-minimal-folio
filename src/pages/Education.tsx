import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "East Tennessee State University",
      location: "Johnson City, TN",
      period: "(Expected Graduation) May 2027"
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Kathmandu Engineering College",
      location: "Kathmandu, Nepal",
      period: "Dec 2016 – Sept 2021"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Education</h1>
            <p className="text-lg text-foreground">
              Academic background and qualifications
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Academic Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4 pb-6 last:pb-0">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-foreground font-medium text-lg">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-foreground mt-2">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
