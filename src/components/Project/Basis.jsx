import React from 'react'
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Basis = ({ basis, setBasis, handleSave }) => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-10 pb-32">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[-0.1%] w-full border-b border-[#464648] z-10">
        <h1 id='basis' className='font-body w-full text-2xl min-[400px]:text-4xl text-white py-5  px-10'>The dramatic basis of Story_</h1>
        <button
          onClick={handleSave}
          className='flex justify-end items-center cursor-pointer font-carbon text-[12px] py-8 pr-10 w-full h-full bg-[#10100e] text-white hover:bg-gradient-to-r from-[#10100e] via-[#10100e] to-[#4EFC7B] active:bg-[#10100e] active:text-white font-body transition-color duration-200'
        >save project</button>
      </div>
      <div className="flex flex-col gap-y-10 px-2 sm:px-10 w-full">
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='theme'>Theme_</label>
          <input id='theme' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, theme: target.value })} />
        </div>
        <div className="flex max-sm:flex-col justify-start gap-x-10">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='truth'>Truth_</label>
              <input id='truth' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, truth: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='contrapositive'>Contrapositive_</label>
              <input id='contrapositive' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, contrapositive: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='lie'>Lie_</label>
              <input id='lie' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, lie: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='flaw'>Flaw_</label>
              <input id='flaw' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, flaw: target.value })} />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='wound'>Sin/Wound</label>
              <input id='wound' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, wound: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='want'>Want_</label>
              <input id='want' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, want: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='quality'>Redeemable quality</label>
              <input id='quality' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, quality: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='need'>Need_</label>
              <input id='need' type='text' className='font-body glass rounded-md p-4 text-[#aaaaaa] bg-transparent text-2xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, need: target.value })} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
