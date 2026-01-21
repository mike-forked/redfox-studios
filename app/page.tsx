import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { HomeProjects } from "@/components/home-projects"
import { getAllPosts } from "@/lib/blog"
import projectsData from "@/content/projects.json"
import type { Project } from "@/components/project-card"

const projects: Project[] = projectsData as Project[]

export default function Home() {
  const latestPosts = getAllPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container px-6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The Game Development
              <br />
              Company for the Web
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              Used by some of the world's largest companies, RedFox is a game development
              studio specializing in{" "}
              <span className="font-medium text-foreground">Unreal Engine</span> and
              cutting-edge technologies.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7">
              <Button size="lg" className="h-9 rounded-full px-6 text-sm" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-9 rounded-full px-6 text-sm"
                asChild
              >
                <Link href="/blog">
                  Learn RedFox <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted/30">
        <div className="container px-6 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                WHAT'S IN REDFOX?
              </p>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Everything you need to build great
                <br />
                games on the web.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Game Development</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Full-cycle development from concept to launch. We transform ideas into
                immersive gaming experiences.
              </p>
            </div>

            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Unreal Engine Expertise</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Advanced knowledge in Unreal Engine 5, including Nanite, Lumen, and
                cutting-edge rendering technologies.
              </p>
            </div>

            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Technical Solutions</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Custom tools, plugins, and technical solutions to streamline your
                development workflow.
              </p>
            </div>

            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Performance Optimization</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                We ensure your games run smoothly across all platforms with advanced
                optimization techniques.
              </p>
            </div>

            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Consulting Services</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Expert guidance on architecture, best practices, and technical decisions
                for your projects.
              </p>
            </div>

            <div className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-1 text-sm font-semibold">Cross-Platform Development</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Build once, deploy everywhere. We create games that work seamlessly
                across all platforms.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="bg-background">
          <div className="container px-6 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  SHOWCASE
                </p>
                <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  The framework of choice when it matters
                </h2>
              </div>

              <HomeProjects projects={projects} />
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {latestPosts.length > 0 && (
        <section className="border-t bg-muted/30">
          <div className="container px-6 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    LATEST POSTS
                  </p>
                  <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    Learn about game development
                  </h2>
                </div>
                <Button variant="ghost" className="hidden text-sm sm:inline-flex" asChild>
                  <Link href="/blog">
                    View All Posts <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

              <div className="mt-6 text-center sm:hidden">
                <Button variant="ghost" className="text-sm" asChild>
                  <Link href="/blog">
                    View All Posts <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t bg-background">
        <div className="container px-6 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              Get in touch with our team to discuss your project and see how we can help
              bring your vision to life.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-9 rounded-full px-6 text-sm" asChild>
                <a href="mailto:contact@redfoxstudios.com">Contact Us</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-9 rounded-full px-6 text-sm"
                asChild
              >
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
