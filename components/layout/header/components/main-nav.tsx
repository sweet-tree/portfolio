// components/layout/header/main-nav.tsx
import { LinkList, LinkItem } from "@/components/shared/link-list";
import { defaultLinkRenderer } from "@/components/shared/link-list-renderer";

interface MainNavProps {
  items: LinkItem[];
  className?: string;
}

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="glass-surface hidden md:flex" aria-label="Main navigation">
      <LinkList
        className="mx-2"
        items={items}
        direction="horizontal"
        renderItem={defaultLinkRenderer}
      />
    </nav>
  );
}
