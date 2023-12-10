import React from 'react'

export const Pitch = () => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start pb-32">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>Pitch Deck_</h1>
      <div className="flex h-full">
        <iframe
          className='h-screen w-[69vw]'
          src={'https://drive.google.com/file/d/1TK_DnG7vnbrDx7J178_0jHNqZ8mTobKD/preview'}

          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
