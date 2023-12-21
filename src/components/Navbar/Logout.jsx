import React from 'react'

export const Logout = ({ handleLogOut }) => {
  return (
    <div className='flex justify-center items-center h-[12%] w-full px-4'>
      <button
        onClick={handleLogOut}
        className='font-carbon text-[12px] p-4 w-full h-full border-t border-x border-[#464648] bg-[#10100e] text-white hover:bg-[#FC4ECF] hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
      >log-out</button>
    </div>
  )
}
