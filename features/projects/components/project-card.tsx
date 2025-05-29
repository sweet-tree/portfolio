import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectProps } from "../types";

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  status,
  featured,
}: ProjectProps) {
  return (
    <Card className={`h-full ${featured ? "ring-primary/20 ring-2" : ""}`}>
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform hover:scale-105"
            quality={90}
          />
          {featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="default" className="bg-primary">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl leading-tight font-semibold">{title}</h3>
          <Badge
            variant={
              status === "completed"
                ? "default"
                : status === "in-progress"
                  ? "secondary"
                  : "outline"
            }
            className="ml-2 flex-shrink-0"
          >
            {status === "completed"
              ? "Completed"
              : status === "in-progress"
                ? "In Progress"
                : "Planned"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {longDescription || description}
        </p>

        <div className="mb-6">
          <h4 className="mb-2 text-sm font-medium">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
