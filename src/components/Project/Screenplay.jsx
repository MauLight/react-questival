import React from 'react'

export const Screenplay = () => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start pb-0">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>Screenplay_</h1>
      <div className="flex h-full">
        <iframe
          className='h-screen w-[69vw]'
          src={'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}

          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
