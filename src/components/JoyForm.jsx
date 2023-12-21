// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { LOGIN } from '../queries/queries'
// import { useMutation } from '@apollo/client'

import loginService from '../services/login'
import projectsService from '../services/projects'

import logo from '../assets/logo.webm'

export const JoyForm = ({ setUser, setToken, setError }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //REST Login
  // eslint-disable-next-line no-unused-vars

  const handleLogin = async e => {
    e.preventDefault()

    if (email === '' || password === '') {
      setError('Wrong username or password.')
      setTimeout(() => {
        setError(null)
      }, 5000)
      return
    }

    try {
      const user = await loginService.login({
        email, password
      })
      console.log(user)
      window.localStorage.setItem('QuestivalUser', JSON.stringify(user))
      projectsService.setToken(user.token)
      console.log('this is the new user:', user)
      setUser(user)
      setToken(user)
      setEmail('')
      setPassword('')
    }
    catch (exception) {
      setError('Wrong credentials')
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }



  //LOGIN LOGIC
  // const [login, result] = useMutation(LOGIN, {
  //   onError: error => {
  //     setError(error.graphQLErrors[0].message)
  //   }
  // })

  // useEffect(() => {
  //   if (result.data) {
  //     const token = result.data.login.value
  //     setToken(token)
  //     console.log('SET ITEM HERE')
  //     localStorage.setItem('joybook-user-token', token)
  //   }
  // }, [result.data])

  return (
    <>
      <div className="flex justify-center items-center max-md:items-start flex-col gap-y-4 px-10 pb-32 bg-transparent border-0 min-h-screen scrollbar-none z-10">
        <div className='w-[300px] h-full max-md:w-full flex flex-col mb-2'>
          <div className='flex justify-center items-center w-full px-2'>
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
        </div>
        <div className='md:max-w-[300px] w-full'>
          <input
            id='email'
            placeholder='Email'
            type='text'
            className='glass pl-4 h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className='md:max-w-[300px] w-full'>
          <input
            id='password'
            placeholder='password'
            type='password'
            className='glass pl-4 h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="flex justify-start max-md:my-5 max-md:justify-center w-full">
          <small className='text-carbon text-[12px] font-body text-white md:max-w-[280px] px-2'>{'By clicking Login, you agree to our Terms, Privacy Policy and Cookies Policy.'}</small>
        </div>
        <div className='flex justify-center items-center mt-5 w-full'>
          <motion.button
            onClick={handleLogin}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md hover:bg-white transition-color duration-200'
          >login</motion.button>
        </div>
      </div>
    </>
  )
}
