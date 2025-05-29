import { GraduationCap, Heart } from "lucide-react";
import { ResumeSection } from "./resume-section";
import type { AboutMeProps } from "../types";

export function AboutMeSection({
  name,
  introduction,
  education,
  interests,
}: AboutMeProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-semibold">
          Hello, I am <span className="text-primary">{name}</span>
        </h3>
        <p className="text-muted-foreground leading-relaxed">{introduction}</p>
      </div>

      <ResumeSection
        title="Education"
        icon={<GraduationCap className="h-5 w-5" />}
        items={education}
      />

      <div>
        <div className="mb-4 flex items-center gap-2">
          <Heart className="text-primary h-5 w-5" />
          <h3 className="text-xl font-semibold">Personal Interests</h3>
        </div>
        <p className="text-muted-foreground">{interests}</p>
      </div>
    </div>
  );
}
