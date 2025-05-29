import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import type { CertificationSectionProps } from "../types";

export function CertificationSection({
  title,
  certifications,
}: CertificationSectionProps) {
  return (
    <div>
      <h4 className="mb-4 font-medium">{title}</h4>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-card flex items-center space-x-4 rounded-lg border p-4"
          >
            {cert.badgeUrl && (
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={cert.badgeUrl || "/placeholder.svg"}
                  alt={`${cert.name} badge`}
                  fill // Uses parent container dimensions
                  sizes="(max-width: 768px) 96px, 96px" // Responsive sizing hints
                  className="object-contain" // Maintains aspect ratio
                  priority={index < 2} // Prioritizes first two badges
                  quality={90} // High quality, good compression
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-start justify-between">
                <span className="text-sm leading-tight font-medium">
                  {cert.name}
                </span>
                <Badge variant="outline" className="ml-2 text-xs">
                  {cert.year}
                </Badge>
              </div>
              <span className="text-muted-foreground text-xs">
                {cert.issuer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
