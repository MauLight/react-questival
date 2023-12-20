import React from 'react'

export const Title = ({ title, setTitle }) => {
  return (
    <div className="h-[12.6%]  border-b border-[#464648]">
      <div className="flex flex-col justify-end overflow-hidden h-full">
        <input className='font-title2 m-0 p-0 h-full text-end uppercase px-2 sm:px-10 text-4xl min-[400px]:text-[72px] text-white bg-transparent focus:ring-0 focus:outline-none' placeholder='The title of your movie' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>
    </div>
  )
}
