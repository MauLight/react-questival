import React from 'react'

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Myth = ({ myth, setMyth, handleSave }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10  pb-32">

      <div className="flex justify-between items-center sticky bg-[#10100e] top-[-0.1%] w-full border-b border-[#464648] z-10">
        <h1 id='myth' className='font-body w-full text-lg sm:text-4xl text-white py-5 pl-1'>The creation of a Myth_</h1>
        <button
          onClick={handleSave}
          className='flex justify-end items-center cursor-pointer font-carbon text-[12px] py-8 pr-10 w-full h-full bg-[#10100e] text-white hover:bg-gradient-to-r from-[#10100e] via-[#10100e] to-[#4EFC7B] active:bg-[#10100e] active:text-white font-body transition-color duration-200'
        >save project</button>
      </div>

      <div className="flex flex-col gap-y-5 pr-5 pl-1 w-full">
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='problem'>Problem_</label>
          <input id='problem' type='text' className='font-body text-[#aaaaaa] bg-transparent glass rounded-md p-4 text-lg sm:text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, problem: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden w-full">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='take'>Your Take_</label>
          <textarea id='take' className='font-body text-[#aaaaaa] bg-transparent glass rounded-md p-4 text-lg sm:text-2xl w-full h-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, take: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='summary'>Concept_</label>
          <input type='text' className='font-body text-[#aaaaaa] bg-transparent glass rounded-md p-4 text-lg sm:text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, concept: target.value })} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='summary'>Myth_</label>
          <input type='text' className='font-body text-[#aaaaaa] bg-transparent glass rounded-md p-4 text-lg sm:text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setMyth({ ...myth, myth: target.value })} />
        </div>
      </div>
    </div>
  )
}
