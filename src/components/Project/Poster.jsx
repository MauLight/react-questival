import React from 'react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../../variants'

export const Poster = ({ poster, handlePoster }) => {
  return (
    <div className='w-full h-full overflow-y-hidden scrollbar-none relative'>
      <motion.div
        variants={fadeInSmall('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col top-[65%] right-[40%] absolute gap-y-1 z-10">
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
