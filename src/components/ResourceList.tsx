import FilterSection from './FilterSection'
import ResourceCards from './ResourceCards'

const ResourceList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className='shrink-0'>
            <FilterSection />
        </div>
        <ResourceCards />
    </div>
  )
}

export default ResourceList
