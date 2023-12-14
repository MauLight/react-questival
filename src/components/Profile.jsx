import React, { useState } from 'react'
import { userInfo } from '../utils/user'
import { Blog, Schematics, SendAlt, TableOfContents, Course } from '@carbon/icons-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.webm'

export const Profile = ({ setToken }) => {

  //Cloudinary State
  const [cloudinaryAvatarImage, setCloudinaryAvatarImage] = useState('')


  const handleAvatar = (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'xksqk2bc')

    axios.post(
      'https://api.cloudinary.com/v1_1/maulight/image/upload',
      formData
    )
      .then((response) => {
        console.log(response)
        setCloudinaryAvatarImage(response.data.secure_url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogOut = () => {
    setToken(null)
    localStorage.clear()
    window.location.href = 'https://screenwriters.quest/'
  }

  return (
    <div className="flex justify-center items-center object-cover flex-col min-w-[190px] h-screen bg-[#10100e] "
    >
      <div className='flex justify-center items-center w-full px-2 h-[13vh]'>
        <a href='https://screenwriters.quest/'>
          <video
            src={logo}
            autoPlay
            loop
            muted
            className='flex items-center w-full h-auto object-cover'
          />
        </a>
      </div>

      <div className='flex items-center w-full justify-center'>
        <label className='h-[32.8vh]'>
          <img className='w-full h-full object-cover border-y border-r border-[#464648] cursor-pointer' src={cloudinaryAvatarImage ? cloudinaryAvatarImage : userInfo.pic} />
          <input
            type="file"
            name="upload-avatar"
            onChange={(e) => handleAvatar(e)}
            className="w-0 h-0"
          />
        </label>
      </div>

      <div className="flex flex-col justify-start items-start gap-y-4 px-5 py-[13.7vh] w-full border-b border-[#464648]">

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
          <Blog size={16} />
          <p className='text-sm font-body'>Blog</p>
        </Link>
        <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
          <SendAlt size={16} />
          <p className='text-sm font-body'>Contact</p>
        </Link>

      </div>

      <div className='flex justify-center items-center w-full h-full border-r border-[#464648]'>
        <button
          onClick={handleLogOut}
          className='font-carbon text-[12px] p-4 w-full h-full bg-[#10100e] text-white hover:bg-[#FC4ECF] hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
        >log-out</button>
      </div>
    </div>
  )
}
