import React from 'react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../../variants'

export const Poster = ({ poster, handlePoster, handleSave }) => {
  return (
    <div className='w-full h-full overflow-y-hidden scrollbar-none relative'>
      <motion.div
        variants={fadeInSmall('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col top-[82%] right-[40%] absolute gap-y-1">
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='font-carbon text-[12px] border border-[#464648] p-4 rounded-full w-[90px] h-[90px] bg-[#10100e] text-white hover:bg-[#FC4ECF] hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
        >save project</motion.button>
      </motion.div>
      <label className='flex h-full w-full'>
        <img src={poster} className={'h-full object-cover'} />
        <input
          type="file"
          name="upload-poster"
          onChange={(e) => handlePoster(e)}
          className="w-0 h-0 p-0 m-0"
        />
      </label>
    </div>
  )
}
