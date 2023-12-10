import React from 'react'
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Character = ({ character, setCharacter }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-y-10  pb-32">
      <h1 className='sticky bg-[#10100e] top-[0%] font-body w-full text-6xl text-white py-5 border-b border-[#464648] px-10'>{'The protagonist\'s Arc_'}</h1>
      <div className="flex flex-col px-10 w-full">
        <div className="flex flex-col gap-y-10 justify-between">
          <div className="w-full">
            <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='ch_logline'>Character Logline_</label>
            <textarea placeholder={lorem} id='ch_logline' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, ch_logline: target.value })} />
          </div>
          <div className="flex flex-col overflow-hidden gap-y-10">
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='belief'>System of Belief_</label>
              <input placeholder={lorem} id='belief' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, belief: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='false_behavior'>False Behavior_</label>
              <input placeholder={lorem} id='false_behavior' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, false_behavior: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='contradiction'>Contradiction_</label>
              <input placeholder={lorem} id='contradiction' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, contradiction: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='incident'>Inciting Incident_</label>
              <input placeholder={lorem} id='incident' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, incident: target.value })} />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden gap-y-10">
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='refusal'>Refusal/Acceptance_</label>
              <input placeholder={lorem} id='refusal' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, refusal: target.value })} />
            </div>
            <div className="w-full">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='want'>Want_</label>
              <textarea placeholder={lorem} id='want' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, want: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='true_behavior'>True Behavior_</label>
              <input placeholder={lorem} id='true_behavior' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, true_behavior: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='right_action'>Right Action_</label>
              <input placeholder={lorem} id='right_action' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, right_action: target.value })} />
            </div>
            <div className="flex flex-col">
              <label className='font-body text-3xl text-[#FC4ECF]' htmlFor='true_character'>True Character_</label>
              <input placeholder={lorem} id='true_character' type='text' className='font-body text-[#aaaaaa] bg-transparent text-5xl w-full focus:ring-0 focus:outline-none' onChange={({ target }) => setCharacter({ ...character, true_character: target.value })} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
