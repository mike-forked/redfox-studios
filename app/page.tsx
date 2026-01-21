import Link from "next/link"
import { ArrowRight, Code, Gamepad2, Lightbulb } from "lucide-react"
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
      <section className="container py-24 md:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Innovative{" "}
            <span className="text-primary">Gaming Experiences</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            RedFox Studios is a game development company specializing in Unreal Engine
            and cutting-edge technologies. We bring creative visions to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border/40 bg-muted/40 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              About RedFox Studios
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a passionate team of game developers, designers, and engineers
              dedicated to creating exceptional gaming experiences. With expertise in
              Unreal Engine and modern game development tools, we transform ideas into
              immersive worlds.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We offer comprehensive game development services tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Gamepad2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Game Development</h3>
            <p className="text-muted-foreground">
              Full-cycle game development from concept to launch, specializing in
              Unreal Engine projects
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Technical Solutions</h3>
            <p className="text-muted-foreground">
              Custom tools, plugins, and technical solutions to enhance your game
              development workflow
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Consulting</h3>
            <p className="text-muted-foreground">
              Expert consulting on game design, architecture, and best practices for
              your projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="border-t border-border/40 bg-muted/40 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Check out some of our recent work
              </p>
            </div>

            <HomeProjects projects={projects} />
          </div>
        </section>
      )}

      {/* Blog Section */}
      {latestPosts.length > 0 && (
        <section className="container py-16 md:py-24">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-muted-foreground">
                Insights, tutorials, and stories from our team
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-border/40 bg-muted/40 py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you. Reach out and let's
              create something amazing together.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="mailto:contact@redfoxstudios.com">Email Us</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
