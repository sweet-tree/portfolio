// components/layout/header/header.tsx
import Link from "next/link";
import { Logo, MainNav, MobileNav } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "./constants";

export function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <MainNav items={NAVIGATION_ITEMS} className="hidden md:flex" />

          <div className="flex items-center space-x-4">
            <Button asChild variant="default" className="hidden md:flex">
              <Link href="#contact">Contact me</Link>
            </Button>
            <MobileNav items={NAVIGATION_ITEMS} />
          </div>
        </div>
      </div>
    </header>
  );
}
