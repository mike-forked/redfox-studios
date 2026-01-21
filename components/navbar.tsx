"use client"

import Link from "next/link"
import { navConfig } from "@/content/nav-config"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href={navConfig.logo.href} className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tight">{navConfig.logo.text}</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navConfig.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
