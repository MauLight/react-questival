import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sling as Hamburger } from 'hamburger-react'
import { Blog as BlogIcon, Schematics, SendAlt, TableOfContents, Course } from '@carbon/icons-react'
import { fadeInSmall } from '../variants'

import logo from '../assets/logo.webm'
import { useState } from 'react'

export const Navbar = ({ menu, setMenu }) => {

  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!toggled)
    if(menu === 'hide') {setMenu('show')}
    else {setMenu('hide')}

  }

  return (
    <div className="flex justify-between items-center w-full py-0 sm:py-2 px-3 sm:px-10 z-[2] border-b border-[#464648] bg-[#10100e] max-h-20">
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
        <div className='flex sm:hidden justify-center items-center font-body text-md gap-x-4 z-50'>
          <motion.div
            className='w-[150px] flex flex-col items-end fixed bg-[#10100e] top-[7%] right-[0%] border-b px-4 py-5 gap-y-2 border-l border-[#464648]'
            variants={fadeInSmall('down', 0.5)}
            initial='hidden'
            whileInView={menu}
            viewport={{ once: false, amount: 0.7 }}>
            <Link to={'/myproject'} onClick={handleToggle} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Schematics size={16} />
              <p className='text-sm font-body'>My Project</p>
            </Link>
            <Link to={'/'} onClick={handleToggle} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Course size={16} />
              <p className='text-sm font-body'>Course</p>
            </Link>
            <Link to={'/syllabus'} onClick={handleToggle} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <TableOfContents size={16} />
              <p className='text-sm font-body'>Syllabus</p>
            </Link>
            <Link to={'/blog'} onClick={handleToggle} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <BlogIcon size={16} />
              <p className='text-sm font-body'>Blog</p>
            </Link>
            <Link to={'/'} onClick={handleToggle} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <SendAlt size={16} />
              <p className='text-sm font-body'>Contact</p>
            </Link>
          </motion.div>
          <Hamburger color='white' size={20} rounded toggled={toggled} onToggle={handleToggle} />
        </div>
      </>
    </div>
  )
}