import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12.7vh] h-screen bg-[#f7f6fb]" id="home">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*Text content*/}
          <div>
            {/*Top box*/}
            {/* <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                    <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                        News
                    </div>
                </div> */}
            {/*Heading*/}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Soluciones de software a medida para tu empresa o negocio.
            </h1>
            {/*Description*/}
            <p className="text-gray-700">
              Hacemos realidad tus ideas con tecnología de vanguardia. Ofrecemos
              soluciones personalizadas y de alta calidad para ayudarte a
              impulsar tu negocio y mejorar tu experiencia de usuario.
            </p>
            {/*Button*/}
            <div className="mt-6">
              <button className="px-3 py-2 md:px-5 md:py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition duration-300">
                Contáctanos
              </button>
            </div>
          </div>
          {/*Image content*/}
          <div data-aos="fade-up" data-aos-delay="200" className="hidden lg:block">
            <Image
              src={"/images/hero.png"}
              alt="hero"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
