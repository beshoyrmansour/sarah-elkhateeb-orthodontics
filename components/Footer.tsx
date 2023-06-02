import React from 'react'
import Image from "next/image"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center text-center pb-16'>
      <span className="flex justify-start items-center flex-col md:flex-row">
        <a href="tel:01004669848" className="
              inline-block align-middle
              ml-[42px] text-md bg-teal-600 text-white font-bold w-auto rounded-[50px] text-center px-3 py-1 ">
          🤙 01004669848
        </a>
        <a target="_blank"
          href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
          className="ml-2 flex justify-center items-center text-teal-600 font-bold text-xl">
          <Image src="/instagram_logo.svg" className="img-fluid"
            alt="Dr.Sarah Elkhateeb instagram page"
            width={45}
            height={45}
            priority
          /> / sarahelkhateeb.orthodontics
        </a>

      </span>
      <div className="mt-2 text-teal-[100]">
        Copyright © 2023 Dr.Sarah Elkhateeb - All rights reserved <br /> Designed By: <a target='_blank' href='http://digitalizers.co/'>Digitalizers agency</a>
      </div>
    </div>
  )
}

export default Footer