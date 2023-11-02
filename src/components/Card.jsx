import React from 'react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'

export const Card = ({ id, title, lesson, img, body, tags }) => {


  return (
    <motion.div
      variants={fadeInSmall('left', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      key={id}
      className='lg:min-w-[35vw] h-full object-contain object-center overflow-hidden text-black bg-[#1b1b1b] rounded-r-[15px] px-5 py-10 mx-5'
    >
      <h1 className='font-carbon text-lg mb-1 text-[#aaaaaa] uppercase'>{'// Lesson ' + lesson}</h1>
      <h1 className='font-title2 text-[40px] mb-4 text-white'>{title}</h1>
      <img className='md:h-[60%] lg:h-[40%] xl:h-[50%] w-full object-cover mx-auto rounded-md' src={img} />
      <div className="flex justify-center my-3">
        {
          tags.map((tag, i) => (
            <div key={i} className="border-2 rounded-full px-2 py-1 my-3 mx-1 border-[#aaaaaa]">
              <p className='text-[10px] text-white'>{tag}</p>
            </div>
          )
          )
        }
      </div>
      <div className="flex">
        <p className='text-lg font-carbon text-[#aaaaaa]'>{body}</p>
      </div>
    </motion.div>
  )
}
