import React from 'react'
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Opposition = ({ opposition, setOpposition, handleSave }) => {

  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10 pb-32">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[-0.1%] w-full border-b border-[#464648] z-10">
        <h1 className='font-body w-full text-lg sm:text-4xl text-white py-5 pl-1'>Opposition_</h1>
        <button
          onClick={handleSave}
          className='flex justify-end items-center cursor-pointer font-carbon text-[12px] py-8 pr-10 w-full h-full bg-[#10100e] text-white hover:bg-gradient-to-r from-[#10100e] via-[#10100e] to-[#4EFC7B] active:bg-[#10100e] active:text-white font-body transition-color duration-200'
        >save project</button>
      </div>
      <div className="flex flex-col gap-y-10 pr-5 pl-1 w-full">
        <div className="flex flex-col py-2">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='objective'>Objective_</label>
          <input id='objective' type='text' className='font-body text-[#aaaaaa] bg-transparent text-lg sm:text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, objective: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='antagonism'>Antagonism_</label>
          <input id='antagonism' className='font-body text-[#aaaaaa] bg-transparent text-lg sm:text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, antagonism: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='antagonist'>Antagonism by Antagonists_</label>
          <input id='antagonist' type='text' className='font-body text-[#aaaaaa] bg-transparent text-lg sm:text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, antagonist: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='allies'>Antagonism by Allies_</label>
          <input id='allies' type='text' className='font-body text-[#aaaaaa] bg-transparent text-lg sm:text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, allies: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-lg sm:text-3xl text-[#FC4ECF] mb-2' htmlFor='defeat'>Defeat_</label>
          <input id='defeat' type='text' className='font-body text-[#aaaaaa] bg-transparent text-lg sm:text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, defeat: target.value })} />
        </div>
      </div>
    </div>
  )
}
