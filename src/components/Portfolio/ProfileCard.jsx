import React from 'react'

export const ProfileCard = () => {
  return (
    <div>
      <div className="bg-[#10100e] flex lg:flex-col h-full w-screen max-lg:pl-5 lg:w-full justify-between lg:justify-start lg:items-start min-[500px]:gap-x-10 gap-y-10 ml-2 py-2 shadow z-50 rounded-t-md relative">
        <div className='p-2'>
          <div className="flex items-center gap-x-1 text-[#FC4ECF] font-body text-lg min-[500px]:max-lg:text-3xl lg:text-lg mb-3">
            I am Mau Light.
          </div>
          <div className="flex items-center gap-x-1 font-body text-sm min-[500px]:max-lg:text-xl lg:text-sm hover:text-white transition-color duration-200 cursor-pointer">
            <i className="fa-solid fa-location-dot fa-sm"></i>
            Santiago, CL
          </div>
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  hover:text-white transition-color duration-200 cursor-pointer">
            <i className="fa-solid fa-bookmark fa-sm"></i>
            portfolio website
          </div>
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  hover:text-white transition-color duration-200 cursor-pointer">
            <i className="fa-solid fa-envelope fa-sm"></i>
            contact@gmail.com
          </div>
        </div>
        <div className="flex justify-center w-full gap-x-2 max-lg:rotate-90 max-lg:absolute max-lg:top-[52%] max-lg:left-[7%]">
          <i className="fa-brands fa-instagram fa-2xl text-[#FC4ECF] hover:text-white transition-color duration-200 cursor-pointer max-lg:-rotate-90"></i>
          <i className="fa-brands fa-linkedin fa-2xl text-[#FC4ECF] hover:text-white transition-color duration-200 cursor-pointer max-lg:-rotate-90"></i>
          <i className="fa-brands fa-discord fa-2xl text-[#FC4ECF] hover:text-white transition-color duration-200 cursor-pointer max-lg:-rotate-90"></i>
        </div>
        <div className="lg:mt-5 lg:w-full px-2 max-lg:my-auto">
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  px-2 cursor-pointer hover:text-white transition-color duration-200 border-y border-[#464648]">
            screenplays
          </div>
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  px-2 cursor-pointer hover:text-white transition-color duration-200 border-b border-[#464648]">
            courses
          </div>
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  px-2 cursor-pointer hover:text-white transition-color duration-200 border-b border-[#464648]">
            activity
          </div>
          <div className="flex items-center gap-x-1 font-body  text-sm min-[500px]:max-lg:text-xl lg:text-sm  px-2 cursor-pointer hover:text-white transition-color duration-200 border-b border-[#464648]">
            about
          </div>
        </div>
      </div>
    </div>
  )
}
