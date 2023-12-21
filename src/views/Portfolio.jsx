import React from 'react'
import { ProfileCard } from '../components/Portfolio/ProfileCard'
import { ScreenplayCard } from '../components/Portfolio/ScreenplayCard'
import { user as currentUser } from '../utils/projects'
import { Avatar } from '../components/Portfolio/Avatar'


export const Portfolio = () => {

  return (
    <div className='wrapper h-full w-full overflow-y-auto overflow-x-hidden'>

      <div className='hidden lg:flex header h-full w-full flex justify-start items-start text-[#aaaaaa] relative wrapper'>
        <img src='https://i.redd.it/x36oy3277vcb1.jpg' className='background h-screen w-screen absolute transition-all duration-200 top-0 object-cover blur-sm opacity-90' />
        <div className="h-screen w-full absolute flex justify-center items-center z-20">
          <Avatar />
        </div>
        <div className="h-screen w-full absolute flex justify-end items-end pr-5 z-20">
          <ProfileCard />
        </div>
      </div>
      <div className='flex max-lg:flex-col lg:hidden w-full flex justify-start items-start text-[#aaaaaa] relative wrapper'>
        <div className="flex justify-center items-center z-20">
          <Avatar />
        </div>
        <div className="lg:h-screen w-full lg:absolute flex justify-end items-end lg:pr-5 z-20">
          <ProfileCard />
        </div>
      </div>
      <div className="flex flex-col border-l border-[#464648] w-full">
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none bg-[#10100e] h-full w-full relative border-t border-[#464648]">
          {
            currentUser.projects.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none bg-[#10100e] h-full w-full relative border-t border-[#464648]">
          {
            currentUser.read.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none bg-[#10100e] h-full w-full relative border-t border-[#464648]">
          {
            currentUser.favorites.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none bg-[#10100e] h-full w-full relative border-t border-[#464648]">
          {
            currentUser.saved.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
