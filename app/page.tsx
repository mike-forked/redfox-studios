import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { HomeProjects } from "@/components/home-projects"
import { getAllPosts } from "@/lib/blog"
import projectsData from "@/content/projects.json"
import type { Project } from "@/components/project-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { heroContent } from "@/content/hero"
import { features, featuresSection } from "@/content/features"
import { testimonials, testimonialsSection } from "@/content/testimonials"
import { siteConfig } from "@/content/site-config"

const projects: Project[] = projectsData as Project[]

export default function Home() {
  const latestPosts = getAllPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container px-6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium">
              {heroContent.badge}
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              {heroContent.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7">
              <Button size="lg" className="h-9 rounded-full px-6 text-sm" asChild>
                <Link href={heroContent.cta.primary.href}>
                  {heroContent.cta.primary.label}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-9 rounded-full px-6 text-sm"
                asChild
              >
                <Link href={heroContent.cta.secondary.href}>
                  {heroContent.cta.secondary.label}{" "}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
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
                {featuresSection.badge}
              </p>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {featuresSection.title}
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 text-sm font-semibold">{feature.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
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

      {/* Testimonials Section */}
      <section className="border-t bg-background">
        <div className="container px-6 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {testimonialsSection.badge}
              </p>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {testimonialsSection.title}
              </h2>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="mx-auto w-full max-w-4xl"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.author.name} className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-full rounded-xl border bg-card p-6 shadow-sm">
                      <div className="mb-4">
                        <svg
                          className="h-8 w-8 text-muted-foreground/30"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.author.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.author.title}, {testimonial.author.company}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30">
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
                <a href={`mailto:${siteConfig.contact.email}`}>Contact Us</a>
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
