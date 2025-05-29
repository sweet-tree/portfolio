"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavigationProps } from "../types";

export function MobileNav({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:bg-muted"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="bg-background/95 border-border absolute top-full right-0 left-0 border-b backdrop-blur-md">
          <nav className="container-custom py-4">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="ghost" className="justify-start">
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
