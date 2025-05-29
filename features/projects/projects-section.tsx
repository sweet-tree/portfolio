import { ProjectsGrid } from "./components/projects-grid";
import { projectsData } from "./data";
import { Container } from "@/components/layout/container";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            My Work
          </h2>

          <ProjectsGrid projects={projectsData} />
        </div>
      </Container>
    </section>
  );
}
