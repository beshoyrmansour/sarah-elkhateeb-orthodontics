import React from 'react'
import Image from "next/image"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center text-center pb-16'>
      <span className="flex justify-around items-start flex-col md:flex-row w-100 px-5">

        <div className='flex flex-col mb-5  items-start' >
          <p className='font-bold my-1 text-teal-600 text-lg'>Social Media</p>

          <a target="_blank"
            href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
            className="my-1 flex justify-center items-center text-gray-600 font-bold text-lg">
            <Image src="/instagram_logo.svg" className="img-fluid"
              alt="Dr.Sarah Elkhateeb instagram page"
              width={25}
              height={25}
              priority
            /><span className="pl-1 semibold "> / sarahelkhateeb.orthodontics </span>
          </a>
          <a target="_blank"
            href="https://www.facebook.com/profile.php?id=100088667986256"
            className="my-1 flex justify-center items-center text-gray-600 font-bold text-lg">
            <Image src="/facebook_logo.svg" className="img-fluid"
              alt="Dr.Sarah Elkhateeb instagram page"
              width={25}
              height={25}
              priority
            /><span className="pl-1 semibold "> / sarahelkhateeb.orthodontics </span>
          </a>
        </div>
        <div className='flex flex-col mb-5  items-start ' >
          <p className='font-bold my-1 text-teal-600 text-lg'>Contacts</p>

          <a href="tel:01004669848" className="my-1
              inline-block align-middle
              text-md text-gray-600  font-semibold w-auto rounded-[50px] text-center">
            01004669848
          </a>
          <p className='my-1 text-gray-600 font-semibold '><a href="mailto:sarah.elkhateeb@hotmail.com">sarah.elkhateeb@hotmail.com</a></p>
        </div>
  <div className='flex flex-col mb-5  items-start ' >
              <p className='font-bold my-1 text-teal-600 text-lg'>OPENING HOURS</p>
          <ul className='flex flex-col justify-start  items-start'>

            <li className='my-1 text-gray-600'><b>Sheikh Zayed</b> - Thurs.: 1pm - 9pm</li>
            <li className='my-1 text-gray-600'><b>6th of October</b> - Thurs.: 1pm - 9pm</li>
            <li className='my-1 text-gray-600'><b>Dokki </b> - Thurs.: 1pm - 9pm</li>
            <li className='my-1 text-gray-600'><b>El Haram</b> - Thurs.: 1pm - 9pm</li>
            <li className='my-1 text-gray-600'><b>Maadi</b> - Thurs.: 1pm - 9pm</li>
            <li className='my-1 text-gray-600'><b>Heliopolis</b> - Thurs.: 1pm - 9pm</li>
          </ul>
        </div>

      </span>
      <div className="mt-2 text-gray-400">
        Copyright © 2023 Dr.Sarah Elkhateeb - All rights reserved <br /> Designed By: <a target='_blank' href='http://digitalizers.co/'>Digitalizers agency</a>
      </div>
    </div>
  )
}

export default Footer