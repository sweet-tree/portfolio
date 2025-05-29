import { ExternalLink } from "lucide-react";
import type { ResumeSectionProps } from "../types";

export function ResumeSection({ title, icon, items }: ResumeSectionProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-muted border-l-2 pl-4">
            <div className="mb-1 flex items-start justify-between">
              <h4 className="font-medium">{item.title}</h4>
              <span className="text-muted-foreground text-sm">
                {item.period}
              </span>
            </div>
            <div className="text-muted-foreground mb-1 flex items-center gap-1 text-sm">
              <ExternalLink className="h-3 w-3" />
              {item.organization}
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
