import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { blogs } from '../utils/blogEntries'

export const Blog = () => {
  return (
    <div>
      <div className='flex flex-wrap w-full bg-[#10100e] justify-center items-center border-t boder-r border-[#464648]'>
        {
          blogs.reverse().map(blog => (
            <motion.div
              variants={fadeInSmall('left', blog.fade)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              key={blog.id}
              className="flex lg:flex-col w-full lg:w-[30vw] overflow-hidden border-b border-l lg:pb-[35px] border-[#464648] max-lg:my-2"
            >
              <Link to={`/blogpost/${blog.id}`}>
                <div className={'w-screen lg:w-[30vw] lg:max-h-[27vh] overflow-hidden'}>
                  <img src={blog.img} className={'w-full lg:h-[28vh] object-cover hover:scale-[110%] transition-scale duration-500'} />
                </div>
                <div className="hidden sm:flex justify-start gap-x-2 my-5 px-2">
                  <p className='font-body text-sm text-[#aaaaaa]'>{blog.date}</p>
                  <div className="border rounded-full px-2">
                    <p className='font-body text-sm text-[#aaaaaa]'>{blog.tag}</p>
                  </div>
                </div>
                <h1 className='blog-item font-title2 uppercase text-lg md:text-xl text-white text-start px-2 line-clamp-1'>{blog.title}</h1>
              </Link>
            </motion.div>
          )
          )
        }
      </div>
    </div>
  )
}
