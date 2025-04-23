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

// Maximum number of characters for the description
const MAX_DESCRIPTION_LENGTH = 100;

// Function to truncate the description if it exceeds the maximum length
const truncateDescription = (description: string): string => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
        return description.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
    }
    return description;
};

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
                    title={`Learn more about ${resource.title}`}
                    className="h-[235px]"  // Set a fixed height for all cards
                >
                    <ResourceCard {...resource} />
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

    const imageFile = type.toLowerCase().replace(/\s+/g, "-")
    const truncatedDescription = truncateDescription(description);


    return (
        <div className="bg-white border border-gray-200 overflow-hidden h-full flex">

            {/* Image Section */}
            <div className="w-2/5">
                <div className={`relative h-full w-full `} style={{ backgroundColor: `${imageColor}` }}>
                    <Image
                        src={`/resource-images/${imageFile}.webp`}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="100%"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-3/5 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div
                        className={`text-white px-2 py-1 text-xs flex items-center rounded`} style={{ backgroundColor: `${labelColor}` }}
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
                </div>
                <h3 className={`${title.length > 40 ? "text-lg" : "text-xl"} font-bold mb-2`}>{title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                    {subjects.map((subject, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                            {subject}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">{truncatedDescription}</p>
            </div>

        </div>
    )
}