import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sling as Hamburger } from 'hamburger-react'
import { Blog as BlogIcon, Schematics, SendAlt, TableOfContents, Course } from '@carbon/icons-react'
import { fadeInSmall } from '../variants'

import logo from '../assets/logo.webm'

export const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="flex justify-between items-center fixed w-full py-0 sm:py-2 px-3 sm:px-10 z-[2] border-b border-[#464648] bg-[#10100e] max-h-20">
      <Link to={'/'}>
        <video
          src={logo}
          autoPlay
          loop
          muted
          className='w-auto h-12 sm:h-[10vh] object-cover'
        />
      </Link>
      <>
        <div className='hidden sm:flex justify-center items-center font-body text-md gap-x-4'>
          <Link to={'/myproject'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <Schematics size={16} />
            <p className='text-sm font-body'>My Project</p>
          </Link>
          <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <Course size={16} />
            <p className='text-sm font-body'>Course</p>
          </Link>
          <Link to={'/syllabus'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <TableOfContents size={16} />
            <p className='text-sm font-body'>Syllabus</p>
          </Link>
          <Link to={'/blog'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <BlogIcon size={16} />
            <p className='text-sm font-body'>Blog</p>
          </Link>
          <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <SendAlt size={16} />
            <p className='text-sm font-body'>Contact</p>
          </Link>
        </div>
        <div className='flex sm:hidden justify-center items-center font-body text-md gap-x-4'>
          <motion.div
            className='flex flex-col items-center fixed bg-[#10100e] left-[65%] min-[300px]left-[70%] min-[500px]:left-[80%] top-[5.4%] border-b p-5 gap-y-2 border-x border-[#464648] z-0'
            variants={fadeInSmall('down', 0.5)}
            initial='hidden'
            whileInView={menu}
            viewport={{ once: false, amount: 0.7 }}>
            <Link to={'/myproject'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Schematics size={16} />
              <p className='text-sm font-body'>My Project</p>
            </Link>
            <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Course size={16} />
              <p className='text-sm font-body'>Course</p>
            </Link>
            <Link to={'/syllabus'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <TableOfContents size={16} />
              <p className='text-sm font-body'>Syllabus</p>
            </Link>
            <Link to={'/blog'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <BlogIcon size={16} />
              <p className='text-sm font-body'>Blog</p>
            </Link>
            <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <SendAlt size={16} />
              <p className='text-sm font-body'>Contact</p>
            </Link>
          </motion.div>
          <Hamburger color='white' size={20} rounded onToggle={() => menu === 'hide' ? setMenu('show') : setMenu('hide')} />
        </div>
      </>
    </div>
  )
}