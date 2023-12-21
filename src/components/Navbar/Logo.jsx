import React from 'react'
import logo from '../../assets/logo.webm'

export const Logo = () => {
  return (
    <div className='flex justify-center items-center w-full px-2 h-[15%]'>
      <a href='https://screenwriters.quest/'>
        <video
          src={logo}
          autoPlay
          loop
          muted
          className='flex items-center w-full h-auto object-cover'
        />
      </a>
    </div>
  )
}
