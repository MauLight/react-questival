import React from 'react'
import { motion } from 'framer-motion'

export const Screenplay = ({ handleScreenplay, screenplay }) => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start pb-0">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[-0.1%] w-full border-b border-[#464648]">
        <h1 className='font-body w-full text-lg sm:text-4xl text-white py-5 pl-1'>Screenplay_</h1>
        <motion.label
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='flex justify-end items-center cursor-pointer font-carbon text-[12px] py-8 pr-10 w-full h-full bg-[#10100e] text-white hover:bg-gradient-to-r from-[#10100e] via-[#10100e] to-[#FC4ECF] active:bg-[#10100e] active:text-white font-body transition-color duration-200'
        >
          <input
            type='file'
            onChange={(e) => handleScreenplay(e)}
            className="w-0 h-0 p-0 m-0"
          />
          upload
        </motion.label>
      </div>
      <div className="flex h-full w-full">
        <iframe
          className='h-screen w-full xl:w-[69vw]'
          content='dark'
          src={screenplay || 'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
