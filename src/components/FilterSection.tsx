import { ChevronUp, Search } from "lucide-react"

export default function FilterSection() {
  return (
    <div className="w-full md:w-64 bg-white p-5 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
        <button className="text-gray-700 border border-gray-300 px-2.5 py-1.5 text-sm hover:bg-gray-50">
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
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">Type</h3>
          <ChevronUp className="h-4 w-4" />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="unit-plan" className="w-4 h-4 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="unit-plan" className="text-sm text-gray-700">
                  Unit Plan
                </label>
                <div className=" p-1.5 rounded" style={{backgroundColor: "var(--color-unitplan-600)"}}>
                  <UnitPlanIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Guided sets of lessons & activities for holistic learning.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="lesson" className="w-4 h-4 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="lesson" className="text-sm text-gray-700">
                  Lesson
                </label>
                <div className="p-1.5 rounded" style={{backgroundColor: "var(--color-lesson-600)"}}>
                  <LessonIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Helpful individual lessons for specific topical education.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="activity" className="w-4 h-4 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="activity" className="text-sm text-gray-700">
                  Activity
                </label>
                <div className="p-1.5 rounded" style={{backgroundColor: "var(--color-activity-600)"}}>
                  <ActivityIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Engaging activities for classrooms of any size.</p>
            </div>
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
