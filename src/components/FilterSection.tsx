"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Landmark, Stethoscope, CalendarSearch } from "lucide-react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { resources } from "@/data/resources"

export default function FilterSection() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [showCategories, setShowCategories] = useState(true)
    const [showSubjects, setShowSubjects] = useState(false)

    const [subjectFilters, setSubjectFilters] = useState<string[]>([])

    const handleSubjectChange = (subject: string) => {
        let updatedSubjects = [...subjectFilters]
        if (updatedSubjects.includes(subject)) {
            updatedSubjects = updatedSubjects.filter((s) => s !== subject)
        } else {
            updatedSubjects.push(subject)
        }
        setSubjectFilters(updatedSubjects)
        updateSubjectQuery(updatedSubjects)
    }

    const updateSubjectQuery = (subjects: string[]) => {
        const params = new URLSearchParams(searchParams)
        if (subjects.length > 0) {
            params.set("subjects", subjects.join(","))
        } else {
            params.delete("subjects")
        }
        router.push(`?${params.toString()}`)
    }

    const allSubjects = Array.from(
        new Set(resources.flatMap((r) => r.subjects || []))
    ).sort()
      
      

    const [filters, setFilters] = useState({
        govServices: false,
        healthcare: false,
        events: false,
    })

    // Sync state from URL on mount
    useEffect(() => {
        const categories = searchParams.get("category")?.split(",") || []
        setFilters({
            govServices: categories.includes("Government Service"),
            healthcare: categories.includes("Healthcare"),
            events: categories.includes("Event"),
        })

        const subjectFromURL = searchParams.get("subjects")?.split(",") || []
        setSubjectFilters(subjectFromURL)
    }, [searchParams])

    const updateQuery = (updatedFilters: typeof filters) => {
        const selected: string[] = []
        if (updatedFilters.govServices) selected.push("Government Service")
        if (updatedFilters.healthcare) selected.push("Healthcare")
        if (updatedFilters.events) selected.push("Event")

        const params = new URLSearchParams(searchParams)
        if (selected.length > 0) {
        params.set("category", selected.join(","))
        } else {
        params.delete("category")
        }
        router.push(`?${params.toString()}`)
    }

    const clearAll = () => {
        const reset = {
        govServices: false,
        healthcare: false,
        events: false,
        }
        setFilters(reset)
        router.push("/resources") // go back to full list
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target
        const updated = {
        ...filters,
        [id]: checked,
        }
        setFilters(updated)
        updateQuery(updated)
    }

return (
    <div className="w-full md:w-64 bg-white p-5 border border-white">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
            <button
                onClick={clearAll}
                className="text-gray-700 border border-gray-300 px-2.5 py-1.5 text-sm hover:bg-gray-50"
            >
                Clear all
            </button>
        </div>

        <p className="text-gray-700 text-sm mb-5">Showing 15 of 15</p>

        <div className="relative mb-5">
            <div className="bg-gray-100 flex items-center px-3 py-2.5 rounded">
                <Search className="h-4 w-4 text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none w-full text-gray-500 placeholder-gray-500 text-sm"
                />
            </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
            <div 
                className="flex justify-between items-center mb-3 cursor-pointer"
                onClick={() => setShowCategories(!showCategories)}
            >
                <h3 className="text-lg font-bold text-gray-800">Categories</h3>
                {showCategories ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                ) : (
                    <ChevronUp className="w-4 h-4 text-gray-600" />
                )}
            </div>

            {showCategories && (
                <div className="space-y-4">
                    {/* Government Services */}
                    <div className="flex items-start gap-2.5">
                        <input
                            type="checkbox"
                            id="govServices"
                            className="w-4 h-4 mt-2"
                            checked={filters.govServices}
                            onChange={handleChange}
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="govServices" className="text-sm text-gray-700">
                                    Government Services
                                </label>
                                <div
                                    className="p-1.5 rounded mt-2"
                                    style={{ backgroundColor: "var(--color-service-600)" }}
                                >
                                    <Landmark className="h-3 w-3 text-white" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">Direct links to essential government programs.</p>
                        </div>
                    </div>

                    {/* Healthcare */}
                    <div className="flex items-start gap-2.5">
                        <input
                            type="checkbox"
                            id="healthcare"
                            className="w-4 h-4 mt-2"
                            checked={filters.healthcare}
                            onChange={handleChange}
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="healthcare" className="text-sm text-gray-700">
                                    Healthcare
                                </label>
                                <div
                                    className="p-1.5 rounded mt-2"
                                    style={{ backgroundColor: "var(--color-healthcare-600)" }}
                                >
                                    <Stethoscope className="h-3 w-3 text-white" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">Detailed guides on healthcare services.</p>
                        </div>
                    </div>

                    {/* Events */}
                    <div className="flex items-start gap-2.5">
                        <input
                            type="checkbox"
                            id="events"
                            className="w-4 h-4 mt-2"
                            checked={filters.events}
                            onChange={handleChange}
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="events" className="text-sm text-gray-700">
                                    Community Events
                                </label>
                                <div   
                                    className="p-1.5 rounded mt-2"
                                    style={{ backgroundColor: "var(--color-event-600)" }}
                                >
                                    <CalendarSearch className="h-3 w-3 text-white" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">Engaging activities for local communities.</p>
                        </div>
                    </div>
                </div>
        )}
        
        </div> 

        <div className="border-t border-gray-200 pt-4 mt-4">
            <div
                className="flex justify-between items-center mb-3 cursor-pointer"
                onClick={() => setShowSubjects((prev) => !prev)}
            >
                <h3 className="text-lg font-bold text-gray-800">Subjects</h3>
                {showSubjects ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
                ) : (
                <ChevronUp className="w-4 h-4 text-gray-600" />
                )}
            </div>

            {showSubjects && (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scroll">
                {allSubjects.map((subject) => (
                    <label key={subject} className="flex items-center text-sm text-gray-700">
                    <input
                        type="checkbox"
                        checked={subjectFilters.includes(subject)}
                        onChange={() => handleSubjectChange(subject)}
                        className="mr-2.5 w-4 h-4"
                    />
                    {subject}
                    </label>
                ))}
                </div>
            )}
        </div>
    </div>
  )
}
