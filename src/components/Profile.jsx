import React, { useState } from 'react'
import { userInfo } from '../utils/user'
import axios from 'axios'
import { Logo } from './Navbar/Logo'
import { ProfilePic } from './Navbar/ProfilePic'
import { NavMenu } from './Navbar/NavMenu'
import { Logout } from './Navbar/Logout'

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
    <div className="flex justify-center items-center object-cover flex-col w-full h-screen bg-[#10100e]"
    >
      <Logo />

      <ProfilePic
        handleAvatar={handleAvatar}
        cloudinaryAvatarImage={cloudinaryAvatarImage}
        userInfo={userInfo}
      />

      <NavMenu />

      <Logout handleLogOut={handleLogOut} />
    </div>
  )
}
