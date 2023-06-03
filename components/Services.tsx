import Image from "next/image"
import React from "react"
import { Service } from "../types"
import servicesList from "@/app/services"
import Link from "next/link"

type Props = {}

const Services = (props: Props) => {

  return (
    <div id='Services' className="mb-32 pt-[10em]  bg-white/[.26] rounded-tl-[800em] rounded-br-[800em] rounded-tr-[200em] rounded-bl-[100em]">
      <h2 className="mb-24  text-4xl font-bold text-teal-500 ">
        <span className="bg-teal-600 text-white font-bold w-auto
         rounded-bl-[20px]
          rounded-tr-[90px]
           rounded-tl-[50px]
           rounded-br-[150px]
        text-center px-12 py-3 mt-2">Services</span>
      </h2>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 md:grid-cols-2 lg:text-left m-auto justify-center ">
        {servicesList.map((service: Service) => (
          <Link href={`/services/${service.slug}`}
            key={service.slug}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50 "

            rel="noopener noreferrer">
            <Image
              className="object-cover h-60 w-100 rounded-lg mb-3"
              src={service.icon}
              alt={service.title}
              width={500}
              height={300}
              priority
            />
            <h2 className={`mb-3 text-2xl font-semibold text-teal-600`}>
              {service.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0  text-sm opacity-50`}>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
