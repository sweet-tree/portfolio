import type { ProjectProps } from "./types";

export const projectsData: ProjectProps[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript.",
    longDescription:
      "A fully responsive personal portfolio website showcasing my skills, projects, and certifications. Built with modern web technologies and optimized for performance and accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    imageUrl: "/placeholder.svg?height=200&width=400",
    status: "completed",
  },
  {
    title: "Task Management App",
    description:
      "A simple task management application with drag-and-drop functionality.",
    longDescription:
      "A productivity application that helps users organize their tasks with an intuitive drag-and-drop interface. Features include task categorization, due dates, and progress tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/task-app",
    imageUrl: "/placeholder.svg?height=200&width=400",
    status: "in-progress",
  },
];
