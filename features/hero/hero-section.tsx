import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        {/* Badge centered above both columns */}
        <div className="mt-2 mb-10 flex justify-center sm:mt-0">
          <div className="glass-surface inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-foreground text-sm font-medium">
              Available for work
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="flex flex-col gap-16 @md:items-center @lg:flex-row @lg:items-start @lg:gap-32">
          {/* Text column */}
          <div className="space-y-6 text-center @lg:text-left">
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance @sm:text-5xl @2xl:text-6xl">
              <span className="block whitespace-nowrap">
                Fullstack Developer
              </span>
              <span className="gradient-heading mt-2 block whitespace-nowrap">
                & AI Expert
              </span>
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed text-balance @sm:text-lg @2xl:text-lg">
              Crafting performant web apps with React and Next.js — powered by
              AI and optimized for scalability.
            </p>

            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          {/* Tree image */}
          <div className="w-[clamp(360px,50vw,800px)] @md:self-center">
            <Image
              src="/tree5.webp"
              alt="Stylized tree"
              width={1000}
              height={1000}
              className="h-auto w-full rounded-xl object-contain mix-blend-lighten"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
