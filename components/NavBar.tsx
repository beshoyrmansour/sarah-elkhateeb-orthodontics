"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link";
import ActiveLink from './ActiveLink';
// import { useRouter } from "next/router";


const NavBar = () => {
  const [hideMoblieList, setHideMoblieList] = React.useState(true)
  
  return (<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex  bg-teal-600">

    <nav className="w-full  fixed left-0 top-0 z-50 bg-teal-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-teal-600">
        <Link href="/" className="flex items-center">
          <Image src='/logo_colors_h.svg' width={350} height={250} alt="Dr.Sarah Elkhateeb Orthodontics logo" className="h-12  mr-3  hidden lg:block" />
          <Image src='/logo_colors_h.svg' width={250} height={50} alt="Dr.Sarah Elkhateeb Orthodontics logo" className="w-32 h-6 block lg:hidden" />
        </Link>
        <button onClick={() => setHideMoblieList(prev => !prev)} data-collapse-toggle="navbar-default" type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-teal-50 rounded-lg lg:hidden hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

        </button>
        <div className={`mt-2 bg-teal-600 ${hideMoblieList && 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 bg-teal-600 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
            <li onClick={() => setHideMoblieList(true)}>
              <ActiveLink base="/" as='/' href="#Home" text='Home' />
              {/* <Link href="#Home" className={`${isCurrent ? activeClasses : ''}  block py-2 pl-3 pr-4  lg:p-0`} aria-current="page">Home</Link> */}
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <ActiveLink base="services" href="#Services" text='Services' />
              {/* <Link href="#Services" className={`${isCurrent ? activeClasses : inactiveClasses}  block py-2 pl-3 pr-4 rounded lg:p-0 `}>Services</Link> */}
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <ActiveLink base="Tips" href="#Tips" text='Tips & Tricks' />
              {/* <Link href="#Tips" className={`${isCurrent ? activeClasses : inactiveClasses}  block py-2 pl-3 pr-4 rounded lg:p-0 `}>Tips & Tricks</Link> */}
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <ActiveLink base="Testimonials" href="#Testimonials" text='Happy patients' />
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <ActiveLink base="AboutUs" href="#AboutUs" text='About Us' />
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <Link href="tel:01004669848" className={` block py-2 pl-3 pr-4 text-teal-200 text font-bold rounded lg:p-0 
                `}>Book Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
  )
}

export default NavBar
