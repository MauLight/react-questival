import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { blogs } from '../utils/blogEntries'

export const Blog = () => {
  return (
    <div className='flex flex-wrap w-screen gap-x-3 bg-[#2c262d] justify-center items-center py-[30px] gap-x-10 gap-y-20 pt-10 pl-[150px]'>
      {
        blogs.reverse().map(blog => (
          <motion.div
            variants={fadeInSmall('left', blog.fade)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={blog.id}
            className="flex flex-col md:w-[28vw] min-[200px]:max-sm:px-2 overflow-hidden"
          >
            <Link to={`/blogpost/${blog.id}`}>
              <div className={'rounded-l-full w-screen md:w-[30vw] max-h-[27vh] rounded-[10px] overflow-hidden'}>
                <img src={blog.img} className={'w-full h-[28vh] object-cover hover:scale-[110%] transition-scale duration-500'} />
              </div>
              <div className="hidden sm:flex justify-end gap-x-2 my-5">
                <p className='font-body text-sm text-[#aaaaaa]'>{blog.date}</p>
                <div className="border rounded-full px-2">
                  <p className='font-body text-sm text-[#aaaaaa]'>{blog.tag}</p>
                </div>
              </div>
              <h1 className='blog-item font-title2 uppercase text-lg md:text-2xl text-white text-end'>{blog.title}</h1>
            </Link>
          </motion.div>
        )
        )
      }
    </div>
  )
}
