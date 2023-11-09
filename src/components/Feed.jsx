import React from 'react'
import { Card } from './Card'
// import { posts } from '../utils/posts'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAll } from '../services/lessons'

export const Feed = ({ setError }) => {

  const [lessons, setLessons] = useState(null)

  useEffect(() => {
    getAll()
      .then(response => {
        console.log('promise fulfilled!')
        // console.log(response)
        setLessons(response)
      })
  }, [])

  return (
    <div
      className="joy hidden min-[1200px]:flex items-center pl-[340px] gap-x-5 overflow-x-scroll scrollbar-none py-10 h-screen bg-[#2c262d] w-screen"
    >
      {
        lessons && lessons.map(post => <Card
          key={post.id}
          id={post.id}
          lesson={post.lesson}
          title={post.title}
          author={post.author.username}
          img={post.img}
          body={post.body}
          likes={post.likes}
          tags={post.tags}
          lorem={post.lorem}
          setError={setError}
        />)
      }
    </div>
  )
}
