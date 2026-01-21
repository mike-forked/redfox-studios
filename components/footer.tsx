import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { footerConfig } from "@/content/footer-config"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {footerConfig.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2.5">
                <h3 className="text-xs font-medium">{section.title}</h3>
                <div className="flex flex-col gap-2 text-xs">
                  {section.links.map((link) => {
                    const linkProps = link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        {...linkProps}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {footerConfig.copyright}
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
