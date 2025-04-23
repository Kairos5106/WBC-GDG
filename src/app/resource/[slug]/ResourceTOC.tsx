"use client"

interface ResourceTOCProps {
  activeSection?: string
  onSectionClick?: (section: string) => void
}

export default function ResourceTOC({ activeSection, onSectionClick }: ResourceTOCProps) {
  const handleClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section)
    }
  }

  return (
    <div className={`
      bg-white p-6 w-full shadow-lg
      tablet:ml-4
    `}>
      <nav className="space-y-4">
        <div
          className={`font-medium ${activeSection === "overview" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("overview")}
        >
          Overview
        </div>

        <div
          className={`font-medium ${activeSection === "considerations" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("considerations")}
        >
          Before You Teach: Considerations
        </div>

        <div className="space-y-2">
          <div
            className={`font-medium ${activeSection === "curriculum" ? "text-black" : "text-gray-800"} cursor-pointer`}
            onClick={() => handleClick("curriculum")}
          >
            Curriculum Connections
          </div>
          <div className="pl-4 space-y-2">
            <div className="text-gray-700 cursor-pointer hover:text-black">British Columbia</div>
            <div className="text-gray-700 cursor-pointer hover:text-black">Manitoba</div>
            <div className="text-gray-700 cursor-pointer hover:text-black">New Brunswick</div>
            <div className="text-gray-700 cursor-pointer hover:text-black">Nova Scotia</div>
            <div className="text-gray-700 cursor-pointer hover:text-black">Ontario</div>
            <div className="text-gray-700 cursor-pointer hover:text-black">Yukon</div>
          </div>
        </div>

        <div
          className={`font-medium ${activeSection === "lessons" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("lessons")}
        >
          Lessons in this Unit
        </div>

        <div
          className={`font-medium ${activeSection === "assessments" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("assessments")}
        >
          Assessments
        </div>

        <div
          className={`font-medium ${activeSection === "appendix" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("appendix")}
        >
          Appendix
        </div>

        <div
          className={`font-medium ${activeSection === "resources" ? "text-black" : "text-gray-800"} cursor-pointer`}
          onClick={() => handleClick("resources")}
        >
          Additional Resources
        </div>
      </nav>
    </div>
  )
}
