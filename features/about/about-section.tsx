import type React from "react";
import { AboutMeSection } from "./components/about-me-section";
import { aboutMeData, skillsData } from "./data";
import { SkillsSection } from "./components/skills-section";
import { Container } from "@/components/layout/container";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
          About Me
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* About Me Column */}
          <AboutMeSection {...aboutMeData} />

          {/* Skills Column */}
          <SkillsSection {...skillsData} />
        </div>
      </Container>
    </section>
  );
}
