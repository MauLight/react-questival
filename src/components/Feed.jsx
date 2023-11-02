import React from 'react'
import { Card } from './Card'
import { posts } from '../utils/posts'

export const Feed = ({ setError }) => {

  return (
    <div
      className="joy hidden min-[1200px]:flex items-center pl-[340px] gap-x-5 overflow-x-scroll scrollbar-none py-10 h-screen bg-[#2c262d] w-screen"
    >
      {
        posts.map(post => <Card
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
