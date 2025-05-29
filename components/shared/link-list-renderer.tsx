// src/components/shared/link-list-renderers.tsx
import Link from "next/link";
import type { LinkItem } from "./link-list";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function defaultLinkRenderer(item: LinkItem): ReactNode {
  const baseClass = cn("nav-link", item.disabled && "disabled");

  const content = (
    <>
      {item.icon && (
        <span className={item.label ? "mr-2" : ""}>{item.icon}</span>
      )}
      {item.label && <span>{item.label}</span>}
    </>
  );

  const ariaLabel = item.label ?? "Navigation link";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={baseClass} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
