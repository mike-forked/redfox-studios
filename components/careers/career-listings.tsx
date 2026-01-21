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
      <div className="container max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[200px_1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-8">
            {/* Location Filter */}
            <div>
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="mb-4 flex w-full items-center justify-between text-sm font-medium"
              >
                Location
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {locationOpen && (
                <div className="space-y-2.5">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="flex cursor-pointer items-start gap-2.5 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                        className="mt-0.5 h-3.5 w-3.5 rounded-sm border-gray-300"
                      />
                      <span className="text-muted-foreground">{location}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Department Filter */}
            <div>
              <button
                onClick={() => setDepartmentOpen(!departmentOpen)}
                className="mb-4 flex w-full items-center justify-between text-sm font-medium"
              >
                Department
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    departmentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {departmentOpen && (
                <div className="space-y-2.5">
                  {departments.map((department) => (
                    <label
                      key={department}
                      className="flex cursor-pointer items-start gap-2.5 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDepartments.includes(department)}
                        onChange={() => toggleDepartment(department)}
                        className="mt-0.5 h-3.5 w-3.5 rounded-sm border-gray-300"
                      />
                      <span className="text-muted-foreground">{department}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div className="space-y-12">
            {Object.entries(groupedJobs).map(([department, deptJobs]) => (
              <div key={department}>
                <h2 className="mb-6 text-xl font-semibold">{department}</h2>
                <div className="space-y-0">
                  {deptJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-start justify-between border-b border-border py-5"
                    >
                      <div className="flex-1">
                        <h3 className="mb-1.5 text-base font-medium">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {job.type} · {job.locations.join(", ")}
                        </p>
                      </div>
                      <Link
                        href={`/careers/${job.slug}`}
                        className="ml-6 whitespace-nowrap text-sm text-muted-foreground hover:text-foreground"
                      >
                        Read more
                      </Link>
                    </div>
                  ))}
                </div>
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
    </section>
  )
}
