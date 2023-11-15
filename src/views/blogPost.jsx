import React from 'react'
import { blogs } from '../utils/blogEntries'
import { Quotes } from '@carbon/icons-react'

export const BlogPost = ({ blogId }) => {

  const blogFilter = blogs.filter(blog => blog.id === blogId)

  return (
    <>
      <div className='min-h-[700px] w-screen bg-[#10100e] py-20 pl-[150px]'>
        {
          blogFilter.map(blog => (
            <div
              key={blog.id}
              className="flex flex-col w-screen lg:w-[90vw] lg:px-20"
            >
              <h1 className='blog-item font-title2 text-white text-5xl sm:text-7xl'>{blog.title}</h1>
              <div className="border-b-2 border-[#aaaaaa] w-2 w-full py-2"></div>
              <div className="flex justify-start gap-x-2 my-10">
                <p className='font-body text-[#aaaaaa] text-sm'>{blog.date}</p>
                <div className="border border-[#aaaaaa] rounded-full px-2">
                  <p className='font-body text-[#aaaaaa] text-sm'>{blog.tag}</p>
                </div>
              </div>
              <div className={'mx-auto w-full max-h-[64vh] object-contain object-center group relative overflow-hidden'}>
                <img src={blog.img} className={'w-full h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
              </div>
              <div className="flex flex-col">
                <p className='text-xl font-body text-[#aaaaaa] my-10'>{blog.par1}</p>
                <p className='text-xl font-body text-[#aaaaaa]'>{blog.par2}</p>
                <div className="flex gap-x-5 my-10 items-center">
                  <Quotes className='text-[#aaaaaa] w-[300px] h-auto' size={32} />
                  <p className='font-body text-[#aaaaaa] text-3xl sm:text-4xl'>{blog.quote}</p>
                </div>
                <p className='text-xl font-body text-[#aaaaaa]'>{blog.par3}</p>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}