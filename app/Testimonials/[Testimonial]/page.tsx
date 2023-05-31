import servicesList from '@/app/services'
import { Service } from '@/types'
import React from 'react'

type Props = {
  params: {
    service: string
  }
}

const TestimonialDetails = ({ params }: Props) => {
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

  return (<>
    <div>title: {service?.title}</div>
    <div>icon: {service?.icon}</div>
    <div>description: {service?.description}</div>
    <div>linkTo: {service?.linkTo}</div>
    <div>slug: {service?.slug}</div>
  </>
  )
}

export default TestimonialDetails