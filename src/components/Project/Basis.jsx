import React from 'react'
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Basis = ({ basis, setBasis }) => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-10 pb-32">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>The dramatic basis of Story_</h1>
      <div className="flex flex-col gap-y-10 px-10 w-full">
        <div className="flex flex-col overflow-hidden">
          <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='theme'>Theme_</label>
          <input placeholder={lorem} id='theme' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, theme: target.value })} />
        </div>
        <div className="flex max-sm:flex-col justify-between">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='truth'>Truth_</label>
              <input placeholder={lorem} id='truth' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, truth: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='contrapositive'>Contrapositive_</label>
              <input placeholder={lorem} id='contrapositive' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, contrapositive: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='lie'>Lie_</label>
              <input placeholder={lorem} id='lie' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, lie: target.value })} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='flaw'>Flaw_</label>
              <input placeholder={lorem} id='flaw' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, flaw: target.value })} />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='wound'>Sin/Wound</label>
              <input placeholder={lorem} id='wound' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, wound: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='want'>Want_</label>
              <input placeholder={lorem} id='want' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, want: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='quality'>Redeemable quality</label>
              <input placeholder={lorem} id='quality' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, quality: target.value })} />
            </div>
            <div className="flex flex-col max-sm:px-2">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='need'>Need_</label>
              <input placeholder={lorem} id='need' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setBasis({ ...basis, need: target.value })} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
