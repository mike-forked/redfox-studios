"use client"

import { Button } from "@/components/ui/button"

export function CareerHero() {
  const scrollToPositions = () => {
    const positionsSection = document.getElementById("open-positions")
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative border-b">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Decorative colored lines */}
      <div className="absolute right-0 top-32 h-px w-16 bg-green-500" />
      <div className="absolute right-0 top-52 h-px w-24 bg-yellow-500" />

      <div className="container px-6 py-32 sm:py-40 lg:py-48">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Join us.
            <br />
            Make games. Better.
          </h1>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-11 rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90"
              onClick={scrollToPositions}
            >
              Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
