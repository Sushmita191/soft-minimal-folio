import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-smooth cursor-pointer group">
      <CardHeader>
        <CardTitle className="font-heading text-xl group-hover:text-muted transition-smooth">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-muted-foreground hover:text-foreground transition-smooth underline"
          >
            View Project →
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
