import React from "react"
import Image from "next/image"

type Props = {}

const Hero = (props: Props) => {

  return (<>
    <section className="relative pt-[8em] hero flex flex-col justify-center items-center w-full" id="Home">
     <Image src='/bg.svg' alt="background" className="absolute top-[8em] min-w-[180vw] max-h-[600px] w-100 z-0"
        width={3000}
        height={3000} />
         <div
        className="min-h-[500px] flex flex-col md:flex-row  justify-center items-center gap-2 w-full z-10">

        <div className=" d-flex flex-column justify-content-center align-items-center  col-12">
<Image src="/logo_colors.svg" className="mx-auto mb-8 mt-4"
                  alt="Dr sarah"
                  width={150}
                  height={150}
                  priority
                />
            <span className="flex justify-start items-center">
              <a href="tel:01004669848" className="
              inline-block align-middle
               text-md bg-teal-600 text-white font-bold w-auto rounded-[50px] text-center px-3 py-1 ">
                01004669848
              </a>
              <a target="_blank" href="https://www.instagram.com/sarahelkhateeb.orthodontics/" className="ml-2 ">
                <Image src="/instagram_logo.svg" className="img-fluid"
                  alt="Dr sarah"
                  width={45}
                  height={45}
                  priority
                />
                </a>
              <a target="_blank" href="https://www.instagram.com/sarahelkhateeb.orthodontics/" className="ml-2 ">
                <Image src="/facebook_logo.svg" className="img-fluid"
                  alt="Dr sarah"
                  width={45}
                  height={45}
                  priority
                />
              </a>

            </span>

        </div>
              
      </div>
      <div >

      </div>

    </section>
  </>)
}

export default Hero
