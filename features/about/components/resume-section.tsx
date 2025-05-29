import { ExternalLink } from "lucide-react"
import type { ResumeSectionProps } from "../types/about"

export function ResumeSection({ title, icon, items }: ResumeSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="pl-4 border-l-2 border-muted">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium">{item.title}</h4>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <div className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
              <ExternalLink className="h-3 w-3" />
              {item.organization}
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
