// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { LOGIN } from '../queries/queries'
// import { useMutation } from '@apollo/client'

import loginService from '../services/login'
import projectsService from '../services/projects'

export const JoyForm = ({ setToken, setError }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //REST Login
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)

  const handleLogin = async e => {
    e.preventDefault()

    if (email === '' || password === '') {
      setError('Dumbass')
      setTimeout(() => {
        setError(null)
      }, 5000)
    }

    try {
      const user = await loginService.login({
        email, password
      })
      projectsService.setToken(user.token)
      setUser(user)
      setToken(user)
      setEmail('')
      setPassword('')
    }
    catch(exception) {
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
      <div className="flex justify-center items-start flex-col gap-y-2 px-10 bg-site border-0 min-h-screen">
        <div className='w-[300px] flex flex-col mb-2 mb-[40px]'>
          <h4 className='absolute font-body text-white left-[4%] text-[12px] text-left mb-0'>{'M.Light\'s'}</h4>
          <h1
            className='text-[58px] font-title2 text-white mt-0 text-center uppercase glow mt-2'>Questival</h1>
        </div>
        <div className='w-[300px]'>
          <label className='font-body text-[13px] text-white' htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            className='h-8 w-full font-carbon text-sm px-2 mt-2 bg-transparent text-white'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className='w-[300px]'>
          <label className='font-body text-[13px] text-white' htmlFor='username'>Password:</label>
          <input
            id='password'
            type='password'
            className='h-8 w-full font-carbon text-sm px-2 mt-2 bg-transparent text-white'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="flex justify-start">
          <small className='text-carbon font-body text-white w-[280px]'>{'By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.'}</small>
        </div>
        <div className='flex justify-center items-center mt-5 w-full'>
          <motion.button
            onClick={handleLogin}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='font-carbon text-[10px] border-2 p-4 rounded-full w-[70px] h-[70px] bg-[#2c262d] text-white hover:bg-white hover:text-[#3b1950] active:bg-[#9f56f4] active:text-white font-body'
          >login</motion.button>
        </div>
      </div>
    </>
  )
}
