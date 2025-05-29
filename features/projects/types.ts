export interface ProjectProps {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: "completed" | "in-progress" | "planned";
  featured?: boolean;
}

export interface ProjectsSectionProps {
  projects: ProjectProps[];
}
