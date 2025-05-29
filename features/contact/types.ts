import type React from "react";
export interface ContactMethod {
  type: "email" | "phone" | "location" | "social";
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  username?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSectionProps {
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
}
