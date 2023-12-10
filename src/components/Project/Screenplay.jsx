import React from 'react'
import { motion } from 'framer-motion'

export const Screenplay = ({ handleScreenplay, screenplay }) => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start pb-0">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[0%] w-full px-10 border-b border-[#464648]">
        <h1 className='font-body w-full text-6xl text-white py-5'>Screenplay_</h1>
        <motion.label
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='flex justify-center items-center font-carbon text-[12px] border border-[#464648] p-4 rounded-full w-[70px] h-[70px] bg-[#10100e] text-white hover:bg-[#FC4ECF] hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
        >
          <input
            type='file'
            onChange={(e) => handleScreenplay(e)}
            className="w-0 h-0 p-0 m-0"
          />
          upload
        </motion.label>
      </div>
      <div className="flex h-full">
        <iframe
          className='h-screen w-[69vw]'
          content='dark'
          src={screenplay + '#zoom=158' || 'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
