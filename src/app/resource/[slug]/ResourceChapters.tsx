"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

interface Chapter {
  id: string
  title: string
  badge?: string
  content?: React.ReactNode
}

interface ResourceChaptersProps {
  chapters: Chapter[]
}

export default function ResourceChapters({ chapters }: ResourceChaptersProps) {
  const [openChapter, setOpenChapter] = useState<string | null>(null)

  const toggleChapter = (id: string) => {
    setOpenChapter(openChapter === id ? null : id)
  }

  return (
    <div className="w-full bg-gray-100 shadow-lg">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="border-b border-gray-300">
          <div
            className="flex items-center justify-between py-6 px-4 cursor-pointer"
            onClick={() => toggleChapter(chapter.id)}
          >
            <div className="flex items-center">
              <h2 className="text-3xl font-medium text-gray-900">{chapter.title}</h2>
              {chapter.badge && <span className="ml-4 bg-gray-800 text-white text-xs px-2 py-1">{chapter.badge}</span>}
            </div>
            <Plus
              className={`h-8 w-8 text-gray-900 transition-transform ${openChapter === chapter.id ? "rotate-45" : ""}`}
            />
          </div>

          {openChapter === chapter.id && (
            <div className="px-4 pb-6">
              {chapter.content ? (
                chapter.content
              ) : (
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    This is a generic content container for the {chapter.title} section. Replace this with actual
                    content for each chapter.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
