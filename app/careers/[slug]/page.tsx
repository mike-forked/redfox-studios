import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { careersData } from "@/content/careers"

interface JobPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return careersData.map((job) => ({
    slug: job.slug,
  }))
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = careersData.find((j) => j.slug === slug)

  if (!job) {
    return {
      title: "Job Not Found | RedFox Studios",
    }
  }

  return {
    title: `${job.title} | Careers | RedFox Studios`,
    description: job.description,
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = careersData.find((j) => j.slug === slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container px-6 py-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </div>
      </div>

      <div className="container px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Job Header */}
          <div className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {job.locations.join(", ")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {job.type}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {job.title}
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Careers / {job.department}
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mb-12">
            <Button
              size="lg"
              className="h-12 rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90"
              asChild
            >
              <a
                href={`mailto:careers@redfoxstudios.com?subject=Application for ${job.title}`}
              >
                Apply for Role
              </a>
            </Button>
          </div>

          {/* Job Content */}
          <div className="space-y-12">
            {/* About Vercel/Company */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">About RedFox Studios</h2>
              <p className="leading-relaxed text-muted-foreground">
                RedFox Studios is a game development company dedicated to creating
                innovative and immersive gaming experiences. We specialize in Unreal
                Engine development and work with cutting-edge technologies to push the
                boundaries of interactive entertainment. Our mission is to craft games
                that inspire and engage players around the world.
              </p>
            </section>

            {/* Job Description */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">About the Role</h2>
              <p className="leading-relaxed text-muted-foreground">
                {job.description}
              </p>
            </section>

            {/* What You Will Do */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">What You Will Do</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* About You */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">About You</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Bonus If You */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <section>
                <h2 className="mb-4 text-2xl font-bold">Bonus If You</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Salary Range */}
            {job.salaryRange && (
              <section>
                <p className="text-sm text-muted-foreground">
                  The salary range for this role is {job.salaryRange}. Actual
                  salary will be based on job-related skills, experience, and
                  location. Compensation outside of San Francisco may be adjusted
                  based on employee location. The total compensation package may also
                  include variable pay, equity, and benefits. Your recruiter can share
                  more details during the hiring process.
                </p>
              </section>
            )}

            {/* Footer Note */}
            <section className="border-t pt-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                RedFox Studios is committed to fostering and empowering an inclusive
                community within our organization. We do not discriminate on the basis
                of race, religion, color, gender expression or identity, sexual
                orientation, national origin, citizenship, age, marital status, veteran
                status, disability status, or any other characteristic protected by
                law. RedFox Studios encourages everyone to apply for our available
                positions, even if they don't necessarily check every box on the job
                description.
              </p>
            </section>
          </div>

          {/* Apply Button Bottom */}
          <div className="mt-12 border-t pt-8">
            <Button
              size="lg"
              className="h-12 rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90"
              asChild
            >
              <a
                href={`mailto:careers@redfoxstudios.com?subject=Application for ${job.title}`}
              >
                Apply for Role
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
