import { ProjectCard } from "./project-card";
import type { ProjectsSectionProps } from "../types";

export function ProjectsGrid({ projects }: ProjectsSectionProps) {
  return (
    <div className="space-y-6">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            Projects coming soon! I am currently working on some exciting new
            applications.
          </p>
        </div>
      )}
    </div>
  );
}
