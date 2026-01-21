import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              RedFox
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Game development company specializing in Unreal Engine.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">Product</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="/team"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Team
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="mailto:contact@redfoxstudios.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email
                </a>
                <a
                  href="https://github.com/redfoxstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/company/redfoxstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} RedFox Studios. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
