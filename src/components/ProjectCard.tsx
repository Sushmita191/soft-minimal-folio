import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date?: string;
  description: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({ title, date, description, technologies, link }: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-smooth group">
      <CardHeader>
        <CardTitle className="font-heading text-xl group-hover:text-secondary transition-smooth">
          {title}
        </CardTitle>
        {date && (
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        )}
        <CardDescription className="text-foreground leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs text-white">
              {tech}
            </Badge>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-foreground hover:text-secondary transition-smooth underline"
          >
            View Project →
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
