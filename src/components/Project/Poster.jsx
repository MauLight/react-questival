import React from 'react'

export const Poster = ({ poster, handlePoster }) => {
  return (
    <div className='w-full h-screen overflow-y-hidden scrollbar-none relative'>

      <label className='flex h-full w-full'>
        <img src={poster} className={'h-full object-cover'} />
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
