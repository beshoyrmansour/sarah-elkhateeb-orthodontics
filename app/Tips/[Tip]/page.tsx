import TipsList from '@/app/Tips'
import { Tips, TipsTypes } from '@/types'
import React from 'react'

type Props = {
  params: {
    Tip: string
  }
}

const TipDetails = ({ params }: Props) => {
  console.log({ params });
  const Tip: Tips = {
    title: '',
    icon: '',
    description: '',
    linkTo: '',
    slug: '',
    type: TipsTypes.article
  }
  const selected = TipsList.find(_Tip => _Tip.slug === params.Tip)
  if (selected) {
    Tip.title = selected.title
    Tip.icon = selected.icon
    Tip.description = selected.description
    Tip.linkTo = selected.linkTo
    Tip.slug = selected.slug
  }

  return (
    <div className='mt-[8em] min-h-[calc(100vh_-_18.5em)]'>
      <div>title: {Tip?.title}</div>
      <div>icon: {Tip?.icon}</div>
      <div>description: {Tip?.description}</div>
      <div>linkTo: {Tip?.linkTo}</div>
      <div>slug: {Tip?.slug}</div>
    </div>
  )
}

export default TipDetails