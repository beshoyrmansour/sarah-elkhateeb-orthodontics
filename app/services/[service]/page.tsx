import servicesList from '@/app/services'
import { Service } from '@/types'
import React from 'react'
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: {
    service: string
  }
}

const ServiceDetails = ({ params }: Props) => {
  console.log({ params });
  const service: Service = {
    title: '',
    icon: '',
    description: '',
    linkTo: '',
    slug: ''
  }
  const selected = servicesList.find(_service => _service.slug === params.service)
  if (selected) {
    service.title = selected.title
    service.icon = selected.icon
    service.description = selected.description
    service.linkTo = selected.linkTo
    service.slug = selected.slug
  }
  const otherServices = servicesList.filter(_service => _service.slug !== params.service)

  return (<div className='block min-h-screen  lg:px-24 xs:p-3 max-w-screen-xl mx-auto overflow-x-hidden mt-[8em] min-h-[calc(100vh_-_18.5em)] '>
    <div className=" mb-16 bg-white rounded-xl p-6 grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="col-span-2">
        <Image src={service?.icon} className="img-fluid mx-auto rounded-xl"
          alt="Dr.Sarah Elkhateeb instagram page"
          width={1000}
          height={800}
          priority
        />
      </div>
      <div className='col-span-2 flex justify-between  items-stretch lg:items-start flex-col'>
        <div>
          <h1 className='text-4xl text-teal-600 mb-3'>{service?.title}</h1>
          <p className="text-xl text-teal-900 mb-8 lg:mb-16">
            {service?.description}
          </p>
        </div>
        <a href='tel:01004669848' className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
          Book Now 🤙
        </a>
      </div>
    </div>
    {/* otherServices */}
    <h2 className="mb-8  text-4xl font-bold text-teal-500 ">
      <span className="bg-teal-600 text-white font-bold w-auto
         rounded-bl-[20px]
          rounded-tr-[90px]
           rounded-tl-[50px]
           rounded-br-[150px]
        text-center px-12 py-3 mt-2">Other Services</span>
    </h2>
    <div className="mb-16 bg-white rounded-xl p-6 grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 gap-6">
      {otherServices.map(otherService => (
        <>
          <Link href={`/services/${otherService.slug}`} className="col-span-1 hover:bg-teal-100 rounded-xl text-center">
            <Image src={otherService?.icon} className=" h-[150px] object-cover img-fluid mx-auto rounded-xl"
              alt="Dr.Sarah Elkhateeb instagram page"
              width={1000}
              height={800}
              priority
            />
            <h1 className='text-2xl text-teal-600'>{service?.title}</h1>
          </Link>
        </>
      ))}
    </div>
  </div>
  )
}

export default ServiceDetails