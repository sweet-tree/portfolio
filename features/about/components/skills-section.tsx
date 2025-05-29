import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SkillCategory } from "./skill-category"
import { CertificationSection } from "./certification-section"
import type { SkillsData } from "../types/about"

export function SkillsSection({ frontend, backend, tools, certifications }: SkillsData) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>

        <div className="space-y-6">
          <SkillCategory title="Frontend Development" skills={frontend} />

          <Separator />

          <SkillCategory title="Backend Development" skills={backend} />

          <Separator />

          <SkillCategory title="Tools & Others" skills={tools} />

          <Separator />

          <CertificationSection title="Certifications" certifications={certifications} />
        </div>
      </CardContent>
    </Card>
  )
}
