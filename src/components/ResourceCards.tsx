import Image from "next/image"
import { FileText, Video } from "lucide-react"

type ResourceCardProps = {
  title: string
  type: "Unit Plan" | "Lesson" | "Activity"
  duration: string
  grades: string
  subjects: string[]
  lessons?: string
  description: string
  imageColor: string
  updated?: boolean
}

const bgColorMap: Record<string, string> = {
    "Unit Plan": "bg-brand-primary-100",
    "Lesson": "bg-brand-secondary-100",
    "Activity": "bg-brand-primary-200",
}
  
const labelColorMap: Record<string, string> = {
    "Unit Plan": "bg-brand-primary-700",
    "Lesson": "bg-brand-secondary-600",
    "Activity": "bg-brand-primary-600",
}

export default function ResourceCards() {
  const resources: ResourceCardProps[] = [
    {
      title: "Be There for Others Unit Plan",
      type: "Unit Plan",
      duration: "1-2 Weeks",
      grades: "Grade 9-10",
      subjects: ["Healthy Living"],
      lessons: "6 Lessons",
      description: "In this 6-lesson unit, students will learn to recognize signs of mental health challenges...",
      imageColor: "",
    },
    {
      title: "Pre-Recorded Jack Talk: Classroom Edition",
      type: "Lesson",
      duration: "60-75 min",
      grades: "Grade 9-10",
      subjects: ["Mental Health"],
      description: "Request a digital mental health learning experience for your students...",
      imageColor: "",
    },
    {
      title: "Pre-Recorded Jack Talk: Post-Talk Discussion and Activities",
      type: "Lesson",
      duration: "60-75 min",
      grades: "Grade 9-10",
      subjects: ["Mental Health"],
      description: "As a follow-up to the pre-recorded Jack Talk, students have the...",
      imageColor: "",
    },
    {
      title: "Introducing How to Be There for Ourselves: A Jack Talk Follow-Up",
      type: "Lesson",
      duration: "60-75 min",
      grades: "Grade 10",
      subjects: ["Mental Health"],
      description: "In this lesson, your students will revisit key terms and concepts from...",
      imageColor: "",
      updated: true,
    },
  ]


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  )
}

function ResourceCard({
  title,
  type,
  duration,
  grades,
  subjects,
  lessons,
  description,
  updated,
}: ResourceCardProps) {

const imageColor = bgColorMap[type]
const labelColor = labelColorMap[type]

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="w-2/5">
          <div className="relative h-full">
            <div className={`${imageColor} h-full flex items-center justify-center`}>
              {updated && <div className="absolute top-0 left-0 bg-gray-700 text-white text-xs px-2 py-1">Updated</div>}
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
              className={`${labelColor} text-white px-2 py-1 text-xs flex items-center rounded`}
            >
              {type === "Unit Plan" ? (
                <UnitPlanIcon className="h-4 w-4 mr-1" />
              ) : type === "Lesson" ? (
                <LessonIcon className="h-4 w-4 mr-1" />
              ) : (
                <ActivityIcon className="h-4 w-4 mr-1" />
              )}
              {type}
            </div>
            <div className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{duration}</div>
          </div>
          <h3 className={`${title.length > 40 ? "text-lg" : "text-xl"} font-bold mb-2`}>{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{grades}</span>
            {subjects.map((subject, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                {subject}
              </span>
            ))}
            {lessons && <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{lessons}</span>}
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex gap-2">
            <Video className="h-5 w-5 text-gray-500" />
            <FileText className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

function UnitPlanIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  )
}

function LessonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h7v2H7z" />
    </svg>
  )
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  )
}
