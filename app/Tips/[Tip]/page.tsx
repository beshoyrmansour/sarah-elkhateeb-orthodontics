import TipsList from '@/app/Tips'
import { Tips, TipsTypes } from '@/types'
import React from 'react'
import Image from "next/image"
import Link from "next/link"

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
    type: TipsTypes.article,
    externalLink: ''
  }
  const selected = TipsList.find((_Tip) => _Tip.slug === params.Tip)
  if (selected) {
    Tip.title = selected.title
    Tip.icon = selected.icon
    Tip.description = selected.description
    Tip.linkTo = selected.linkTo
    Tip.slug = selected.slug
    Tip.externalLink = selected.externalLink
    Tip.type = selected.type
  }
  const otherTips = TipsList.filter(_Tip => _Tip.slug !== params.Tip)

  return (
    <div className='block min-h-screen  lg:px-24 xs:p-3 max-w-screen-xl mx-auto overflow-x-hidden mt-[8em] min-h-[calc(100vh_-_18.5em)] '>
      <div className=" mb-16 bg-white rounded-xl p-6 grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-2">
          <div className="relative bg-white">
            <Image
              className="img-fluid mx-auto rounded-xl "
              src={Tip.icon}
              alt={Tip.title}
              width={1000}
              height={800}
              priority
            />
            {Tip.type === TipsTypes.video && Tip.externalLink &&
              <Link href={Tip.externalLink}>
                <Image
                  className=" w-full h-full rounded-lg mb-3 absolute p-24 bg-white/25 hover:bg-teal-300/50 text-center top-0 stroke-3"
                  src='/play-button.svg'
                  alt={Tip.title}
                  width={100}
                  height={60}
                  priority
                />
              </Link>
            }
          </div>
        </div>
        <div className='col-span-2 flex justify-between  items-stretch lg:items-start flex-col'>
          <div className='w-full'>
            <h1 className='text-4xl text-teal-600 mb-3 w-full flex justify-between items-center' >
              <span> {Tip?.title} </span>
              <span className='ml-auto text-base  fornt-black uppercase text-white bg-teal-600 py-1 px-2 rounded-full'>
                {Tip.type}
              </span>
            </h1>
            <p className="text-xl text-teal-900 mb-8 lg:mb-16">
              {Tip?.description}
            </p>
          </div>
          {/* <a href='tel:01004669848' className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
            Book Now 🤙
          </a> */}
        </div>
      </div>
      {/* otherTips */}
      <h2 className="mb-8  text-4xl font-bold text-teal-500 ">
        <span className="bg-teal-600 text-white font-bold w-auto
         rounded-bl-[20px]
          rounded-tr-[90px]
           rounded-tl-[50px]
           rounded-br-[150px]
        text-center px-12 py-3 mt-2">Other Tips</span>
      </h2>
      <div className="mb-16 bg-white rounded-xl p-6 grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 gap-6">
        {otherTips.map(otherTip => (
          <>
            <Link href={`/Tips/${otherTip.slug}`} className="col-span-1 hover:bg-teal-100 rounded-xl text-center">
              <Image src={otherTip?.icon} className=" h-[150px] object-cover img-fluid mx-auto rounded-xl"
                alt="Dr.Sarah Elkhateeb instagram page"
                width={1000}
                height={800}
                priority
              />
              <h1 className='text-2xl text-teal-600'>{Tip?.title}</h1>
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export default TipDetails