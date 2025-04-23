"use client"

import Image from "next/image"
import Link from "next/link"
import { Landmark, Stethoscope, CalendarSearch } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { resources, ResourceCardProps } from "@/data/resources"

const bgColorMap: Record<string, string> = {
    "Government Service": "var(--color-service-300)",
    "Healthcare": "var(--color-healthcare-300)",
    "Event": "var(--color-event-300)",
}
  
const labelColorMap: Record<string, string> = {
    "Government Service": "var(--color-service-600)",
    "Healthcare": "var(--color-healthcare-600)",
    "Event": "var(--color-event-600)",
}

export default function ResourceCards() {

    const searchParams = useSearchParams()
    const categoryFilter = searchParams.get("category")?.split(",") || []
    const subjectFilter = searchParams.get("subjects")?.split(",") || []

    const filteredResources = resources.filter((r) => {
        const matchesCategory = categoryFilter.length === 0 || categoryFilter.includes(r.type)
        const matchesSubject = subjectFilter.length === 0 || r.subjects?.some((s) => subjectFilter.includes(s))
        return matchesCategory && matchesSubject
    })


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {filteredResources.map((resource, index) => (
        <Link
          href={`/resource/${resource.slug}`}
          key={index}
        >
          <ResourceCard  {...resource} />
        </Link>
      ))}
    </div>
  )
}

function ResourceCard({
  title,
  type,
  subjects,
  description,
}: ResourceCardProps) {

const imageColor = bgColorMap[type]
const labelColor = labelColorMap[type]

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="w-2/5">
          <div className="relative h-full">
            <div className={`h-full flex items-center justify-center`} style={{backgroundColor: `${imageColor}`}}>
              {/* {updated && <div className="absolute top-0 left-0 bg-gray-700 text-white text-xs px-2 py-1">Updated</div>} */}
              <div className="relative w-32 h-32">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt={title}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 p-4">
          <div className="flex justify-between items-start mb-2">
            <div
              className={`text-white px-2 py-1 text-xs flex items-center rounded`} style={{backgroundColor: `${labelColor}`}}
            >
              {type === "Government Service" ? (
                <Landmark className="h-4 w-4 mr-1" />
              ) : type === "Healthcare" ? (
                <Stethoscope className="h-4 w-4 mr-1" />
              ) : (
                <CalendarSearch className="h-4 w-4 mr-1" />
              )}
              {type}
            </div>
            {/* <div className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{duration}</div> */}
          </div>
          <h3 className={`${title.length > 40 ? "text-lg" : "text-xl"} font-bold mb-2`}>{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {/* <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{grades}</span> */}
            {subjects.map((subject, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                {subject}
              </span>
            ))}
            {/* {lessons && <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{lessons}</span>} */}
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
