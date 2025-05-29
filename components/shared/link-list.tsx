// src/components/shared/link-list.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface LinkItem {
  label?: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
}

interface LinkListProps {
  items: LinkItem[];
  className?: string;
  ariaLabel?: string;
  direction?: "vertical" | "horizontal";
  renderItem: (item: Readonly<LinkItem>) => React.ReactNode;
}

export function LinkList({
  items,
  className,
  direction = "horizontal",
  renderItem,
}: LinkListProps) {
  if (!items?.length) return null;

  const baseClass =
    direction === "horizontal"
      ? "flex-row items-center gap-6"
      : "flex-col gap-2";

  return (
    <ul className={cn("flex", baseClass, className)}>
      {items.map((item) => (
        <li key={item.href}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
