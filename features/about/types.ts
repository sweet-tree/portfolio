import type React from "react";
export interface ResumeItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface ResumeSectionProps {
  title: string;
  icon: React.ReactNode;
  items: ResumeItemProps[];
}

export interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export interface CertificationProps {
  name: string;
  issuer: string;
  year: string;
  badgeUrl?: string;
}

export interface CertificationSectionProps {
  title: string;
  certifications: CertificationProps[];
}

export interface AboutMeProps {
  name: string;
  introduction: string;
  education: ResumeItemProps[];
  interests: string;
}

export interface SkillsData {
  frontend: string[];
  backend: string[];
  tools: string[];
  certifications: CertificationProps[];
}
