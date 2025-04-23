import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="pt-8 px-4 relative min-h-[180px]">
      <nav className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <span className="text-gray-500">&gt;</span>
        <span className="bg-gray-800 text-white px-3 py-1">Resources</span>
      </nav>

      <h1 className="text-5xl font-bold text-gray-800 leading-tight">Resources</h1>

    </div>
  )
}

export default HeaderSection
