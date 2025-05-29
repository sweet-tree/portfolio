// components/layout/container.tsx

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "@container w-full px-4 sm:px-6 lg:px-8",
        "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
        "mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
