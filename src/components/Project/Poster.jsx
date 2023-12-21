import React from 'react'

export const Poster = ({ poster, handlePoster }) => {
  return (
    <div className='w-screen xl:w-full sm:h-screen overflow-y-hidden scrollbar-none relative'>

      <label className='flex h-full w-full cursor-pointer max-xl:justify-center max-xl:items-center min-sm:max-xl:mt-10'>
        <img src={poster} className={'h-full object-cover max-xl:border border-[#464648]'} />
        <input
          type="file"
          name="upload-poster"
          onChange={(e) => handlePoster(e)}
          className="w-0 h-0 p-0 m-0"
        />
      </label>
    </div>
  )
}
