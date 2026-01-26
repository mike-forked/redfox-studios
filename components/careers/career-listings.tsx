"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { Job } from "@/content/careers"

interface CareerListingsProps {
  jobs: Job[]
}

export function CareerListings({ jobs }: CareerListingsProps) {
  const [locationOpen, setLocationOpen] = useState(false)
  const [departmentOpen, setDepartmentOpen] = useState(true)
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)

  // Extract unique locations and departments
  const locations = Array.from(new Set(jobs.flatMap((job) => job.locations)))
  const departments = ["All departments", ...Array.from(new Set(jobs.map((job) => job.department)))]

  // Filter jobs based on selection
  const filteredJobs = selectedDepartment && selectedDepartment !== "All departments"
    ? jobs.filter((job) => job.department === selectedDepartment)
    : jobs

  // Group jobs by department
  const groupedJobs = filteredJobs.reduce(
    (acc, job) => {
      if (!acc[job.department]) {
        acc[job.department] = []
      }
      acc[job.department].push(job)
      return acc
    },
    {} as Record<string, Job[]>
  )

  // Format location for display (Vercel style)
  const formatLocation = (job: Job) => {
    const hasRemote = job.locations.includes("Remote")
    if (hasRemote) {
      return "Remote - United States"
    }
    // For hybrid/on-site, show the locations
    const cityLocations = job.locations.filter(loc => loc !== "Hybrid")
    if (cityLocations.length > 0) {
      return `${job.type} - ${cityLocations.join(", ")}`
    }
    return job.type
  }

  // Get the title for the positions section
  const getSectionTitle = () => {
    if (selectedDepartment && selectedDepartment !== "All departments") {
      // Remove "Positions" if already in name, otherwise add it
      if (selectedDepartment.toLowerCase().includes("position")) {
        return selectedDepartment
      }
      return `${selectedDepartment} Positions`
    }
    return "Open Positions"
  }

  return (
    <section id="open-positions" className="border-t bg-background">
      <div className="container max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            {/* Location Filter */}
            <div>
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium"
              >
                Location
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Department Filter */}
            <div>
              <button
                onClick={() => setDepartmentOpen(!departmentOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium"
              >
                Department
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                    departmentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {departmentOpen && (
                <div className="mt-3 space-y-1">
                  {departments.map((department) => (
                    <button
                      key={department}
                      onClick={() => setSelectedDepartment(
                        department === "All departments" ? null : department
                      )}
                      className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        (department === "All departments" && !selectedDepartment) ||
                        department === selectedDepartment
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {department}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div>
            {/* Section Title */}
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              {getSectionTitle()}
            </h2>

            {/* Jobs List */}
            <div className="space-y-0">
              {Object.entries(groupedJobs).map(([department, deptJobs]) => (
                <div key={department}>
                  {/* Only show department heading if showing all */}
                  {!selectedDepartment && (
                    <h3 className="mb-4 mt-8 text-base font-medium first:mt-0">
                      {department}
                    </h3>
                  )}
                  {deptJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between border-b border-border py-6"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="text-base font-medium">
                          {job.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {formatLocation(job)}
                        </p>
                      </div>
                      <Link
                        href={`/careers/${job.slug}`}
                        className="shrink-0 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                      >
                        Read more
                      </Link>
                    </div>
                  ))}
                </div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-sm text-muted-foreground">
                    No positions found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
