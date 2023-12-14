import React from 'react'

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Logline = ({ logline, setLogline, summary, setSummary }) => {
  return (
    <div>
      <div className="flex flex-col px-2 sm:px-10 w-full pt-20 pb-5">
        <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='logline'>Logline_</label>
        <div className="flex text-center items-center h-[14vh] overflow-hidden">
          <textarea id='logline' type='text' className='font-body glass p-4 rounded-md text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' value={logline} onChange={({ target }) => setLogline(target.value)} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-2 sm:px-10 w-full py-5">
        <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='summary'>Summary_</label>
        <div className="flex text-center items-center h-[44vh]">
          <textarea id='summary' className='glass p-4 rounded-md font-body text-[#aaaaaa] bg-transparent text-2xl w-full h-full focus:ring-0 focus:outline-none' value={summary} onChange={({ target }) => setSummary(target.value)} />
        </div>
      </div>
    </div>
  )
}
