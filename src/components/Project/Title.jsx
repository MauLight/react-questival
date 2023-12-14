import React from 'react'

export const Title = ({ title, setTitle }) => {
  return (
    <div className="h-[13vh] border-b border-[#464648] my-auto">
      <div className="flex flex-col justify-end overflow-hidden h-full">
        <input className='font-title2 m-0 p-0 h-full text-end uppercase px-2 sm:px-10 text-4xl min-[400px]:text-[72px] text-white bg-transparent focus:ring-0 focus:outline-none' placeholder='The title of your movie' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
        <div className="flex justify-between m-0 p-0">
          <div className="flex gap-x-2 px-10">
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>myth</small>
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>basis</small>
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>protagonist</small>
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>opposition</small>
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>pitch</small>
            <small className='font-body text-white text-end px-2 mb-[1.8vh]'>screenplay</small>
          </div>
          <small className='font-body text-white text-end px-2 sm:px-10 mb-[1.8vh]'>sci-fi // action</small>
        </div>
      </div>
    </div>
  )
}
