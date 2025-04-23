import Link from 'next/link'
import Image from "next/image";
import React from 'react'

function NavBarLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 pl-1.5">
      <Image
        src="/logo-outline-white.png"
        width={32}
        height={32}
        alt="Company logo"
        className={`
          rotate-270 
          tablet:w-[38px]
          laptop:w-[56px]
      `}/>
      <p className={`
        font-semibold pl-2 text-md
        tablet:text-2xl
        laptop:text-3xl laptop:pb-1 laptop:pl-4 
      `}>
        <span className={`text-gray-50`}>Helping</span>
        <span className={`text-brand-primary-300`}>Hand</span>
      </p>
    </Link>
  );
}

export default NavBarLogo