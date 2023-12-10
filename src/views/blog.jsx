import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { blogs } from '../utils/blogEntries'

export const Blog = () => {
  return (
    <div className=' pt-10'>
      <div className='flex flex-wrap w-screen bg-[#10100e] justify-center items-center lg:pl-[78px] border-b border-[#464648] lg:border-t border-[#464648]'>
        {
          blogs.reverse().map(blog => (
            <motion.div
              variants={fadeInSmall('left', blog.fade)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              key={blog.id}
              className="flex lg:flex-col w-full lg:w-[28vw] overflow-hidden border-b border-r lg:pb-[35px] border-[#464648] max-lg:my-2"
            >
              <Link to={`/blogpost/${blog.id}`}>
                <div className={'w-screen lg:w-[30vw] lg:max-h-[27vh] overflow-hidden'}>
                  <img src={blog.img} className={'w-full lg:h-[28vh] object-cover hover:scale-[110%] transition-scale duration-500'} />
                </div>
                <div className="hidden sm:flex justify-end gap-x-2 my-5 px-2">
                  <p className='font-body text-sm text-[#aaaaaa]'>{blog.date}</p>
                  <div className="border rounded-full px-2">
                    <p className='font-body text-sm text-[#aaaaaa]'>{blog.tag}</p>
                  </div>
                </div>
                <h1 className='blog-item font-title2 uppercase text-lg md:text-2xl text-white text-end px-2'>{blog.title}</h1>
              </Link>
            </motion.div>
          )
          )
        }
      </div>
    </div>
  )
}
