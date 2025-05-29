import Link from "next/link";
import { TreeDeciduous } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Home">
      <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
        <TreeDeciduous className="text-foreground h-5 w-5" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-foreground text-xl font-bold">SweetTree</span>
        <span className="text-muted-foreground text-xs">
          by Dmitry Sevryukov
        </span>
      </div>
    </Link>
  );
}
