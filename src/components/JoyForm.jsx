import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LOGIN } from '../queries/queries'
import { useMutation } from '@apollo/client'

export const JoyForm = ({ setToken, setSigned }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //LOGIN LOGIC
  // const [login, result] = useMutation(LOGIN, {
  //   onError: error => {
  //     setError(error.graphQLErrors[0].message)
  //   }
  // })

  const submit = async (e) => {
    e.preventDefault()
    // login({ variables: { username, password } })
    setToken(true)
  }

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
      <div className="flex justify-center items-center flex-col gap-y-2 px-10 bg-site border-0 min-h-screen">
        <div className='w-[300px] flex flex-col mb-2 mb-[40px]'>
          <h4 className='absolute font-body text-white left-[4%] text-[12px] text-left mb-0'>{'M.Light\'s'}</h4>
          <h1
            className='text-[58px] font-title2 text-white mt-0 text-center uppercase glow mt-2'>Questival</h1>
        </div>
        <div className='w-[300px]'>
          <label className='font-body text-[13px] text-white' htmlFor='username'>Username:</label>
          <input
            id='username'
            type='text'
            className='h-8 w-full font-carbon text-sm px-2 mt-2 bg-transparent text-white'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
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
        <div className="flex justify-center">
          <small className='text-carbon font-body text-white'>{'Don\'t have an account?'} <button onClick={() => setSigned(false)} className='text-carbon decoration-solid font-body text-white'>Sign In</button></small>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <motion.button
            onClick={submit}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='font-carbon text-[10px] border-2 p-4 rounded-full w-[70px] h-[70px] bg-[#2c262d] text-white hover:bg-white hover:text-[#3b1950] active:bg-[#9f56f4] active:text-white font-body'
          >login</motion.button>
        </div>
      </div>
    </>
  )
}
