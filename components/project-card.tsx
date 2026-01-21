import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  longDescription?: string
  features?: string[]
  technologies?: string[]
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mb-1.5 text-3xl font-bold text-muted-foreground/20">
                {project.title.charAt(0)}
              </div>
              <p className="text-xs text-muted-foreground">No preview available</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1.5 text-base font-semibold leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </button>
  )
}
