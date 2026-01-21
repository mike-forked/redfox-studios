"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Project } from "./project-card"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        {project.image && (
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {project.longDescription && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        <Separator />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
