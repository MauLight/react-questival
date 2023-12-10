import React from 'react'

export const Title = ({ title, setTitle }) => {
  return (
    <div className="h-1/5 border-y border-[#464648] mt-10">
      <div className="flex flex-col justify-center overflow-hidden">
        <input className='font-title2 pt-3 px-10 text-[96px] text-white bg-transparent focus:ring-0 focus:outline-none' placeholder='The title of your movie' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>
    </div>
  )
}
