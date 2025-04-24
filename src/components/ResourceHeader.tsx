import ComesInGoesOutUnderline from '@/fancy/components/text/underline-comes-in-goes-out'
import Link from 'next/link'

const HeaderSection = () => {
  return (
    <div className="pt-8 px-4 relative min-h-[180px]">
      <nav className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          <ComesInGoesOutUnderline label="Home" />
        </Link>
        <span className="text-gray-500">&gt;</span>
        <span className="bg-brand-primary text-white px-3 py-1">Resources</span>
      </nav>

      <h1 className="text-5xl font-bold text-rich-black leading-tight">Resources</h1>

    </div>
  )
}

export default HeaderSection
