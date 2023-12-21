import React from 'react'
import { Link } from 'react-router-dom'

export const NavMenu = () => {
  return (
    <div className="h-[53%] flex flex-col justify-center items-start py-10 gap-y-2 px-5 w-full">

      <Link to={'/portfolio'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-solid fa-briefcase"></i>
        <p className='text-md font-body'>Portfolio</p>
      </Link>
      <Link to={'/myproject'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-regular fa-folder-open"></i>
        <p className='text-md font-body'>My Project</p>
      </Link>
      <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-solid fa-graduation-cap"></i>
        <p className='text-md font-body'>Course</p>
      </Link>
      <Link to={'/syllabus'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-solid fa-list-check"></i>
        <p className='text-md font-body'>Syllabus</p>
      </Link>
      <Link to={'/blog'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-solid fa-blog"></i>
        <p className='text-md font-body'>Blog</p>
      </Link>
      <a href='https://t.me/+8BUhBaokyQUwYzZh' className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
        <i className="fa-regular fa-paper-plane"></i>
        <p className='text-md font-body'>Contact</p>
      </a>

    </div>
  )
}
