import Image from "next/image"
import React from "react"
import { Testimonial } from "../types"
import TestimonialsList from "@/app/Testimonials"
import Link from "next/link"

type Props = {}

const Testimonials = (props: Props) => {

  return (
    <div id='Testimonials' className="
    mb-32
    pt-[10em]
    w-100 
        ">
      <h2 className="mb-24  text-4xl font-bold text-teal-500 ">
        <span className="
        bg-teal-600
        text-white
        font-bold
        w-auto
        rounded-bl-[20px]
        rounded-tr-[90px]
        rounded-tl-[50px]
        rounded-br-[150px]
        text-center
        px-12
        py-3
        mt-2"
        >Testimonials</span>
      </h2>

      <div className="
      mb-32
      flex
      text-center
      lg:mb-0
      lg:text-left
      m-auto
      justify-start
      w-100
      overflow-x-auto">
        {TestimonialsList.map((testimonial: Testimonial, index: number) => (
          <div
            key={`testimonial__${index}`}
            className="min-w-[300px] group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50 w-[300px]"
            rel="noopener noreferrer">
            <div className="relative bg-white">

              {testimonial.imageUrl && <Image
                className="object-cover h-60 w-100 rounded-lg mb-3 "
                src={testimonial.imageUrl}
                alt={testimonial.content}
                width={500}
                height={300}
                priority
              />
              }
            </div>
            <h2 className={`mb-3 `}>
              "{testimonial.content}"
            </h2>
            <p className={`m-0  text-xl font-semibold  text-teal-600 `}>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>

    // <div id="default-carousel" className="relative w-full" data-carousel="slide">
    //   {/* <!-- Carousel wrapper --> */}
    //   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //     {TestimonialsList.map((testimonial: Testimonial, index: number) => (
    //       <div
    //         key={`testimonial__${index}`}
    //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50 w-[300px]"
    //         rel="noopener noreferrer">
    //         <div className="relative bg-white">
    //           {testimonial.imageUrl && <Image
    //             className="object-cover h-60 w-100 rounded-lg mb-3 "
    //             src={testimonial.imageUrl}
    //             alt={testimonial.content}
    //             width={500}
    //             height={300}
    //             priority
    //           />
    //           }
    //         </div>
    //         <h2 className={`mb-3 `}>
    //           "{testimonial.content}"
    //         </h2>
    //         <p className={`m-0  text-xl font-semibold  text-teal-600 `}>{testimonial.name}</p>
    //       </div>
    //     ))}
    //   </div>
    //   {/* <!-- Slider indicators --> */}
    //   <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    //   </div>
    //   {/* <!-- Slider controls --> */}
    //   <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    //       <span className="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    //       <span className="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>

  )
}

export default Testimonials
