import React from 'react'

export const ProfilePic = ({ handleAvatar, cloudinaryAvatarImage, userInfo }) => {
  return (
    <div className='flex items-center w-full justify-center w-full h-[35%] px-4'>
      <label className='h-full'>
        <img className='w-full h-full object-cover border border-[#464648] cursor-pointer' src={cloudinaryAvatarImage ? cloudinaryAvatarImage : userInfo.pic} />
        <input
          type="file"
          name="upload-avatar"
          onChange={(e) => handleAvatar(e)}
          className="w-0 h-0"
        />
      </label>
    </div>
  )
}
