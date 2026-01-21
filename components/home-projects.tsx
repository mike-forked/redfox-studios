"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard, type Project } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"

interface HomeProjectsProps {
  projects: Project[]
  showAll?: boolean
}

export function HomeProjects({ projects, showAll = false }: HomeProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const displayProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
