import React, { Suspense } from 'react'
import { Section, Container } from '@/components/ds'
import ResourceHeader from '@/components/ResourceHeader'
import ResourceList from '@/components/ResourceList'

function ResourcesPage() {
  return (
    <Section className="bg-brand-background">
      <Container className="h-fit pt-[4rem]">
        <div className="px-4 pb-8 bg-gray-100 shadow-md grid grid-cols-1 border-b-2 border-brand-primary
          mobile-lg:px-8 mobile-lg:pt-12 tablet:-mx-2 laptop:mt-18 laptop:mx-4">
          <div className="flex flex-col justify-between h-full">
            <ResourceHeader />
          </div>
        </div>

        <div className='px-4 pb-8 mt-5'>
          <Suspense fallback={<div>Loading stuff...</div>}>
            <ResourceList />
          </Suspense>    
        </div>
        

      </Container>
    </Section>
  )
}

export default ResourcesPage
