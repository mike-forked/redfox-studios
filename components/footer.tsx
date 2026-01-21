import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Product</h3>
            <div className="flex flex-col gap-2.5 text-sm">
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
            <h3 className="text-sm font-medium">Company</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex flex-col gap-2.5 text-sm">
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

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} RedFox Studios. All rights reserved.</p>
          <Link href="/" className="font-semibold text-foreground">
            RedFox
          </Link>
        </div>
      </div>
    </footer>
  )
}
