import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  bio: string
  skills: string[]
  image?: string
  github?: string
  linkedin?: string
  email?: string
}

// Placeholder team data - replace with actual data later
const teamMembers: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Lead Developer",
    bio: "Passionate game developer with expertise in Unreal Engine and C++.",
    skills: ["Unreal Engine", "C++", "Blueprint", "Game Design"],
  },
  {
    name: "Team Member 2",
    role: "Game Designer",
    bio: "Creative game designer focused on player experience and mechanics.",
    skills: ["Game Design", "Level Design", "Prototyping"],
  },
  {
    name: "Team Member 3",
    role: "Technical Artist",
    bio: "Bridging the gap between art and programming.",
    skills: ["Shaders", "VFX", "Optimization", "Unity"],
  },
]

export const metadata = {
  title: "Our Team | RedFox Studios",
  description: "Meet the talented team behind RedFox Studios. Game developers, designers, and engineers passionate about creating innovative gaming experiences.",
}

export default function TeamPage() {
  return (
    <div className="container px-6 py-12 sm:py-16 lg:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Meet Our Team
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
          We're a passionate team of developers, designers, and engineers dedicated to
          creating exceptional gaming experiences.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <div className="aspect-square w-full overflow-hidden bg-muted">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground/30">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>

            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{member.bio}</p>

              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
