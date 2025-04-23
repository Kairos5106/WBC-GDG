"use client"

import FilterSection from './FilterSection'
import ResourceCards from './ResourceCards'
import { Sheet, SheetTrigger, SheetTitle, SheetContent } from "@/components/ui/sheet"
import { Button } from './ui/button'
import { Filter } from "lucide-react"
import { useState, Suspense } from 'react'

const ResourceList = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-4 items-start">
        {/* Mobile filter button */}
        <div className="md:hidden flex justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[60%] pt-8">
              <SheetTitle className='hidden'>Filter Options</SheetTitle>
              <Suspense fallback={<div>Loading filters...</div>}>
                <FilterSection />
              </Suspense>    
            </SheetContent>
          </Sheet>
        </div>

        <div className='hidden md:block shrink-0'>
            <Suspense fallback={<div>Loading filters...</div>}>
              <FilterSection />
            </Suspense>   
        </div>
        <div className='flex-1'>
            <ResourceCards />
        </div>
        
    </div>
  )
}

export default ResourceList
