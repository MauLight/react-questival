import React from 'react'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Myth = ({ myth, setMyth }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10  pb-32">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>The creation of a Myth_</h1>
      <div className="flex flex-col gap-y-5 px-10 w-full">
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='problem'>Problem_</label>
          <input id='problem' placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, problem: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden w-full">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='take'>Your Take_</label>
          <textarea placeholder={lorem} id='take' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full h-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, take: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='summary'>Concept_</label>
          <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, concept: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='summary'>Myth_</label>
          <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, myth: target.value })} />
        </div>
      </div>
    </div>
  )
}
