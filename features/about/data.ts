import type { AboutMeProps, SkillsData } from "./types";

export const aboutMeData: AboutMeProps = {
  name: "John Doe",
  introduction: `I'm a passionate software developer with over 5 years of experience building web applications and
    solving complex problems. I specialize in frontend development with React and backend development with
    Node.js. I'm dedicated to creating clean, efficient, and user-friendly applications that deliver
    exceptional experiences.`,
  education: [
    {
      title: "M.S. Computer Science",
      organization: "Tech University",
      period: "2016 - 2018",
      description:
        "Specialized in Software Engineering and Distributed Systems.",
    },
    {
      title: "B.S. Computer Science",
      organization: "State University",
      period: "2012 - 2016",
      description: "Graduated with honors. Minor in Mathematics.",
    },
  ],
  interests: `When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
    with new cooking recipes. I'm also an active contributor to open-source projects and enjoy attending
    tech meetups.`,
};

export const skillsData: SkillsData = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      badgeUrl: "/aws-certified-cloud-practitioner.png",
    },
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      badgeUrl: "/aws-certified-ai-practitioner.png",
    },
  ],
};
