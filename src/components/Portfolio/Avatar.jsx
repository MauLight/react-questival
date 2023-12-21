import React from 'react'

export const Avatar = () => {
  return (
    <div className="w-screen h-auto lg:w-[585px] lg:h-[630px] border-4 overflow-hidden border-[#0b1014] relative rounded-md">
      <div className="flex flex-col right-[6%] sm:right-[4%] lg:right-[2%] gap-y-2 top-5 absolute z-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-white font-body text-4xl'>12</h1>
          <h1 className='text-white font-body text-md'>screenplays</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-white font-body text-4xl'>44</h1>
          <h1 className='text-white font-body text-md'>followers</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-white font-body text-4xl'>32</h1>
          <h1 className='text-white font-body text-md'>following</h1>
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-b from-slate-900 to-transparent absolute opacity-40"></div>
      <img src='https://c4.wallpaperflare.com/wallpaper/545/651/734/eva-unit-01-neon-genesis-evangelion-wallpaper-preview.jpg' className='h-full w-full left-[1%] object-cover' />
    </div>
  )
}
