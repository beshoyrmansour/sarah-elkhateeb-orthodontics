import React from "react"
import Image from "next/image"

type Props = {}

const Hero = (props: Props) => {

  return (<>
    <section className=" pt-[8em] hero flex flex-col justify-center items-center w-full" id="Home">

      <div

        className=" bg-white rounded-tr-[800em] rounded-bl-[800em] rounded-tl-[200em] rounded-br-[100em]  flex flex-col md:flex-row  justify-center items-center gap-2 w-full">

        <div className="mx-auto d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
          <div className="hero-text">
            <h1 className="text-3xl font-semibold text-teal-500">👋Dr.Sarah Elkhateeb</h1>

            <p className="ml-[42px] text-xl mb-2">
              Orthodontics
            </p>
            <span className="flex justify-start items-center">
              <a href="tel:01004669848" className="
              inline-block align-middle
              ml-[42px] text-md bg-teal-600 text-white font-bold w-auto rounded-[50px] text-center px-3 py-1 ">
                🤙 01004669848
              </a>
              <a target="_blank" href="https://www.instagram.com/sarahelkhateeb.orthodontics/" className="ml-2 ">
                <Image src="/instagram_logo.svg" className="img-fluid"
                  alt="Dr sarah"
                  width={45}
                  height={45}
                  priority
                />
              </a>

            </span>

          </div>
        </div>
        <div className="">
          <Image src="/ben.png" className="img-fluid"
            alt="Dr sarah"
            width={380}
            height={370}
            priority
          />
        </div>
      </div>
      <div >

      </div>

    </section>
  </>)
}

export default Hero
