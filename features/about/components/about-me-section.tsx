import { GraduationCap, Heart } from "lucide-react"
import { ResumeSection } from "./resume-section"
import type { AboutMeProps } from "../types/about"

export function AboutMeSection({ name, introduction, education, interests }: AboutMeProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Hello, I'm <span className="text-primary">{name}</span>
        </h3>
        <p className="text-muted-foreground leading-relaxed">{introduction}</p>
      </div>

      <ResumeSection title="Education" icon={<GraduationCap className="h-5 w-5" />} items={education} />

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Personal Interests</h3>
        </div>
        <p className="text-muted-foreground">{interests}</p>
      </div>
    </div>
  )
}
