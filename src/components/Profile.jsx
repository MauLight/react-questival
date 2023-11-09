import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { userInfo } from '../utils/user'
import { Blog, Schematics, SendAlt, TableOfContents, Course } from '@carbon/icons-react'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { ALL_POSTS, EDIT_BIO, ME } from '../queries/queries'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export const Profile = ({ setError, setToken }) => {

  //Cloudinary State
  const [cloudinaryAvatarImage, setCloudinaryAvatarImage] = useState('')

  const client = useApolloClient()

  const [editAvatar] = useMutation(EDIT_BIO, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
    }

  })

  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(ME)

  if (loading) {

    return (
      <div className='flex justify-center items-center h-[700px] w-full'>
        <div className="flex justify-center items-center h-[700px] w-screen">

          <InfinitySpin
            color="white"
          />
        </div>
      </div>
    )
  }

  if (error) {
    console.log(`Error: ${error.message}`)
  }

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
        editAvatar({ variables: { pic: response.data.secure_url } })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogOut = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  return (
    <div className="shadow flex justify-center items-center object-cover flex-col gap-y-2 px-2 h-screen"
      style={{ backgroundImage: 'url(\'https://i.postimg.cc/YjcVyQtz/bg-profile.png\')', backgroundSize: 'cover' }}
    >
      <div className='flex flex-col my-10'>
        <h1 className='text-2xl font-title2 text-white uppercase glow'>Questival</h1>
      </div>

      <div className='flex items-center w-full justify-center'>
        <label>
          <img className='h-[90px] w-[90px] object-cover rounded-full border-2 border-white cursor-pointer' src={cloudinaryAvatarImage ? cloudinaryAvatarImage : userInfo.pic} />
          <input
            type="file"
            name="upload-avatar"
            onChange={(e) => handleAvatar(e)}
            className="w-0 h-0"
          />
        </label>
      </div>

      <div className="flex flex-col justify-start items-start gap-y-5 p-5 mt-10 rounded-[10px]">

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

      <div className='flex justify-center items-center mt-auto mb-[53%]'>
        <motion.button
          onClick={handleLogOut}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='font-carbon text-[10px] border-2 p-4 rounded-full w-[70px] h-[70px] bg-[#2c262d] text-white hover:bg-white hover:text-[#3b1950] active:bg-[#9f56f4] active:text-white font-body'
        >log-out</motion.button>
      </div>
    </div>
  )
}
