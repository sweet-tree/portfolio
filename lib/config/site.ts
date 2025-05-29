// Site configuration
export const siteConfig = {
  name: "Dmitry Sevryukov",
  title: "Fullstack Developer & AI Expert",
  description: "Building modern web applications with cutting-edge technologies and AI solutions",
  url: "https://dmitrysevryukov.com",
  mainNav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  socialMedia: {
    github: "https://github.com/dmitrysevryukov",
    linkedin: "https://linkedin.com/in/dmitrysevryukov",
    twitter: "@dmitrysevryukov",
    email: "hello@dmitrysevryukov.com",
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    ai: ["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "OpenAI API"],
    tools: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
  },
}

export type MainNavItem = {
  label: string
  href: string
}
