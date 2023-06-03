import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {
  href: string,
  as?: string,
  text: string,
  base: string,
}

const ActiveLink = ({ href, as, text, base, ...props }: Props) => {
  const pathname = usePathname()

  const activeClasses = 'text-white bg-teal-600 rounded lg:bg-transparent lg:text-teal-500';
  const inactiveClasses = 'text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600';

  const paths = pathname.split('/')

  return (
    <Link href={href} as={as} className={`${pathname === '/' && pathname === base ? activeClasses : (pathname.includes(base) && paths[1] === base) ? activeClasses : inactiveClasses}  block py-2 pl-3 pr-4 rounded lg:p-0`}>
      {text}
    </Link>
  )
}
export default ActiveLink