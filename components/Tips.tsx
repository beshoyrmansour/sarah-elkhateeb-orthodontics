import Image from "next/image"
import React from "react"
import { Tips, TipsTypes } from "../types"
import TipsList from "@/app/Tips"
import Link from "next/link"

type Props = {}

const Tips = (props: Props) => {

  return (
    <div id='Tips' className="my-32  bg-white/[.26] rounded-tl-[800em] rounded-br-[800em] rounded-tr-[200em] rounded-bl-[100em]">
      <h2 className="mb-24 px-5 text-5xl font-bold text-teal-500 ">Tips & Tricks</h2>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 md:grid-cols-2 lg:text-left m-auto justify-center ">
        {TipsList.map((Tip: Tips) => (
          <Link href={`/Tips/${Tip.slug}`}
            key={Tip.slug}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50 "
            rel="noopener noreferrer">
            <div className="relative bg-white">

              <Image
                className="object-cover h-60 w-100 rounded-lg mb-3 "
                src={Tip.icon}
                alt={Tip.title}
                width={500}
                height={300}
                priority
              />
              {Tip.type === TipsTypes.video &&
                <Image
                  className=" w-full h-full rounded-lg mb-3 absolute p-16 bg-white/25 hover:bg-teal-300/50 text-center top-0 stroke-3"
                  src='/play-button.svg'
                  alt={Tip.title}
                  width={100}
                  height={60}
                  priority
                />
              }
              {/* {Tip.type === TipsTypes.news && <div className=" w-full h-full rounded-lg absolute top-0 text-right p-6 bg-white/25 hover:bg-teal-600/50 font-bold hover:text-white ">
                <span className=" w-full h-full rounded-lg  text-right p-3 bg-white/25 hover:bg-teal-600/50 font-bold hover:text-white ">News</span>
              </div>} */}


            </div>
            <h2 className={`mb-3 text-2xl font-semibold text-teal-600`}>
              {Tip.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0  text-sm opacity-50`}>{Tip.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tips
