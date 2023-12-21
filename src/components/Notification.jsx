import React from 'react'

export default function Notification({ errorMessage, type }) {

  let message = errorMessage

  if(message === 'Creation of user failed') {
    message = 'Username already taken'
  }

  if (message === null) {
    return null
  }

  return (
    <div id="error" className={type === 'add' ? 'bg-green-700 text-2xl sm:text-5xl font-body p-5 my-2 w-full' : 'w-full flex justify-center bg-red-600 text-2xl sm:text-5xl font-body p-5 my-2'}>
      {message}
    </div>
  )
}
