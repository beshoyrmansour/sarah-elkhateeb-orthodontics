import React from 'react'
import Image from "next/image"

type Props = {}

const NavBar = (props: Props) => {
  return (<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Get started by editing&nbsp;
      <code className="font-mono font-bold">app/page.tsx</code>
    </p> */}


    {/* <div
      className=" text-center w-full flex justify-center mt-24 mb-16">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert"
        src="/logo_colors.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div> */}

    <nav className="w-full  fixed left-0 top-0 z-50 bg-[#d6dbdc]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image src='/logo_colors_h.svg' width={350} height={250} alt="logo" className="h-12  mr-3  hidden md:block" />

          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap 
            
            ">Flowbite</span> */}
          <Image src='/logo_colors_h.svg' width={250} height={50} alt="logo" className="w-32 h-6 block md:hidden" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a href="#Home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-500 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#Services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Services</a>
            </li>
            <li>
              <a href="#Tips" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Tips & Tricks</a>
            </li>
            <li>
              <a href="#Testimonials" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ">Testimonials</a>
            </li>
            <li>
              <a href="#Contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="light:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    </div> */}
  </div>
  )
}

export default NavBar