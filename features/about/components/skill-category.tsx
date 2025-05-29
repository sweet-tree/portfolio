import { Badge } from "@/components/ui/badge";
import type { SkillCategoryProps } from "../types";

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="mb-3 font-medium">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
