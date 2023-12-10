import React from 'react'
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Opposition = ({ opposition, setOpposition }) => {

  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10 pb-32">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>Opposition_</h1>
      <div className="flex flex-col gap-y-10 px-10 w-full">
        <div className="flex flex-col py-2">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='objective'>Objective_</label>
          <input placeholder={lorem} id='objective' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, objective: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='antagonism'>Antagonism_</label>
          <input placeholder={lorem} id='antagonism' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, antagonism: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='antagonist'>Antagonism by Antagonists_</label>
          <input placeholder={lorem} id='antagonist' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, antagonist: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='allies'>Antagonism by Allies_</label>
          <input placeholder={lorem} id='allies' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, allies: target.value })} />
        </div>
        <div className="flex flex-col">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='defeat'>Defeat_</label>
          <input placeholder={lorem} id='defeat' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setOpposition({ ...opposition, defeat: target.value })} />
        </div>
      </div>
    </div>
  )
}
