"use client"

import { useState } from "react"
import { Search, Landmark, Stethoscope, CalendarSearch } from "lucide-react"

export default function FilterSection() {

    const [filters, setFilters] = useState({
        govServices: false,
        healthcare: false,
        events: false,
      })
    
      const clearAll = () => {
        setFilters({
          govServices: false,
          healthcare: false,
          events: false,
        })
      }
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target
        setFilters(prev => ({
          ...prev,
          [id]: checked,
        }))
      }

  return (
    
    <div className="w-full md:w-64 bg-white p-5 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
        <button className="text-gray-700 border border-gray-300 px-2.5 py-1.5 text-sm hover:bg-gray-50"
            onClick={clearAll}>
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
          <h3 className="text-lg font-bold text-gray-800">Categories</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="govServices" className="w-4 h-4 mt-2" checked={filters.govServices} onChange={handleChange} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="govServices" className="text-sm text-gray-700">
                  Government Services
                </label>
                <div className="p-1.5 rounded mt-2" style={{backgroundColor: "var(--color-service-600)"}}>
                  <Landmark className="h-3 w-3 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Direct links to essential government programs.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="healthcare" className="w-4 h-4 mt-2" checked={filters.healthcare} onChange={handleChange} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="healthcare" className="text-sm text-gray-700">
                  Healthcare
                </label>
                <div className="p-1.5 rounded mt-2" style={{backgroundColor: "var(--color-healthcare-600)"}}>
                  <Stethoscope className="h-3 w-3 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Detailed guides on healtcare services.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="events" className="w-4 h-4 mt-2" checked={filters.events} onChange={handleChange}/>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor="events" className="text-sm text-gray-700">
                  Community Events
                </label>
                <div className="p-1.5 rounded mt-2" style={{backgroundColor: "var(--color-event-600)"}}>
                  <CalendarSearch className="h-3 w-3 text-white" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Engaging activities for local communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
