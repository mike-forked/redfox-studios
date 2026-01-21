"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Job } from "@/content/careers"

interface CareerListingsProps {
  jobs: Job[]
}

export function CareerListings({ jobs }: CareerListingsProps) {
  const [locationOpen, setLocationOpen] = useState(false)
  const [departmentOpen, setDepartmentOpen] = useState(false)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])

  // Extract unique locations and departments
  const locations = Array.from(new Set(jobs.flatMap((job) => job.locations)))
  const departments = Array.from(new Set(jobs.map((job) => job.department)))

  // Filter jobs based on selections
  const filteredJobs = jobs.filter((job) => {
    const locationMatch =
      selectedLocations.length === 0 ||
      job.locations.some((loc) => selectedLocations.includes(loc))
    const departmentMatch =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(job.department)
    return locationMatch && departmentMatch
  })

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

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    )
  }

  const toggleDepartment = (department: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    )
  }

  return (
    <section id="open-positions" className="bg-background">
      <div className="container px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[240px_1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            {/* Location Filter */}
            <div className="border-b pb-6">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex w-full items-center justify-between text-sm font-medium"
              >
                Location
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {locationOpen && (
                <div className="mt-4 space-y-3">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                        className="h-4 w-4 rounded border-muted-foreground/30"
                      />
                      {location}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Department Filter */}
            <div className="border-b pb-6">
              <button
                onClick={() => setDepartmentOpen(!departmentOpen)}
                className="flex w-full items-center justify-between text-sm font-medium"
              >
                Department
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    departmentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {departmentOpen && (
                <div className="mt-4 space-y-3">
                  {departments.map((department) => (
                    <label
                      key={department}
                      className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDepartments.includes(department)}
                        onChange={() => toggleDepartment(department)}
                        className="h-4 w-4 rounded border-muted-foreground/30"
                      />
                      {department}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div className="space-y-16">
            {Object.entries(groupedJobs).map(([department, deptJobs]) => (
              <div key={department}>
                <h2 className="mb-8 text-2xl font-bold">{department}</h2>
                <div className="space-y-6">
                  {deptJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-start justify-between border-b pb-6 last:border-0"
                    >
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {job.type} · {job.locations.join(", ")}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        className="ml-4 text-sm font-medium"
                        asChild
                      >
                        <Link href={`/careers/${job.slug}`}>Read more</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  No positions found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
