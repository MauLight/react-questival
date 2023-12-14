import React from 'react'
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Character = ({ character, setCharacter, handleSave }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10  pb-32">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[-0.1%] w-full border-b border-[#464648] z-10">
        <h1 className='font-body w-full text-2xl min-[400px]:text-4xl text-white py-5  px-10'>{'The protagonist\'s Arc_'}</h1>
        <button
          onClick={handleSave}
          className='flex justify-end items-center cursor-pointer font-carbon text-[12px] py-8 pr-10 w-full h-full bg-[#10100e] text-white hover:bg-gradient-to-r from-[#10100e] via-[#10100e] to-[#4EFC7B] active:bg-[#10100e] active:text-white font-body transition-color duration-200'
        >save project</button>
      </div>
      <div className="flex flex-col px-2 sm:px-10 w-full">
        <div className="flex flex-col gap-y-10 justify-between">
          <div className="w-full">
            <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='ch_logline'>Character Logline_</label>
            <textarea id='ch_logline' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, ch_logline: target.value })} />
          </div>
          <div className="flex flex-col overflow-hidden gap-y-10">
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='belief'>System of Belief_</label>
              <input id='belief' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, belief: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='false_behavior'>False Behavior_</label>
              <input id='false_behavior' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, false_behavior: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='contradiction'>Contradiction_</label>
              <input id='contradiction' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, contradiction: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='incident'>Inciting Incident_</label>
              <input id='incident' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, incident: target.value })} />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden gap-y-10">
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='refusal'>Refusal/Acceptance_</label>
              <input id='refusal' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, refusal: target.value })} />
            </div>
            <div className="w-full">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='want'>Want_</label>
              <textarea id='want' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, want: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='true_behavior'>True Behavior_</label>
              <input id='true_behavior' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, true_behavior: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='right_action'>Right Action_</label>
              <input id='right_action' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, right_action: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF] mb-2' htmlFor='true_character'>True Character_</label>
              <input id='true_character' type='text' className='font-body text-[#aaaaaa] bg-transparent text-2xl glass rounded-md p-4 w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, true_character: target.value })} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
