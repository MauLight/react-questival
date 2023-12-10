import React from 'react'
import { motion } from 'framer-motion'

export const Pitch = ({ handlePitch, pitch }) => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-start pb-32">
      <div className="flex justify-between items-center sticky bg-[#10100e] top-[0%] w-full px-10 border-b border-[#464648]">
        <h1 className='font-body w-full text-6xl text-white py-5'>Pitch Deck_</h1>
        <motion.label
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='flex justify-center items-center font-carbon text-[12px] border border-[#464648] p-4 rounded-full w-[70px] h-[70px] bg-[#10100e] text-white hover:bg-[#FC4ECF] hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
        >
          <input
            type='file'
            onChange={(e) => handlePitch(e)}
            className="w-0 h-0 p-0 m-0"
          />
          upload
        </motion.label>
      </div>
      <div className="flex h-full">
        <iframe
          className='h-screen w-[69vw]'
          src={ pitch || 'https://drive.google.com/file/d/1TK_DnG7vnbrDx7J178_0jHNqZ8mTobKD/preview'}

          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
