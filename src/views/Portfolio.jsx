import React from 'react'
import { ProfileCard } from '../components/Portfolio/ProfileCard'
import { ScreenplayCard } from '../components/Portfolio/ScreenplayCard'
import { user as currentUser } from '../utils/projects'
import { Avatar } from '../components/Portfolio/Avatar'


export const Portfolio = () => {

  return (
    <div className='h-full w-screen '>

      <div className='h-full w-screen flex justify-start items-start text-[#aaaaaa] relative'>
        <div className="w-screen h-screen absolute flex justify-center items-center pl-10  z-20">
          <Avatar />
        </div>
        <img src='https://film-grab.com/wp-content/uploads/photo-gallery/Oppenheimer_02.jpg?bwg=1699893938' className='h-screen w-screen absolute z-0 left-[1%] object-cover blur-sm opacity-90' />
        <div className="absolute top-[60%] left-[90%] flex w-full justify-between z-50">
          <ProfileCard />
        </div>
      </div>
      <div className="flex flex-col w-screen border-l border-[#464648]">
        <div className="flex items-center pl-[11vw] overflow-x-scroll scrollbar-none bg-[#10100e] w-screen relative border-t border-[#464648]">
          <div className="min-w-[5vw]">
            <h1 className='absolute text-6xl text-[#FC4ECF] uppercase top-[43%] left-[1%] rotate-90'>My screenplays</h1>
          </div>
          {
            currentUser.projects.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex items-center pl-[11vw] overflow-x-scroll scrollbar-none bg-[#10100e] w-screen relative  border-t border-[#464648]">
          <div className="min-w-[5vw]">
            <h1 className='absolute text-6xl text-[#FC4ECF] uppercase top-[44%] left-[-0.5%] rotate-90'>Read screenplays</h1>
          </div>
          {
            currentUser.read.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex items-center pl-[11vw] overflow-x-scroll scrollbar-none bg-[#10100e] w-screen relative border-t border-[#464648]">
          <div className="min-w-[5vw]">
            <h1 className='absolute text-6xl text-[#FC4ECF] uppercase top-[44%] left-[1%] rotate-90'>fav screenplays</h1>
          </div>
          {
            currentUser.favorites.map(elem => (
              <ScreenplayCard key={elem.id} project={elem} />
            ))
          }
        </div>
        <div className="flex items-center pl-[11vw] overflow-x-scroll scrollbar-none bg-[#10100e] w-screen relative border-t border-[#464648]">
          <div className="min-w-[5vw]">
            <h1 className='absolute text-6xl text-[#FC4ECF] uppercase top-[45%] left-[-1.2%] rotate-90'>saved screenplays</h1>
          </div>
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
