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
    <section className="relative border-b bg-background">
      {/* Decorative colored lines */}
      <div className="absolute right-[10%] top-[30%] h-px w-12 bg-green-500" />
      <div className="absolute right-[15%] top-[50%] h-px w-16 bg-yellow-500" />

      <div className="container max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Join us.
            <br />
            Make games. Better.
          </h1>
          <div className="mt-10">
            <Button
              className="h-10 rounded-md bg-black px-6 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
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
