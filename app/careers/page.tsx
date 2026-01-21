import { Metadata } from "next"
import { CareerHero } from "@/components/careers/career-hero"
import { CareerListings } from "@/components/careers/career-listings"
import { careersData } from "@/content/careers"

export const metadata: Metadata = {
  title: "Careers | RedFox Studios",
  description: "Join our team and help us create the next generation of gaming experiences.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <CareerHero />
      <CareerListings jobs={careersData} />
    </div>
  )
}
