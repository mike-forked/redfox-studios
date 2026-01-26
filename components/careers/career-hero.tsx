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
    <section className="relative overflow-hidden border-b bg-background">
      {/* Decorative arc grid - Vercel style */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid arc container */}
        <svg
          className="absolute left-1/2 top-0 h-full w-[200%] -translate-x-1/2 opacity-[0.15] dark:opacity-[0.08]"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric arcs */}
          <path
            d="M 0 600 Q 600 0 1200 600"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 100 600 Q 600 100 1100 600"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200 600 Q 600 200 1000 600"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 300 600 Q 600 300 900 600"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          {/* Vertical lines */}
          <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="1" />
          <line x1="450" y1="0" x2="450" y2="600" stroke="currentColor" strokeWidth="1" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="currentColor" strokeWidth="1" />
          <line x1="750" y1="0" x2="750" y2="600" stroke="currentColor" strokeWidth="1" />
          <line x1="900" y1="0" x2="900" y2="600" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Colored accent lines */}
        <div className="absolute right-[20%] top-[25%] h-[2px] w-16 bg-emerald-500" />
        <div className="absolute right-[12%] top-[55%] h-[2px] w-20 bg-amber-400" />
      </div>

      <div className="container relative max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Join us.
            <br />
            Make games. Better.
          </h1>
          <div className="mt-10">
            <Button
              className="h-10 rounded-full bg-black px-6 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
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
