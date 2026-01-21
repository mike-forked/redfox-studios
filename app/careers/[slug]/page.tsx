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
        <div className="container max-w-7xl px-6 py-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link href="/careers" className="hover:text-foreground">
              {job.department}
            </Link>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.type === "Hybrid" ? job.locations[0] : job.locations.join(", ")}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Job Header */}
          <div className="mb-12">
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
              {job.title}
            </h1>

            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                Careers / {job.department}
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mb-16">
            <Button
              className="h-10 rounded-md bg-black px-6 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
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
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {/* About Company */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">About RedFox Studios:</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                RedFox Studios is a game development company dedicated to creating
                innovative and immersive gaming experiences. We specialize in Unreal
                Engine development and work with cutting-edge technologies to push the
                boundaries of interactive entertainment. Our mission is to craft games
                that inspire and engage players around the world.
              </p>
            </section>

            {/* Job Description */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">About the Role:</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {job.description}
              </p>
            </section>

            {/* What You Will Do */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">What You Will Do:</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </section>

            {/* About You */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">About You:</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>

            {/* Bonus If You */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold">Bonus If You:</h2>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, index) => (
                    <li
                      key={index}
                      className="text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">Benefits:</h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            {/* Salary Range */}
            {job.salaryRange && (
              <section className="mb-10">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
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
              <p className="text-[15px] leading-relaxed text-muted-foreground">
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
          <div className="mt-12">
            <Button
              className="h-10 rounded-md bg-black px-6 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
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
