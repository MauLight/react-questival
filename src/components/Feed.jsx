import React from 'react'
import { Card } from './Card'
import { Link } from 'react-router-dom'

export const Feed = ({ lessons, setError }) => {

  return (
    <div
      className="joy hidden min-[1200px]:flex items-center pl-[190px] overflow-x-scroll scrollbar-none py-10 h-screen bg-[#10100e] w-screen"
    >
      <div className="flex border-y border-[#464648] h-full">
        {
          lessons && lessons.map(post => <Link key={post.id} to={`/lessons/${post.id}`} >
            <Card
              id={post.id}
              lesson={post.lesson}
              title={post.title}
              img={post.img}
              body={post.body}
              tags={post.tags}
              setError={setError}
            />
          </Link>
          )
        }
      </div>
    </div>
  )
}
