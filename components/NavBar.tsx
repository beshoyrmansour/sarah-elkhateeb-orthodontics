"use client"
import React from 'react'
import Image from "next/image"

type Props = {}

const NavBar = (props: Props) => {
  const [hideMoblieList, setHideMoblieList] = React.useState(true)
  return (<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

    <nav className="w-full  fixed left-0 top-0 z-50 bg-[#d6dbdc]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image src='/logo_colors_h.svg' width={350} height={250} alt="Dr.Sarah Elkhateeb Orthodontics logo" className="h-12  mr-3  hidden lg:block" />
          <Image src='/logo_colors_h.svg' width={250} height={50} alt="Dr.Sarah Elkhateeb Orthodontics logo" className="w-32 h-6 block lg:hidden" />
        </a>
        <button onClick={() => setHideMoblieList(prev => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

        </button>
        <div className={` ${hideMoblieList && 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
            <li onClick={() => setHideMoblieList(true)}>
              <a href="#Home" className="block py-2 pl-3 pr-4 text-white bg-teal-600 rounded lg:bg-transparent lg:text-teal-500 lg:p-0" aria-current="page">Home</a>
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <a href="#Services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">Services</a>
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <a href="#Tips" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">Tips & Tricks</a>
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <a href="#Testimonials" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 
                ">Testimonials</a>
            </li>
            <li onClick={() => setHideMoblieList(true)}>
              <a href="tel:01004669848" className="block py-2 pl-3 pr-4 text-teal-600 text font-bold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 
                ">Book Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
  )
}

export default NavBar